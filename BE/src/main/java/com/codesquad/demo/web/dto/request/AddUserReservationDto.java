package com.codesquad.demo.web.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class AddUserReservationDto {

    private Long userId;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer people;
    private Integer totalPrice;
    private Integer index;
}