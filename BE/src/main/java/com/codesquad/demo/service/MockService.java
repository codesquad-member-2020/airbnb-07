package com.codesquad.demo.service;

import com.codesquad.demo.domain.*;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.PriceRangeResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
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

        List<PriceRangeResponseDto> prices = getPrices(reservableAccommodations);

        List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                = getEachAccommodationResponseDtos(reservableAccommodations);

        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .prices(prices)
                .build();
    }



    private List<PriceRangeResponseDto> initPriceRangeResponseDto() {
        List<PriceRangeResponseDto> priceRangeResponseDtos = new ArrayList<>();
        List<Integer> numbers = Arrays.asList(10000, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000,
                                            500000, 550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000);

        for (Integer number : numbers) {
            priceRangeResponseDtos.add(PriceRangeResponseDto.builder()
                    .total(0)
                    .price(number)
                    .build());
        }

        return priceRangeResponseDtos;
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
                .filter(each -> each.getReservations().size() == 0)
                .collect(Collectors.toList());

        // 예약이 있는 숙박업소
        List<Accommodation> reservedAccommodations = airbnb.getAccommodations().stream()
                .filter(each -> each.getReservations().size() != 0)
                .collect(Collectors.toList());

        // 예약이 있는 숙박업소에서 사용자의 예약에 맞는 숙박업소를 찾는 과정
        for (Accommodation accommodation : reservedAccommodations) {

            boolean ok = true;
            for (Reservation each : accommodation.getReservations()) {
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
        if (requestMinPrice != null) {
            accommodations = accommodations.stream()
                    .filter(each -> (each.getCurrent_price() >= Integer.parseInt(requestMinPrice) && each.getCurrent_price() <= Integer.parseInt(requestMaxPrice)))
                    .collect(Collectors.toList());
        }

        return accommodations;
    }

    private List<PriceRangeResponseDto> getPrices(List<Accommodation> reservableAccommodations) {
        List<PriceRangeResponseDto> init = initPriceRangeResponseDto();

        for (Accommodation accommodation : reservableAccommodations) {
            int price = accommodation.getCurrent_price();
            if (price >= 0 && price < 50000) {
                PriceRangeResponseDto each = init.get(0);
                each.plusTotal();
            } else if (price >= 50000 && price < 100000) {
                PriceRangeResponseDto each = init.get(1);
                each.plusTotal();
            } else if (price >= 100000 && price < 150000) {
                PriceRangeResponseDto each = init.get(2);
                each.plusTotal();
            } else if (price >= 150000 && price < 200000) {
                PriceRangeResponseDto each = init.get(3);
                each.plusTotal();
            } else if (price >= 200000 && price < 250000) {
                PriceRangeResponseDto each = init.get(4);
                each.plusTotal();
            } else if (price >= 250000 && price < 300000) {
                PriceRangeResponseDto each = init.get(5);
                each.plusTotal();
            } else if (price >= 300000 && price < 350000) {
                PriceRangeResponseDto each = init.get(6);
                each.plusTotal();
            } else if (price >= 350000 && price < 400000) {
                PriceRangeResponseDto each = init.get(7);
                each.plusTotal();
            } else if (price >= 400000 && price < 450000) {
                PriceRangeResponseDto each = init.get(8);
                each.plusTotal();
            } else if (price >= 450000 && price < 500000) {
                PriceRangeResponseDto each = init.get(9);
                each.plusTotal();
            } else if (price >= 500000 && price < 550000) {
                PriceRangeResponseDto each = init.get(10);
                each.plusTotal();
            } else if (price >= 550000 && price < 600000) {
                PriceRangeResponseDto each = init.get(11);
                each.plusTotal();
            } else if (price >= 600000 && price < 650000) {
                PriceRangeResponseDto each = init.get(12);
                each.plusTotal();
            } else if (price >= 650000 && price < 700000) {
                PriceRangeResponseDto each = init.get(13);
                each.plusTotal();
            } else if (price >= 700000 && price < 750000) {
                PriceRangeResponseDto each = init.get(14);
                each.plusTotal();
            } else if (price >= 750000 && price < 800000) {
                PriceRangeResponseDto each = init.get(15);
                each.plusTotal();
            } else if (price >= 800000 && price < 850000) {
                PriceRangeResponseDto each = init.get(16);
                each.plusTotal();
            } else if (price >= 850000 && price < 900000) {
                PriceRangeResponseDto each = init.get(17);
                each.plusTotal();
            } else if (price >= 900000 && price < 950000) {
                PriceRangeResponseDto each = init.get(18);
                each.plusTotal();
            } else {
                PriceRangeResponseDto each = init.get(19);
                each.plusTotal();
            }
        }

        return init;
    }

    public ReservationResponseDto reserve(ReservationRequestDto reservationRequestDto,
                                          HttpServletRequest request) {

        try {
//            String userEmail = (String) request.getAttribute("userEmail");
            String userEmail = "guswns1659@gmail.com";
            Long id = 1L;

            Long accommodationId = reservationRequestDto.getId();
            LocalDate startDate = reservationRequestDto.getStartDate();
            LocalDate endDate = reservationRequestDto.getEndDate();
            Integer people = reservationRequestDto.getPeople();

            Airbnb airbnb = findAirbnbById(id);

            User user = User.builder()
                    .email("zmdk1127@naver.com")
                    .build();

            airbnb.getUsers().add(user);

            airbnb.reservationSave(userEmail, accommodationId, startDate, endDate, people);

            airbnbRepository.save(airbnb);

            return ReservationResponseDto.builder()
                    .status("200")
                    .build();

        } catch (Exception e) {
            e.printStackTrace();

            return ReservationResponseDto.builder()
                    .status("404")
                    .build();
        }
    }
}
