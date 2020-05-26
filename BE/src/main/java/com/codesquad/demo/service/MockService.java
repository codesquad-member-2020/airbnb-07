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

        for (int index = 0; index < 10; index++) {
            Accommodation accommodation = airbnb.getAccommodations().get(index);

            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);

            eachAccommodationResponseDtos.add(each);
        }

        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .build();
    }

    public AllAccommodationResponseDto getFiltering(FilterRequestDto filterRequestDto) {

        String status = "200";

        Long id = 1L;
        Airbnb airbnb = findAirbnbById(id);

        List<Accommodation> reservableAccommodations
                = filteringForReservation(filterRequestDto, airbnb);

        List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                = getEachAccommodationResponseDtos(reservableAccommodations);

        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .build();
    }

    private List<EachAccommodationResponseDto> getEachAccommodationResponseDtos(List<Accommodation> reservableAccommodations) {
        List<EachAccommodationResponseDto> eachAccommodationResponseDtos = new ArrayList<>();

        for (Accommodation accommodation : reservableAccommodations) {
            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);
            eachAccommodationResponseDtos.add(each);
        }
        return eachAccommodationResponseDtos;
    }

    private Airbnb findAirbnbById(Long id) {
        return airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = "+id));
    }

    private List<Accommodation> filteringForReservation(FilterRequestDto filterRequestDto, Airbnb airbnb) {

        LocalDate requestStart = LocalDate.parse(filterRequestDto.getStartDate());
        LocalDate requestEnd = LocalDate.parse(filterRequestDto.getEndDate());

        String requestPeople = filterRequestDto.getPeople();
        String requestMinPrice = filterRequestDto.getMin();
        String requestMaxPrice = filterRequestDto.getMax();

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
        }

        // 예약 인원보다 수용 인원이 큰 숙박 업소 추리기
        accommodations = accommodations.stream()
                .filter(each -> each.getAvailableGuest() >= Integer.parseInt(requestPeople))
                .collect(Collectors.toList());

        // 예약 금액 사이에 있는 숙박 업소 추리기
        accommodations = accommodations.stream()
                .filter(each -> (each.getCurrent_price() >= Integer.parseInt(requestMinPrice) && each.getCurrent_price() <= Integer.parseInt(requestMaxPrice)))
                .collect(Collectors.toList());

        return accommodations;
    }
}
