package com.codesquad.demo.service;

import com.codesquad.demo.domain.Airbnb;
import com.codesquad.demo.domain.AirbnbRepository;
import com.codesquad.demo.domain.User;
import com.codesquad.demo.utils.GithubProperties;
import com.codesquad.demo.utils.JwtUtils;
import com.codesquad.demo.web.dto.login.AccessTokenRequestDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

@Service
public class LoginService {

    private final RestTemplate restTemplate;
    private final Logger logger = LoggerFactory.getLogger(LoginService.class);
    private final GithubProperties githubProperties;
    private final AirbnbRepository airbnbRepository;

    public LoginService(RestTemplate restTemplate, GithubProperties githubProperties, AirbnbRepository airbnbRepository) {
        this.restTemplate = restTemplate;
        this.githubProperties = githubProperties;
        this.airbnbRepository = airbnbRepository;
    }

    public ResponseEntity<Void> login(String code, HttpServletResponse response) {

        try {
            String url = githubProperties.getUrl();
            String client_id = githubProperties.getClient_id();
            String client_secret = githubProperties.getClient_secret();
            String redirect_url = githubProperties.getRedirect_url();

            AccessTokenRequestDto accessTokenRequestDto
                    = getAccessToken(client_id, client_secret, code, redirect_url);

            String accessToken = restTemplate.postForObject(url, accessTokenRequestDto, String.class);

            String[] splitTokens = accessToken.split("&");
            String[] splitTokens2 = splitTokens[0].split("=");
            accessToken = splitTokens2[1];

            String emailRequestUrl = "https://api.github.com/user/emails";

            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Authorization", "token " +accessToken);

            logger.info("accessToken : {}", accessToken);

            HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

            ResponseEntity<String> responseEntity
                    = restTemplate.exchange(emailRequestUrl, HttpMethod.GET, entity, String.class);

            String userDataList = responseEntity.getBody();
            String[] split1 = userDataList.split(",");
            String userEmail = split1[0].split(":")[1];

            if (userEmail.contains("\"")) {
                userEmail = userEmail.replaceAll("\"", "");
            }

            Airbnb airbnb = airbnbRepository.findById(1L).orElseThrow(() ->
                    new IllegalStateException("해당 airbnb가 없습니다. id = " + 1L));

            String finalUserEmail = userEmail;
            logger.info("finaluserEmail : {}", finalUserEmail);
            boolean isExist = airbnb.getUsers().stream()
                    .anyMatch(each -> each.getEmail().equals(finalUserEmail));

            logger.info("isExist:{}", isExist);

            if (!isExist) {
                airbnb.getUsers().add(User.builder()
                        .email(userEmail)
                        .reservations(new ArrayList<>())
                        .build());
            }

            airbnbRepository.save(airbnb);

            logger.info("userEmail : {}", userEmail);

            String jwt = JwtUtils.jwtCreate(userEmail);

            Cookie tokenCookie = new Cookie("token", jwt);
            Cookie userEmailCookie = new Cookie("userEmail", userEmail);

            tokenCookie.setPath("/");
            userEmailCookie.setPath("/");
            response.addCookie(tokenCookie);
            response.addCookie(userEmailCookie);
            response.setHeader("Location", "http://15.164.35.235/githublogin");

            return new ResponseEntity<>(HttpStatus.FOUND);

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

    public ResponseEntity<Void> login2(String code, HttpServletResponse response) {

        try {
            String url = githubProperties.getUrl();
            String client_id = githubProperties.getClient_id2();
            String client_secret = githubProperties.getClient_secret2();
            String redirect_url = githubProperties.getRedirect_url2();

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

            if (userEmail.contains("\"")) {
                userEmail = userEmail.replaceAll("\"", "");
            }

            Airbnb airbnb = airbnbRepository.findById(1L).orElseThrow(() ->
                    new IllegalStateException("해당 airbnb가 없습니다. id = " + 1L));

            String finalUserEmail = userEmail;

            logger.info("finalUserEmail : {}", finalUserEmail);

            boolean isExist = airbnb.getUsers().stream()
                    .anyMatch(each -> each.getEmail().equals(finalUserEmail));

            logger.info("isExist: {}", isExist);

            if (!isExist) {
                airbnb.getUsers().add(User.builder()
                        .email(userEmail)
                        .reservations(new ArrayList<>())
                        .build());
            }

            airbnbRepository.save(airbnb);

            String jwt = JwtUtils.jwtCreate(userEmail);

            Cookie tokenCookie = new Cookie("token", jwt);
            Cookie userEmailCookie = new Cookie("userEmail", userEmail);

            tokenCookie.setPath("/");
            userEmailCookie.setPath("/");
            response.addCookie(tokenCookie);
            response.addCookie(userEmailCookie);
            response.setHeader("Location", "http://15.164.35.235/githublogin");

            return new ResponseEntity<>(HttpStatus.FOUND);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
