package com.codesquad.demo.domain.repotest;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@ToString
public class Data {

    @Id
    private Long id;

    private String value;

    public Data(String value) {
        this.value = value;
    }

}
