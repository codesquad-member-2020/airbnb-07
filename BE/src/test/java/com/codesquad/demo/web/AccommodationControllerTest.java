package com.codesquad.demo.web;

import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AccommodationControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void getInit() {

        // given
        String url = "http://localhost:" + port + "/mybatis/init";
        Long id = 1L;
        int size = 30;
        String hotelName = "Stylish Queen Anne Apartment";
        String location = "Seattle";
        String status = "200";
        int total = 84;

        // when
        ResponseEntity<AllAccommodationResponseDto> responseEntity
                = restTemplate.getForEntity(url, AllAccommodationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(status);
        assertThat(responseEntity.getBody().getAllData().size()).isEqualTo(size);
        assertThat(responseEntity.getBody().getAllData().get(0).getId()).isEqualTo(id);
        assertThat(responseEntity.getBody().getAllData().get(0).getHotelName()).isEqualTo(hotelName);
        assertThat(responseEntity.getBody().getAllData().get(0).getLocation()).isEqualTo(location);
        assertThat(responseEntity.getBody().getPrices().get(0).getTotal()).isEqualTo(total);
    }

    @Test
    public void getFiltering() {
        // given
        String localUrl = "http://localhost:" + port + "/mybatis/filter";
//        String realUrl = "http://15.164.35.235/api/mock/filter";
        Long id = 1L;
        String hotelName = "Bright & Airy Queen Anne Apartment";
        String location = "Seattle";
        String status = "200";
        LocalDate startDate = LocalDate.parse("2020-07-05");
        LocalDate endDate = LocalDate.parse("2020-07-09");
        int people = 3;
        Integer min = 0;
        Integer max = 500000;

        FilterRequestDto filterRequestDto = FilterRequestDto.builder()
                .location(location)
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
                .min(min)
                .max(max)
                .build();

        // when
        ResponseEntity<AllAccommodationResponseDto> responseEntity
                = restTemplate.postForEntity(localUrl, filterRequestDto, AllAccommodationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(status);
        assertThat(responseEntity.getBody().getAllData().get(0).getId()).isEqualTo(id);
        assertThat(responseEntity.getBody().getAllData().get(0).getHotelName()).isEqualTo(hotelName);
        assertThat(responseEntity.getBody().getAllData().get(0).getLocation()).isEqualTo(location);
        assertThat(responseEntity.getBody().getPrices()).isNull();
    }
}
