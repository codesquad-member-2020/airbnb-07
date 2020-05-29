package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Accommodation {

    @Id
    private Long id;

    private String hotelName;
    private String description;
    private String location;
    private String street;
    private String latitude;
    private String longitude;
    private Integer availableGuest;
    private Integer current_price;
    private Integer previous_price;
    private Integer discount_price;
    private String hotelRating;
    private List<AccommodationReservation> reservations = new ArrayList<>();
    private List<Picture> pictures = new ArrayList<>();

    public void addReservationDate(AccommodationReservation reservation) {
        this.getReservations().add(reservation);
    }

    public void deleteReservation(Long reservationId) {

        AccommodationReservation willDelete = this.reservations.stream()
                .filter(reservation -> reservation.getId().equals(reservationId))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("해당 reservation이 없습니다. reservationId = " + reservationId));

        this.reservations.remove(willDelete);
    }
}
