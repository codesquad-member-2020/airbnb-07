package com.codesquad.demo.web.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class ReservationRequestDto {

    private LocalDate startDate;
    private LocalDate endDate;
    private Integer people;
    private Integer totalPrice;
}
