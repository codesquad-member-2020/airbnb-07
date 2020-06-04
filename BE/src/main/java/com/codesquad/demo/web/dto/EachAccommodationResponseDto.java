package com.codesquad.demo.web.dto;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.domain.Picture;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class EachAccommodationResponseDto {

    private Long id;
    private String hotelName;
    private String description;
    private String location;
    private String street;
    private Double lat;
    private Double lng;
    private Integer availableGuest;
    private Integer currentPrice;
    private Integer previousPrice;
    private String hotelRating;
    private List<Picture> urls;

    public EachAccommodationResponseDto toEntity(Accommodation accommodation) {

        List<Picture> urls = accommodation.getPictures();

        return EachAccommodationResponseDto.builder()
                .id(accommodation.getId())
                .hotelName(accommodation.getHotelName())
                .availableGuest(accommodation.getAvailableGuest())
                .currentPrice(accommodation.getCurrent_price())
                .previousPrice(accommodation.getPrevious_price())
                .description(accommodation.getDescription())
                .hotelRating(accommodation.getHotelRating())
                .lat(accommodation.getLatitude())
                .lng(accommodation.getLongitude())
                .location(accommodation.getLocation())
                .street(accommodation.getStreet())
                .urls(urls)
                .build();
    }
}
