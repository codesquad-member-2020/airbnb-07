package com.codesquad.demo.service;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.domain.Airbnb;
import com.codesquad.demo.domain.AirbnbRepository;
import com.codesquad.demo.domain.Picture;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class MockService {

    private final AirbnbRepository airbnbRepository;

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
}
