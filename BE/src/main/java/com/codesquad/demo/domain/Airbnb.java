package com.codesquad.demo.domain;

import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.Comparator;
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

    public void reservationSaveToUser(String userEmail, ReservationRequestDto reservationRequestDto) {

        LocalDate startDate = reservationRequestDto.getStartDate();
        LocalDate endDate = reservationRequestDto.getEndDate();
        int people = reservationRequestDto.getPeople();
        int totalPrice = reservationRequestDto.getTotalPrice();

        UserReservation reservation = UserReservation.builder()
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

    public User findUserByUserEmail(String userEmail) {
        return this.users.stream()
                .filter(each -> each.getEmail().equals(userEmail))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("해당 user가 없습니다. userEmail = "+ userEmail));
    }

    public void reservationSaveToAccommodation(Long accommodationId, ReservationRequestDto reservationRequestDto) {

        LocalDate startDate = reservationRequestDto.getStartDate();
        LocalDate endDate = reservationRequestDto.getEndDate();
        int people = reservationRequestDto.getPeople();
        int totalPrice = reservationRequestDto.getTotalPrice();

        AccommodationReservation reservation = AccommodationReservation.builder()
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
                .totalPrice(totalPrice)
                .build();

        for (Accommodation each : accommodations) {
            if (each.getId().equals(accommodationId)) {
                each.addReservationDate(reservation);
            }
        }
    }
}
