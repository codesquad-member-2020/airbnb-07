package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

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
    private List<Reservation> reservations;

    public void addReservation(Reservation reservation) {
        this.reservations.add(reservation);
    }
}
