package com.codesquad.demo.web.dto.response;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class DeleteReservationResponseDto {

    private String status;
    private String message;

}
