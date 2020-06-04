package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.ReserveService;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.AllReservationInfoResponseDto;
import com.codesquad.demo.web.dto.response.DeleteReservationResponseDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("authorization")
public class ReserveApiController {

    private final ReserveService reserveService;

    public ReserveApiController(ReserveService reserveService) {
        this.reserveService = reserveService;
    }

    @PostMapping("{accommodationId}")
    public ReservationResponseDto reserve(@RequestBody ReservationRequestDto reservationRequestDto,
                                          @PathVariable Long accommodationId,
                                          HttpServletRequest request) {

        return reserveService.reserve(reservationRequestDto, accommodationId, request);
    }

    @GetMapping("reservationInfo")
    public AllReservationInfoResponseDto getReservationInfo(HttpServletRequest request) {

        return reserveService.getReservationInfo(request);
    }

    @DeleteMapping("{accommodationId}/{reservationId}")
    public DeleteReservationResponseDto delete(@PathVariable Long accommodationId,
                                               @PathVariable Long reservationId,
                                               HttpServletRequest request) {

        return reserveService.delete(accommodationId, reservationId, request);
    }
}
