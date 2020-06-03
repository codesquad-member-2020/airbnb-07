package com.codesquad.demo.web;

import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.AllReservationInfoResponseDto;
import com.codesquad.demo.web.dto.response.DeleteReservationResponseDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ReserveControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    private Logger logger = LoggerFactory.getLogger(ReserveControllerTest.class);

    @Test
    public void reserveTest() {

        // given
        int id = 1;
        String url = "http://localhost:" + port +  "/authorization/" + id;
        LocalDate startDate = LocalDate.parse("2020-01-05");
        LocalDate endDate = LocalDate.parse("2020-01-09");
        int people = 5;
        int totalPrice = 100000;
        String ok = "200";
        String successMessage = "예약에 성공했습니다.";

        ReservationRequestDto reservationRequestDto = ReservationRequestDto.builder()
                .startDate(startDate)
                .endDate(endDate)
                .people(people)
                .totalPrice(totalPrice)
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs");

        HttpEntity<ReservationRequestDto> entity = new HttpEntity<>(reservationRequestDto, headers);

        // when
        ResponseEntity<ReservationResponseDto> responseEntity
                =restTemplate.exchange(url, HttpMethod.POST, entity, ReservationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(ok);
        assertThat(responseEntity.getBody().getMessage()).isEqualTo(successMessage);
    }

    @Test
    public void getReservationInfo() {

        // given
        String url = "http://localhost:" + port + "/authorization/reservationInfo";
        String pictureUrl = "https://a1.muscache.com/ac/pictures/67560560/cfe47d69_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70";
        int people = 5;
        String ok = "200";
        long id = 1L;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs");

        HttpEntity<ReservationRequestDto> entity = new HttpEntity<>(headers);

        // when
        ResponseEntity<AllReservationInfoResponseDto> responseEntity
                = restTemplate.exchange(url, HttpMethod.GET, entity, AllReservationInfoResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(ok);
        assertThat(responseEntity.getBody().getAllData().get(0).getAccommodationId()).isEqualTo(id);
        assertThat(responseEntity.getBody().getAllData().get(0).getUrls().get(0).getUrl()).isEqualTo(pictureUrl);
        assertThat(responseEntity.getBody().getAllData().get(0).getReservation().getPeople()).isEqualTo(people);

    }

    @Test
    public void deleteTest() {

        // given
        long accommodationId = 1L;
        long reservationId = 6L;
        String url = "http://localhost:" + port + "/authorization/" + accommodationId + "/" + reservationId;
        String ok = "200";
        String successMessage = "예약 취소에 성공했습니다.";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs");

        HttpEntity entity = new HttpEntity(headers);

        ResponseEntity<DeleteReservationResponseDto> responseEntity =
                restTemplate.exchange(url, HttpMethod.DELETE, entity , DeleteReservationResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo(ok);
        assertThat(responseEntity.getBody().getMessage()).isEqualTo(successMessage);
    }
}
