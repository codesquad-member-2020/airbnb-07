package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.MockService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
}
