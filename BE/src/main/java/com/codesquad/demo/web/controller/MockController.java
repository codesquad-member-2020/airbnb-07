package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.MockService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@AllArgsConstructor
@RequestMapping("mock")
public class MockController {

    private final MockService mockService;

    @GetMapping("all")
    public AllAccommodationResponseDto getAll() {
        return mockService.getAll();
    }

    @PostMapping("filter")
    public AllAccommodationResponseDto getFiltering(@RequestBody FilterRequestDto filterRequestDto) {
        return mockService.getFiltering(filterRequestDto);
    }

    @PostMapping("reservation")
    public ReservationResponseDto reserve(@RequestBody ReservationRequestDto reservationRequestDto,
                                          HttpServletRequest request) {
        return mockService.reserve(reservationRequestDto, request);
    }
}
