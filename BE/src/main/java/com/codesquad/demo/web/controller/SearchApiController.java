package com.codesquad.demo.web.controller;

import com.codesquad.demo.service.AccommodationService;
import com.codesquad.demo.service.MockService;
import com.codesquad.demo.service.SearchService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchApiController {

    private final SearchService searchService;

    private final AccommodationService accommodationService;

    public SearchApiController(SearchService searchService, AccommodationService accommodationService) {
        this.searchService = searchService;
        this.accommodationService = accommodationService;
    }

    @GetMapping("init")
    public AllAccommodationResponseDto getInit() {

        return searchService.getInit();
    }

    @PostMapping("filter")
    public AllAccommodationResponseDto getFiltering(@RequestBody FilterRequestDto filterRequestDto) {

        return searchService.getFiltering(filterRequestDto);
    }

}
