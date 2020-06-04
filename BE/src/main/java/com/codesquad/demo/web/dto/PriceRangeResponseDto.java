package com.codesquad.demo.web.dto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class PriceRangeResponseDto {

    private int total;
    private int price;

    public void plusTotal() {
        this.total++;
    }
}
