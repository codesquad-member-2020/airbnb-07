package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.AccommodationService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("filter")
    public AllAccommodationResponseDto getFiltering(@RequestBody FilterRequestDto filterRequestDto) {
        return accommodationService.getFiltering(filterRequestDto);
    }
}
