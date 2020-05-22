package com.codesquad.demo.web.dto.login;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class AccessTokenRequestDto {

    private String client_id;
    private String client_secret;
    private String code;
    private String redirect_url;
}
