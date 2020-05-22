package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class User {

    @Id
    private Long id;

    private String email;
    private List<Reservation> reservations;
}
