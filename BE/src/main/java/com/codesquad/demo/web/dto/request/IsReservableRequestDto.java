package com.codesquad.demo.web.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class IsReservableRequestDto {

    private Long accommodationId;
    private LocalDate startDate;
    private LocalDate endDate;
}
