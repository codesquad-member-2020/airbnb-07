package com.codesquad.demo.web.dto;

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
    private String latitude;
    private String longitude;
    private String availableGuest;
    private Integer currentPrice;
    private Integer previousPrice;
    private String hotelRating;
    private List<Picture> urls;
}
