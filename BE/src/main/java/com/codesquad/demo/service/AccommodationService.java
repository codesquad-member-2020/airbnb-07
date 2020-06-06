package com.codesquad.demo.service;

import com.codesquad.demo.domain.Accommodation;
import com.codesquad.demo.domain.Airbnb;
import com.codesquad.demo.domain.AirbnbRepository;
import com.codesquad.demo.domain.User;
import com.codesquad.demo.repository.AccommodationRepository;
import com.codesquad.demo.web.dto.AllAccommodationResponseDto;
import com.codesquad.demo.web.dto.EachAccommodationResponseDto;
import com.codesquad.demo.web.dto.PriceRangeResponseDto;
import com.codesquad.demo.web.dto.request.FilterRequestDto;
import com.codesquad.demo.web.dto.request.ReservationRequestDto;
import com.codesquad.demo.web.dto.response.ReservationResponseDto;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    private final AirbnbRepository airbnbRepository;

    public AccommodationService(AccommodationRepository accommodationRepository, AirbnbRepository airbnbRepository) {
        this.accommodationRepository = accommodationRepository;
        this.airbnbRepository = airbnbRepository;
    }

    public AllAccommodationResponseDto getInit() {

        List<Accommodation> accommodations =
                accommodationRepository.getInitAccommodations();

        List<EachAccommodationResponseDto> allData
                = new ArrayList<>();

        for (Accommodation accommodation : accommodations) {
            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);

            allData.add(each);
        }

        Long id = 1L;
        Airbnb airbnb = findAirbnbById(id);

        List<PriceRangeResponseDto> prices = getPrices(airbnb.getAccommodations());

        return AllAccommodationResponseDto.builder()
                .status("200")
                .allData(allData)
                .prices(prices)
                .build();
    }

    private Airbnb findAirbnbById(Long id) {
        return airbnbRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("No Airbnb, id = " + id));
    }

    private List<PriceRangeResponseDto> initPriceRangeResponseDto() {
        List<PriceRangeResponseDto> priceRangeResponseDtos = new ArrayList<>();
        List<Integer> numbers = Arrays.asList(10000, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000,
                500000, 550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000);

        for (Integer number : numbers) {
            priceRangeResponseDtos.add(PriceRangeResponseDto.builder()
                    .total(0)
                    .price(number)
                    .build());
        }

        return priceRangeResponseDtos;
    }

    private List<PriceRangeResponseDto> getPrices(List<Accommodation> reservableAccommodations) {
        List<PriceRangeResponseDto> init = initPriceRangeResponseDto();

        for (Accommodation accommodation : reservableAccommodations) {
            int price = accommodation.getCurrent_price();
            if (price >= 0 && price < 50000) {
                PriceRangeResponseDto each = init.get(0);
                each.plusTotal();
            } else if (price >= 50000 && price < 100000) {
                PriceRangeResponseDto each = init.get(1);
                each.plusTotal();
            } else if (price >= 100000 && price < 150000) {
                PriceRangeResponseDto each = init.get(2);
                each.plusTotal();
            } else if (price >= 150000 && price < 200000) {
                PriceRangeResponseDto each = init.get(3);
                each.plusTotal();
            } else if (price >= 200000 && price < 250000) {
                PriceRangeResponseDto each = init.get(4);
                each.plusTotal();
            } else if (price >= 250000 && price < 300000) {
                PriceRangeResponseDto each = init.get(5);
                each.plusTotal();
            } else if (price >= 300000 && price < 350000) {
                PriceRangeResponseDto each = init.get(6);
                each.plusTotal();
            } else if (price >= 350000 && price < 400000) {
                PriceRangeResponseDto each = init.get(7);
                each.plusTotal();
            } else if (price >= 400000 && price < 450000) {
                PriceRangeResponseDto each = init.get(8);
                each.plusTotal();
            } else if (price >= 450000 && price < 500000) {
                PriceRangeResponseDto each = init.get(9);
                each.plusTotal();
            } else if (price >= 500000 && price < 550000) {
                PriceRangeResponseDto each = init.get(10);
                each.plusTotal();
            } else if (price >= 550000 && price < 600000) {
                PriceRangeResponseDto each = init.get(11);
                each.plusTotal();
            } else if (price >= 600000 && price < 650000) {
                PriceRangeResponseDto each = init.get(12);
                each.plusTotal();
            } else if (price >= 650000 && price < 700000) {
                PriceRangeResponseDto each = init.get(13);
                each.plusTotal();
            } else if (price >= 700000 && price < 750000) {
                PriceRangeResponseDto each = init.get(14);
                each.plusTotal();
            } else if (price >= 750000 && price < 800000) {
                PriceRangeResponseDto each = init.get(15);
                each.plusTotal();
            } else if (price >= 800000 && price < 850000) {
                PriceRangeResponseDto each = init.get(16);
                each.plusTotal();
            } else if (price >= 850000 && price < 900000) {
                PriceRangeResponseDto each = init.get(17);
                each.plusTotal();
            } else if (price >= 900000 && price < 950000) {
                PriceRangeResponseDto each = init.get(18);
                each.plusTotal();
            } else {
                PriceRangeResponseDto each = init.get(19);
                each.plusTotal();
            }
        }
        return init;
    }

    public AllAccommodationResponseDto getFiltering(FilterRequestDto filterRequestDto) {

        List<Accommodation> reservableAccommodations = new ArrayList<>();

        try {
            List<Accommodation> reservedAccommodations = accommodationRepository.getReservedAccommodations();
            checkReservationValidation(filterRequestDto, reservableAccommodations, reservedAccommodations);

            List<Accommodation> accommodationsByFiltering = accommodationRepository.getFiltering(filterRequestDto);
            accommodationsByFiltering = accommodationsFilteringByPrices(accommodationsByFiltering, filterRequestDto);
            reservableAccommodations.addAll(accommodationsByFiltering);

            List<EachAccommodationResponseDto> eachAccommodationResponseDtos
                    = getEachAccommodationResponseDtos(reservableAccommodations);

            return AllAccommodationResponseDto.builder()
                    .status("200")
                    .allData(eachAccommodationResponseDtos)
                    .build();

        } catch (Exception e) {
            return AllAccommodationResponseDto.builder()
                    .status("500")
                    .build();
        }
    }

    private void checkReservationValidation(FilterRequestDto filterRequestDto, List<Accommodation> reservableAccommodations, List<Accommodation> reservedAccommodations) {
        for (Accommodation accommodation : reservedAccommodations) {
            int count = accommodationRepository.isReservable(filterRequestDto.getStartDate(),
                    filterRequestDto.getEndDate(),
                    accommodation.getId());

            if (count == 0) {
                reservableAccommodations.add(accommodation);
            }
        }
    }

    private List<Accommodation> accommodationsFilteringByPrices(List<Accommodation> accommodationsByFiltering, FilterRequestDto filterRequestDto) {

        Integer requestMinPrice = filterRequestDto.getMin();
        Integer requestMaxPrice = filterRequestDto.getMax();

        if (requestMinPrice != null) {
            return accommodationsByFiltering.stream()
                    .filter(each -> (each.getCurrent_price() >= requestMinPrice && each.getCurrent_price() <= requestMaxPrice))
                    .collect(Collectors.toList());
        }
        return accommodationsByFiltering;
    }

    private List<EachAccommodationResponseDto> getEachAccommodationResponseDtos(List<Accommodation> reservableAccommodations) {
        List<EachAccommodationResponseDto> eachAccommodationResponseDtos = new ArrayList<>();

        for (Accommodation accommodation : reservableAccommodations) {
            EachAccommodationResponseDto each = new EachAccommodationResponseDto().toEntity(accommodation);
            eachAccommodationResponseDtos.add(each);
        }
        return eachAccommodationResponseDtos;
    }

    public ReservationResponseDto reserve(Long accommodationId,
                                          ReservationRequestDto reservationRequestDto,
                                          HttpServletRequest request) {
        try {
            String successMessage = "예약에 성공했습니다.";
            String userEmail = (String) request.getAttribute("userEmail");
            Long id = 1L;

            Airbnb airbnb = findAirbnbById(id);

            int accommodationSize = airbnb.getAccommodations().stream()
                    .filter(accommodation -> accommodation.getId().equals(accommodationId))
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("해당 accommodation이 없습니다 . accommoation : " + accommodationId))
                    .getReservations()
                    .size();

            User searchedUser = airbnb.getUsers().stream()
                    .filter(user -> user.getEmail().equals(userEmail))
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("해당 user가 없습니다 .userEmail : " + userEmail));

            Long userId = searchedUser.getId();
            int userReservationSize = searchedUser.getReservations().size();

            LocalDate requestStart = reservationRequestDto.getStartDate();
            LocalDate requestEnd = reservationRequestDto.getEndDate();

            int count = accommodationRepository.isReservable(requestStart, requestEnd, accommodationId);
            if (count != 0) {
                throw new IllegalStateException();
            }

            accommodationRepository.addAccommodationReservation(accommodationId, accommodationSize, reservationRequestDto);
            accommodationRepository.addUserReservation(userId, userReservationSize, reservationRequestDto);

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
}
