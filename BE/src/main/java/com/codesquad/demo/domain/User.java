package com.codesquad.demo.domain;

import com.codesquad.demo.web.dto.response.AllReservationInfoResponseDto;
import com.codesquad.demo.web.dto.response.EachReservationInfoResponseDto;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class User {

    @Id
    private Long id;

    private String email;
    private List<UserReservation> reservations = new ArrayList<>();

    public void addReservation(UserReservation reservation) {
        this.reservations.add(reservation);
    }

    public void deleteReservation(Long reservationId) {
        UserReservation willDelete = this.reservations.stream()
                .filter(reservation -> reservation.getId().equals(reservationId))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("해당 reservation이 없습니다. reservationId = " + reservationId));

        this.reservations.remove(willDelete);
        this.reservations.sort(Comparator.comparing(UserReservation::getId));
    }

    public AllReservationInfoResponseDto showReservationInfos(List<Accommodation> accommodations) {

        List<EachReservationInfoResponseDto> eachReservationInfoResponseDtos
                = new ArrayList<>();

        this.getReservations().sort(Comparator.comparing(UserReservation::getId).reversed());

        try {
            for (UserReservation each : this.getReservations()) {
                for (Accommodation accommodation : accommodations) {
                    for (AccommodationReservation each2 : accommodation.getReservations()) {
                        if (each2.getId().equals(each.getId())) {

                            eachReservationInfoResponseDtos.add(EachReservationInfoResponseDto.builder()
                                    .accommodationId(accommodation.getId())
                                    .hotelName(accommodation.getHotelName())
                                    .urls(accommodation.getPictures())
                                    .reservation(each)
                                    .build());
                        }
                    }

                }
            }

            return AllReservationInfoResponseDto.builder()
                    .status("200")
                    .allData(eachReservationInfoResponseDtos)
                    .build();

        } catch (Exception e) {

            e.printStackTrace();
            return AllReservationInfoResponseDto.builder()
                    .status("202")
                    .build();
        }
    }
}
