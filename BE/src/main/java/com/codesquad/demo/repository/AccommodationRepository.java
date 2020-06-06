package com.codesquad.demo.repository;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.web.dto.request.*;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
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

    public int isReservable(LocalDate requestStart, LocalDate requestEnd, Long accommodationId) {

        IsReservableRequestDto isReservableRequestDto = IsReservableRequestDto.builder()
                .accommodationId(accommodationId)
                .startDate(requestStart)
                .endDate(requestEnd)
                .build();

        return sqlSessionTemplate.selectOne(MAPPER_NAME_SPACE + "isReservable", isReservableRequestDto);
    }

    public void addAccommodationReservation(Long accommodationId, Integer index, ReservationRequestDto reservationRequestDto) {

        AddAccommodationReservationDto addAccommodationReservationDto = AddAccommodationReservationDto.builder()
                .accommodationId(accommodationId)
                .startDate(reservationRequestDto.getStartDate())
                .endDate(reservationRequestDto.getEndDate())
                .people(reservationRequestDto.getPeople())
                .totalPrice(reservationRequestDto.getTotalPrice())
                .index(index)
                .build();

        sqlSessionTemplate.insert(MAPPER_NAME_SPACE + "addAccommodationReservation", addAccommodationReservationDto);
    }

    public void addUserReservation(Long userId, Integer index, ReservationRequestDto reservationRequestDto) {

        AddUserReservationDto addUserReservationDto = AddUserReservationDto.builder()
                .userId(userId)
                .startDate(reservationRequestDto.getStartDate())
                .endDate(reservationRequestDto.getEndDate())
                .people(reservationRequestDto.getPeople())
                .totalPrice(reservationRequestDto.getTotalPrice())
                .index(index)
                .build();

        sqlSessionTemplate.insert(MAPPER_NAME_SPACE + "addUserReservation", addUserReservationDto);
    }
}
