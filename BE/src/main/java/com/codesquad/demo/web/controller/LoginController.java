package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("github")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/oauth/callback")
    public ResponseEntity<Void> login(@RequestParam("code") String code,
                                      HttpServletResponse response) {
        return loginService.login(code, response);
    }

    @GetMapping("/oauth/callback2")
    public ResponseEntity<Void> login2(@RequestParam("code") String code,
                                       HttpServletResponse response) {
        return loginService.login2(code, response);
    }

    @GetMapping("/oauth3")
    public ResponseEntity<String> loginTest() {
        return new ResponseEntity("success", HttpStatus.OK);
    }

}
