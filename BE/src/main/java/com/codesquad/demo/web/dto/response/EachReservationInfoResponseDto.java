package com.codesquad.demo.web.dto.response;

import com.codesquad.demo.domain.Picture;
import com.codesquad.demo.domain.UserReservation;
import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class EachReservationInfoResponseDto {

    private Long accommodationId;
    private String hotelName;
    private List<Picture> urls;
    private UserReservation reservation;
}
