package com.codesquad.demo.service;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.domain.AccommodationReservation;
import com.codesquad.demo.domain.Airbnb;
import com.codesquad.demo.domain.AirbnbRepository;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.PriceRangeResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchService {

    private final AirbnbRepository airbnbRepository;

    public SearchService(AirbnbRepository airbnbRepository) {
        this.airbnbRepository = airbnbRepository;
    }

    public AllAccommodationResponseDto getInit() {

        Long id = 1L;
        String status = "200";

        Airbnb airbnb = findAirbnbById(id);

        List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                = new ArrayList<>();

        for (int index = 0; index < 30; index++) {
            Accommodation accommodation = airbnb.getAccommodations().get(index);

            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);

            eachAccommodationResponseDtos.add(each);
        }

        List<PriceRangeResponseDto> prices = getPrices(airbnb.getAccommodations());

        return AllAccommodationResponseDto.builder()
                .status(status)
                .allData(eachAccommodationResponseDtos)
                .prices(prices)
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

        String requestLocation = filterRequestDto.getLocation();
        LocalDate requestStart = filterRequestDto.getStartDate();
        LocalDate requestEnd = filterRequestDto.getEndDate();
        int requestPeople = filterRequestDto.getPeople();
        Integer requestMinPrice = filterRequestDto.getMin();
        Integer requestMaxPrice = filterRequestDto.getMax();

        List<Accommodation> accommodationByFilter = new ArrayList<>();

        // location에 따라 숙박업소 리스트업하기
        List<Accommodation> accommodationsByFiltering = airbnb.getAccommodations().stream()
                .filter(each -> each.getLocation().equals(requestLocation))
                .collect(Collectors.toList());

        // 수용인원이 가능한 숙박 남기기
        accommodationsByFiltering = accommodationsByFiltering.stream()
                .filter(each -> each.getAvailableGuest() >= requestPeople)
                .collect(Collectors.toList());

        // 예약 금액 사이에 있는 숙박 업소 추리기
        if (requestMinPrice != null) {
            accommodationsByFiltering = accommodationsByFiltering.stream()
                    .filter(each -> (each.getCurrent_price() >= requestMinPrice && each.getCurrent_price() <= requestMaxPrice))
                    .collect(Collectors.toList());
        }

        // 예약이 있는 숙박업소
        List<Accommodation> reservedAccommodations = accommodationsByFiltering.stream()
                .filter(each -> each.getReservations().size() != 0)
                .collect(Collectors.toList());

        // 예약이 있는 숙박업소에서 사용자의 예약에 맞는 숙박업소를 찾는 과정
        for (Accommodation accommodation : reservedAccommodations) {

            boolean ok = isReservable(accommodation, requestStart, requestEnd);

            if (ok) accommodationByFilter.add(accommodation);
        }

        // 예약이 없는 숙박업소
        accommodationByFilter.addAll(accommodationsByFiltering.stream()
                .filter(each -> each.getReservations().size() == 0)
                .collect(Collectors.toList()));

//        accommodationByFilter.sort(Comparator.comparing(Accommodation::getId))

        return accommodationByFilter;
    }

    private boolean isReservable(Accommodation accommodation, LocalDate requestStart, LocalDate requestEnd) {

        for (AccommodationReservation each : accommodation.getReservations()) {
            if ((each.getStartDate().isBefore(requestStart) && each.getEndDate().isAfter(requestStart)
                    || (each.getStartDate().isBefore(requestEnd) && each.getEndDate().isAfter(requestEnd)))) {
                return false;
            }
            if ((each.getStartDate().isEqual(requestStart) || each.getEndDate().isEqual(requestStart))
                    || (each.getStartDate().isEqual(requestEnd) || each.getEndDate().isEqual(requestEnd))) {

                return false;

            }
            if ((requestStart.isBefore(each.getStartDate()) && requestEnd.isAfter(each.getStartDate()))
                    || (requestStart.isBefore(each.getEndDate()) && requestEnd.isAfter(each.getEndDate()))) {
                return false;
            }
        }

        return true;
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
}
