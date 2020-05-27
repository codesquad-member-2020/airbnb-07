package com.codesquad.demo.domain.repotest;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class Test {

    @Id
    private Long id;

    private String temperary;
    private List<Data> datas = new ArrayList<>();

    public void addData(Data data) {
        this.datas.add(data);
    }
}
