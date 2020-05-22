package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Airbnb {

    @Id
    private Long id;

    List<Accommodation> accommodations;
    List<User> users;
}
