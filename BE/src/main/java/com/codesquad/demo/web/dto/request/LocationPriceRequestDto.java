package com.codesquad.demo.web.dto.request;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class LocationPriceRequestDto {

    private String location;
    private Integer people;
}
