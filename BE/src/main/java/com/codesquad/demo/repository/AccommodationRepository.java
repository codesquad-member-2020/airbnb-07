package com.codesquad.demo.repository;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.IsReservableRequestDto;
import com.codesquad.demo.web.dto.request.LocationPriceRequestDto;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccommodationRepository {

    private static final String MAPPER_NAME_SPACE = "sample.mapper.accommodationMapper.";

    private final SqlSessionTemplate sqlSessionTemplate;

    public AccommodationRepository(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    public List<Accommodation> getInitAccommodations() {
        return sqlSessionTemplate.selectList(MAPPER_NAME_SPACE + "initAccommodations");
    }

    public List<Accommodation> getFiltering(FilterRequestDto filterRequestDto) {

        String location = filterRequestDto.getLocation();
        Integer people = filterRequestDto.getPeople();

        LocationPriceRequestDto locationPriceRequestDto = LocationPriceRequestDto.builder()
                .location(location)
                .people(people)
                .build();

        return sqlSessionTemplate.selectList(MAPPER_NAME_SPACE + "accommodationsByFiltering", locationPriceRequestDto);
    }

    public List<Accommodation> getReservedAccommodations() {
        return sqlSessionTemplate.selectList(MAPPER_NAME_SPACE + "getReservedAccommodations");
    }

    public int isReservable(FilterRequestDto filterRequestDto, Long accommodationId) {

        IsReservableRequestDto isReservableRequestDto = IsReservableRequestDto.builder()
                .accommodationId(accommodationId)
                .startDate(filterRequestDto.getStartDate())
                .endDate(filterRequestDto.getEndDate())
                .build();

        return sqlSessionTemplate.selectOne(MAPPER_NAME_SPACE + "isReservable", isReservableRequestDto);
    }
}
