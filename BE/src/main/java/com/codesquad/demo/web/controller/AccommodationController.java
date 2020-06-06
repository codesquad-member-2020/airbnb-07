package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.AccommodationService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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

    @PostMapping("{accommodationId}")
    public ReservationResponseDto reserve(@PathVariable Long accommodationId,
                                          @RequestBody ReservationRequestDto reservationRequestDto,
                                          HttpServletRequest request) {
        return accommodationService.reserve(accommodationId, reservationRequestDto, request);
    }
}
