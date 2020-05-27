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
                                LocalDate startDate, LocalDate endDate, Integer people) {

        Reservation reservation = Reservation.builder()
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
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
}
