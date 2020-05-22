package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
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
    private String availableGuest;
    private Integer current_price;
    private Integer previous_price;
    private Integer discount_price;
    private String hotelRating;
    private Reservation reservation;
    private List<ReservationDate> reservationDates;
    private List<Picture> pictures;

}
