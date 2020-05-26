package com.codesquad.demo.web;

import com.codesquad.demo.service.MockService;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MockControllerTest {

    @LocalServerPort
    private int port;

    private Logger logger = LoggerFactory.getLogger(MockControllerTest.class);

    @Autowired
    private MockService mockService;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getAllTest() {

        // given
        String url = "http://localhost:" + port + "/mock/all";
        Long id = 1L;
        String hotelName = "Stylish Queen Anne Apartment";
        String location = "Seattle";
        String status = "200";

        // when
        ResponseEntity<AllAccommodationResponseDto> responseEntity
                = restTemplate.getForEntity(url, AllAccommodationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(status);
        assertThat(responseEntity.getBody().getAllData().get(0).getId()).isEqualTo(id);
        assertThat(responseEntity.getBody().getAllData().get(0).getHotelName()).isEqualTo(hotelName);
        assertThat(responseEntity.getBody().getAllData().get(0).getLocation()).isEqualTo(location);
    }

    @Test
    public void getFiltering() {

        // given
        String url = "http://localhost:" + port + "/mock/filter";
        Long id = 2L;
        String hotelName = "Bright & Airy Queen Anne Apartment";
        String location = "Seattle";
        String status = "200";
        String startDate = "2020-05-20";
        String endDate = "2020-05-24";
        String people = "4";
//        String min = null;
//        String max = "100000";
        String zero = "0";
        String man = "10000";
        String eman = "20000";
        int one = 1;
        int six = 6;

        FilterRequestDto filterRequestDto = FilterRequestDto.builder()
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
//                .min(min)
//                .max(max)
                .build();

        // when
        ResponseEntity<AllAccommodationResponseDto> responseEntity
                = restTemplate.postForEntity(url, filterRequestDto, AllAccommodationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(status);
        assertThat(responseEntity.getBody().getAllData().get(0).getId()).isEqualTo(id);
        assertThat(responseEntity.getBody().getAllData().get(0).getHotelName()).isEqualTo(hotelName);
        assertThat(responseEntity.getBody().getAllData().get(0).getLocation()).isEqualTo(location);
        assertThat(responseEntity.getBody().getPrices().get(0).getTotal()).isEqualTo(1);
        assertThat(responseEntity.getBody().getPrices().get(1).getTotal()).isEqualTo(1);
    }
}
