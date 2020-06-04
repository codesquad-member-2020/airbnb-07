package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.AccommodationService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("mybatis")
public class AccommodationController {

    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("init")
    public AllAccommodationResponseDto getInit() {
        return accommodationService.getInit();
    }
}
