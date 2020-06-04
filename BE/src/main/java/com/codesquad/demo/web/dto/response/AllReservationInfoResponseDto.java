package com.codesquad.demo.web.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class AllReservationInfoResponseDto {

    private String status;
    private List<EachReservationInfoResponseDto> allData;
}
