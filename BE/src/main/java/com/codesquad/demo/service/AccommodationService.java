package com.codesquad.demo.service;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.repository.AccommodationRepository;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.PriceRangeResponseDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    public AccommodationService(AccommodationRepository accommodationRepository) {
        this.accommodationRepository = accommodationRepository;
    }

    public AllAccommodationResponseDto getInit() {

        List<Accommodation> accommodations =
                accommodationRepository.getInitAccommodations();

        List<EachAccommodationResponseDto> allData
                = new ArrayList<>();

        List<PriceRangeResponseDto> prices
                = new ArrayList<>();

        return AllAccommodationResponseDto.builder()
                .status("200")
                .allData(allData)
                .prices(prices)
                .build();
    }
}
