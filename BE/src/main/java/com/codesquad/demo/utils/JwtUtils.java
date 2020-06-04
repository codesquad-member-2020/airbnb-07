package com.codesquad.demo.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

public class JwtUtils {
    private static final String JWT_KEY = "A";

    private static Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    private JwtUtils() {}

    public static String jwtCreate(String user) {
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("userEmail", user);

        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(SignatureAlgorithm.HS256, JWT_KEY.getBytes())
                .compact();
    }

    public static String jwtParsing(String jwt) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_KEY.getBytes())
                .parseClaimsJws(jwt)
                .getBody();

        String result = claims.get("userEmail", String.class);

        if (result.contains("\"")) {
            result = result.replaceAll("\"", "");
        }

        logger.info("result : {}", result);

        return result;
    }
}
