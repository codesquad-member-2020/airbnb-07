package com.codesquad.demo.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

public class LoginIntercepter extends HandlerInterceptorAdapter {

    private final Logger logger = LoggerFactory.getLogger(LoginIntercepter.class);

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) {

        logger.info("preHandler");

        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        try {

            String userEmailInHeader = request.getHeader("Authorization");
            logger.info("Authorization : {}", userEmailInHeader);

//            Cookie[] cookies = request.getCookies();
//            if (cookies == null) throw new IllegalStateException("no cookie");
//
//            Cookie cookie = Arrays.stream(cookies)
//                    .filter(each -> each.getName().equals("userEmail"))
//                    .findFirst()
//                    .orElseThrow(IllegalStateException::new);
//
//            String token = cookie.getValue();
//            String jwtUserEmail = JwtUtils.jwtParsing(token);
            String jwtUserEmail = JwtUtils.jwtParsing(userEmailInHeader);
            request.setAttribute("userEmail", jwtUserEmail);

            return true;
        } catch (Exception e) {
            response.setStatus(401);
            return false;
        }
    }
}
