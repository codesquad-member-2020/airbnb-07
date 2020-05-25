package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.MockService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("mock")
public class MockController {

    private final MockService mockService;

    @GetMapping("all")
    public AllAccommodationResponseDto getAll() {
        return mockService.getAll();
    }
}
