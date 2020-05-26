package com.codesquad.demo.web.dto;

import lombok.*;

import java.util.List;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor
@Builder
public class AllAccommodationResponseDto {

    private String status;
    private List<EachAccommodationResponseDto> allData;
    private List<PriceRangeResponseDto> prices;
}
