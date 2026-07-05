package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public String authenticate(HttpServletRequest request) {

        String authHeader = request.getHeader("Authorization");

        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedCredentials = new String(decodedBytes);

        String username = decodedCredentials.split(":")[0];

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000))
                .signWith(SignatureAlgorithm.HS256, "secretkey")
                .compact();

        return "{\"token\":\"" + token + "\"}";
    }
}
