package com.codesquad.demo.web.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class FilterRequestDto {

    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer people;
    private Integer min;
    private Integer max;
}
