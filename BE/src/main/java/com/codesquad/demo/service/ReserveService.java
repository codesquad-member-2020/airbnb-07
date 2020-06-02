package com.codesquad.demo.service;

import com.codesquad.demo.domain.*;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.AllReservationInfoResponseDto;
import com.codesquad.demo.web.dto.response.DeleteReservationResponseDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;

@Service
public class ReserveService {

    private final AirbnbRepository airbnbRepository;

    private Logger logger = LoggerFactory.getLogger(ReserveService.class);

    public ReserveService(AirbnbRepository airbnbRepository) {
        this.airbnbRepository = airbnbRepository;
    }


    public ReservationResponseDto reserve(ReservationRequestDto reservationRequestDto,
                                          Long accommodationId,
                                          HttpServletRequest request) {

        try {
            String successMessage = "예약에 성공했습니다.";
            String userEmail = (String) request.getAttribute("userEmail");
            Long id = 1L;

            Airbnb airbnb = findAirbnbById(id);

            Accommodation accommodation = airbnb.getAccommodations().stream()
                    .filter(each -> each.getId().equals(accommodationId))
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("해당 accommodation이 없습니다. id = " + accommodationId));

            LocalDate requestStart = reservationRequestDto.getStartDate();
            LocalDate requestEnd = reservationRequestDto.getEndDate();

            if (!isReservable(accommodation, requestStart, requestEnd)) {
                throw new IllegalStateException("해당 날짜엔 이미 예약이 있습니다.");
            }

            airbnb.reservationSaveToUser(userEmail, reservationRequestDto);

            airbnb.reservationSaveToAccommodation(accommodationId, reservationRequestDto);

            airbnbRepository.save(airbnb);

            return ReservationResponseDto.builder()
                    .status("200")
                    .message(successMessage)
                    .build();

        } catch(IllegalStateException e) {

            String failMessage = "해당 날짜엔 이미 예약이 있습니다.";

            e.printStackTrace();

            return ReservationResponseDto.builder()
                    .status("202")
                    .message(failMessage)
                    .build();

        } catch (Exception e) {
            String failMessage = "예약에 실패했습니다.";

            e.printStackTrace();

            return ReservationResponseDto.builder()
                    .status("202")
                    .message(failMessage)
                    .build();
        }
    }

    private boolean isReservable(Accommodation accommodation, LocalDate requestStart, LocalDate requestEnd) {

        for (AccommodationReservation each : accommodation.getReservations()) {
            if ((each.getStartDate().isBefore(requestStart) && each.getEndDate().isAfter(requestStart)
                    || (each.getStartDate().isBefore(requestEnd) && each.getEndDate().isAfter(requestEnd)))) {
                return false;
            }
            if ((each.getStartDate().isEqual(requestStart) || each.getEndDate().isEqual(requestStart))
                    || (each.getStartDate().isEqual(requestEnd) || each.getEndDate().isEqual(requestEnd))) {

                return false;

            }
            if ((requestStart.isBefore(each.getStartDate()) && requestEnd.isAfter(each.getStartDate()))
                    || (requestStart.isBefore(each.getEndDate()) && requestEnd.isAfter(each.getEndDate()))) {
                return false;
            }
        }

        return true;
    }

    private Airbnb findAirbnbById(Long id) {
        return airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = "+id));
    }

    public DeleteReservationResponseDto delete(Long accommodationId, Long reservationId, HttpServletRequest request) {

        try {
            String userEmail = (String) request.getAttribute("userEmail");

            String successMessage = "예약 취소에 성공했습니다.";

            Airbnb airbnb = findAirbnbById(1L);

            airbnb.deleteReservation(accommodationId, reservationId, userEmail);

            airbnbRepository.save(airbnb);

            return DeleteReservationResponseDto.builder()
                    .status("200")
                    .message(successMessage)
                    .build();

        } catch (Exception e) {
            String failMessage = "예약 취소에 실패했습니다.";

            e.printStackTrace();

            return DeleteReservationResponseDto.builder()
                    .status("202")
                    .message(failMessage)
                    .build();
        }

    }

    public AllReservationInfoResponseDto getReservationInfo(HttpServletRequest request) {

        Airbnb airbnb = findAirbnbById(1L);

        String userEmail = (String) request.getAttribute("userEmail");

        User user = airbnb.findUserByUserEmail(userEmail);

        return user.showReservationInfos(airbnb.getAccommodations());

    }
}
