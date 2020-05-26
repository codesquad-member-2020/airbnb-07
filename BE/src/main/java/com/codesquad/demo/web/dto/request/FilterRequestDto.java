package com.codesquad.demo.web.dto.request;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class FilterRequestDto {

    private String startDate;
    private String endDate;
    private String people;
    private String min;
    private String max;
}
