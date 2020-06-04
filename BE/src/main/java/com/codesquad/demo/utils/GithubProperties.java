package com.codesquad.demo.utils;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("github")
@Getter
@Setter
public class GithubProperties {

    private String url;
    private String client_id;
    private String client_secret;
    private String redirect_url;
    private String client_id2;
    private String client_secret2;
    private String redirect_url2;
}
