package com.codesquad.demo.domain.mybatis;


import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TblUser implements Serializable {

    private String id;
    private String userName;
    private String passWord;
}
