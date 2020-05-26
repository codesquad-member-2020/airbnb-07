package com.codesquad.demo.service;

import com.codesquad.demo.domain.*;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MockService {

    private final AirbnbRepository airbnbRepository;

    private final Logger logger = LoggerFactory.getLogger(MockService.class);

    public AllAccommodationResponseDto getAll() {

        Long id = 1L;
        String status = "200";

        Airbnb airbnb = airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = "+id));

        List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                = new ArrayList<>();

//        List<Picture> urls = new ArrayList<>();

        for (int index = 0; index < 10; index++) {
            Accommodation accommodation = airbnb.getAccommodations().get(index);
            List<Picture> urls = accommodation.getPictures();

            EachAccommodationResponseDto each = EachAccommodationResponseDto.builder()
                    .id(accommodation.getId())
                    .hotelName(accommodation.getHotelName())
                    .availableGuest(accommodation.getAvailableGuest())
                    .currentPrice(accommodation.getCurrent_price())
                    .previousPrice(accommodation.getPrevious_price())
                    .description(accommodation.getDescription())
                    .hotelRating(accommodation.getHotelRating())
                    .latitude(accommodation.getLatitude())
                    .longitude(accommodation.getLongitude())
                    .location(accommodation.getLocation())
                    .street(accommodation.getStreet())
                    .urls(urls)
                    .build();

            eachAccommodationResponseDtos.add(each);
        }
        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .build();
    }

    public AllAccommodationResponseDto getFiltering(FilterRequestDto filterRequestDto) {

        LocalDate requestStart = LocalDate.parse(filterRequestDto.getStartDate());
        LocalDate requestEnd = LocalDate.parse(filterRequestDto.getEndDate());

        logger.info("requestStart : {}", requestStart);
        logger.info("requestEnd : {}", requestEnd);

        String people = filterRequestDto.getPeople();
        String min = filterRequestDto.getMin();
        String max = filterRequestDto.getMax();
        String status = "200";

        Long id = 1L;

        Airbnb airbnb = airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = "+id));

        // 예약이 없는 숙박업소
        List<Accommodation> accommodations = airbnb.getAccommodations().stream()
                .filter(each -> each.getReservationDates().size() == 0)
                .collect(Collectors.toList());

        // 예약이 있는 숙박업소
        List<Accommodation> reservedAccommodations = airbnb.getAccommodations().stream()
                .filter(each -> each.getReservationDates().size() != 0)
                .collect(Collectors.toList());

        logger.info("reservedAccommodations : {}", reservedAccommodations);

        // 예약이 있는 숙박업소에서 사용자의 예약에 맞는 숙박업소를 찾는 과정
        for (Accommodation accommodation : reservedAccommodations) {

            boolean ok = true;
            for (ReservationDate each : accommodation.getReservationDates()) {
                if ((each.getStartDate().isBefore(requestStart) && each.getEndDate().isAfter(requestStart)
                    || (each.getStartDate().isBefore(requestEnd) && each.getEndDate().isAfter(requestEnd)))) {
                    ok = false;
                    break;
                }
                if ((each.getStartDate().isEqual(requestStart) || each.getEndDate().isEqual(requestStart))
                || (each.getStartDate().isEqual(requestEnd) || each.getEndDate().isEqual(requestEnd))) {
                    ok = false;
                    break;
                }
            }
            if (ok) accommodations.add(accommodation);

//            long count = accommodation.getReservationDates().stream()
//                    .filter(each -> (each.getStartDate().isAfter(requestStart) && each.getEndDate().isBefore(requestStart)
//                    ||
//                            (each.getStartDate().isAfter(requestEnd) && each.getEndDate().isBefore(requestEnd))))
//                    .count();

//            if (count == 0) {
//                accommodations.add(accommodation);
//            }
        }

        List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                = new ArrayList<>();

        for (Accommodation accommodation : accommodations) {
            List<Picture> urls = accommodation.getPictures();

            EachAccommodationResponseDto each = EachAccommodationResponseDto.builder()
                    .id(accommodation.getId())
                    .hotelName(accommodation.getHotelName())
                    .availableGuest(accommodation.getAvailableGuest())
                    .currentPrice(accommodation.getCurrent_price())
                    .previousPrice(accommodation.getPrevious_price())
                    .description(accommodation.getDescription())
                    .hotelRating(accommodation.getHotelRating())
                    .latitude(accommodation.getLatitude())
                    .longitude(accommodation.getLongitude())
                    .location(accommodation.getLocation())
                    .street(accommodation.getStreet())
                    .urls(urls)
                    .build();

            eachAccommodationResponseDtos.add(each);
        }

        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .build();
    }
}
