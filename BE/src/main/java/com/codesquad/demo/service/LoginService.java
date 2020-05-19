package com.codesquad.demo.service;

import com.codesquad.demo.utils.JwtUtils;
import com.codesquad.demo.web.dto.login.AccessTokenRequestDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
public class LoginService {

    private final RestTemplate restTemplate;
    private final Logger logger = LoggerFactory.getLogger(LoginService.class);

    public LoginService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseEntity<Void> login(String code, HttpServletResponse response) {
        logger.info("code : {}", code);

        try {
            String url = "https://github.com/login/oauth/access_token";
            String client_id = "8f285a7d51cbddc39104";
            String client_secret = "a25c4a9fab910f206855eea684be46f0bb457d60";
            String redirect_url = "http://localhost:8080/github/oauth/callback";

            AccessTokenRequestDto accessTokenRequestDto
                    = getAccessToken(client_id, client_secret, code, redirect_url);

            String accessToken = restTemplate.postForObject(url, accessTokenRequestDto, String.class);

            String[] splitTokens = accessToken.split("&");
            String[] splitTokens2 = splitTokens[0].split("=");
            accessToken = splitTokens2[1];

            String emailRequestUrl = "https://api.github.com/user/emails";

            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Authorization", "token " +accessToken);

            HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

            ResponseEntity<String> responseEntity
                    = restTemplate.exchange(emailRequestUrl, HttpMethod.GET, entity, String.class);

            String userDataList = responseEntity.getBody();
            String[] split1 = userDataList.split(",");
            String userEmail = split1[0].split(":")[1];

            logger.info("userEmail : {}", userEmail);

            String jwt = JwtUtils.jwtCreate(userEmail);

            Cookie tokenCookie = new Cookie("token", jwt);
            Cookie userEmailCookie = new Cookie("userEmail", userEmail);

            tokenCookie.setPath("/");
            userEmailCookie.setPath("/");
            response.addCookie(tokenCookie);
            response.addCookie(userEmailCookie);
            response.setHeader("Location", "http://15.164.35.235/");

            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    private AccessTokenRequestDto getAccessToken(String client_id, String client_secret, String code, String redirect_url) {
        return AccessTokenRequestDto.builder()
                .client_id(client_id)
                .client_secret(client_secret)
                .code(code)
                .redirect_url(redirect_url)
                .build();
    }
}
