package com.codesquad.demo;

import com.codesquad.demo.domain.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class DemoApplicationTests {

    @Autowired
    private AirbnbRepository airbnbRepository;

    @Test
    void contextLoads() {

    }

    @Test
    void saveAirbnbTest() {

        // given
        Reservation reservation = new Reservation();
        List<Reservation> reservations = new ArrayList<>();

        User user = User.builder()
                .email("zmdk1127@naver.com")
                .reservations(reservations)
                .build();

        List<User> users = new ArrayList<>();
        users.add(user);

        List<Picture> pictures = new ArrayList<>();
        pictures.add(Picture.builder()
        .url("http://www.naver.com")
        .build());

        List<ReservationDate> reservationDates = new ArrayList<>();
        reservationDates.add(ReservationDate.builder()
        .startDate(LocalDate.of(2020, 5, 10))
        .endDate(LocalDate.of(2020, 5, 23))
        .build());

        List<Accommodation> accommodations = new ArrayList<>();
        Accommodation accommodation = Accommodation.builder()
                .hotelName("hotelName")
                .previous_price(10000)
                .discount_price(1000)
                .current_price(9000)
                .location("Seattle")
                .availableGuest("4")
                .hotelRating("3.4")
                .description("Good Hotel")
                .reservation(reservation)
                .pictures(pictures)
                .reservationDates(reservationDates)
                .build();

        accommodations.add(accommodation);

        Airbnb airbnb = Airbnb.builder()
                .accommodations(accommodations)
                .users(users)
                .build();

        // when
        airbnbRepository.save(airbnb);

        // then
        System.out.println(airbnbRepository.findAll());
    }
}
