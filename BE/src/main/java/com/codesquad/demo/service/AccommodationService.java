package com.codesquad.demo.service;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.domain.Airbnb;
import com.codesquad.demo.domain.AirbnbRepository;
import com.codesquad.demo.repository.AccommodationRepository;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.PriceRangeResponseDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    private final AirbnbRepository airbnbRepository;

    public AccommodationService(AccommodationRepository accommodationRepository, AirbnbRepository airbnbRepository) {
        this.accommodationRepository = accommodationRepository;
        this.airbnbRepository = airbnbRepository;
    }

    public AllAccommodationResponseDto getInit() {

        List<Accommodation> accommodations =
                accommodationRepository.getInitAccommodations();

        List<EachAccommodationResponseDto> allData
                = new ArrayList<>();

        for (Accommodation accommodation : accommodations) {
            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);

            allData.add(each);
        }

        Long id = 1L;
        Airbnb airbnb = findAirbnbById(id);

        List<PriceRangeResponseDto> prices = getPrices(airbnb.getAccommodations());

        return AllAccommodationResponseDto.builder()
                .status("200")
                .allData(allData)
                .prices(prices)
                .build();
    }

    private Airbnb findAirbnbById(Long id) {
        return airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = " + id));
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
