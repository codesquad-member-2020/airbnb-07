package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.MockService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.AllReservationInfoResponseDto;
import com.codesquad.demo.web.dto.response.DeleteReservationResponseDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
@RequestMapping("mock/authorization")
public class MockController {

    private final MockService mockService;

    @GetMapping("init")
    public AllAccommodationResponseDto getInit() {

        return mockService.getInit();
    }

    @PostMapping("filter")
    public AllAccommodationResponseDto getFiltering(@RequestBody FilterRequestDto filterRequestDto) {

        return mockService.getFiltering(filterRequestDto);
    }

    @PostMapping("{accommodationId}/{userEmail}")
    public ReservationResponseDto reserve(@RequestBody ReservationRequestDto reservationRequestDto,
                                          @PathVariable Long accommodationId,
                                          @PathVariable String userEmail,
                                          HttpServletRequest request) {

        return mockService.reserve(reservationRequestDto, accommodationId, userEmail, request);
    }

    @GetMapping("reservationInfo/{userEmail}")
    public AllReservationInfoResponseDto getReservationInfo(@PathVariable String userEmail,
                                                            HttpServletRequest request) {

        return mockService.getReservationInfo(userEmail, request);
    }

    @DeleteMapping("{accommodationId}/{reservationId}/{userEmail}")
    public DeleteReservationResponseDto delete(@PathVariable Long accommodationId,
                                               @PathVariable Long reservationId,
                                               @PathVariable String userEmail,
                                               HttpServletRequest request) {

        return mockService.delete(accommodationId, reservationId, userEmail, request);
    }
}
