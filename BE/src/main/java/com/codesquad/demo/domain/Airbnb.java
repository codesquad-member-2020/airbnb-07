package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import javax.annotation.Generated;
import java.time.LocalDate;
import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Airbnb {

    @Id
    private Long id;

    private String jack;
    List<Accommodation> accommodations;
    List<User> users;

    public void reservationSave(String userEmail, Long accommodationId,
                                LocalDate startDate, LocalDate endDate, int people, int totalPrice) {

        Reservation reservation = Reservation.builder()
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
                .totalPrice(totalPrice)
                .build();

        for (User each : users) {
            if (each.getEmail().equals(userEmail)) {
                each.addReservation(reservation);
            }
        }

        for (Accommodation each : accommodations) {
            if (each.getId().equals(accommodationId)) {
                each.addReservationDate(reservation);
            }
        }

    }

    public void deleteReservation(Long accommodationId, Long reservationId, String userEmail) {

        User user = this.users.stream()
                .filter(each -> each.getEmail().equals(userEmail))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("해당 user가 없습니다. userEmail = "+ userEmail));

        user.deleteReservation(reservationId);

        Accommodation accommodation = this.getAccommodations().stream()
                .filter(each -> each.getId().equals(accommodationId))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("해당 accommodation이 없습니다. accommodationId = "+ accommodationId));

        accommodation.deleteReservation(reservationId);

    }
}
