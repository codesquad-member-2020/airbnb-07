package com.codesquad.demo.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Picture {

    @Id
    private Long id;

    private String url;
}
