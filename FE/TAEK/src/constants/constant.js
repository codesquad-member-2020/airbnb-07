const MAIN = {
    DATE: {
        START_DATE_ID: 'airbnb-start-date',
        END_DATE_ID: 'airbnb-end-date',
    },
    PERSON: {
        LIMIT_COUNT: 8,
        ADULT: {
            TEXT: '어른',
            DESC: '만 13세 이상',
            COUNT_TYPE: { countType: 'adultCount' },
        },
        CHILD: {
            TEXT: '어린이',
            DESC: '2 ~ 12세',
            COUNT_TYPE: { countType: 'childCount' },
        },
        BABY: {
            TEXT: '유아',
            DESC: '2세 미만',
            COUNT_TYPE: { countType: 'babyCount' },
        },
    },
    CHARGE: {
        MIN_CHARGE: 10000,
        MAX_CHARGE: 1000000,
    },
    ROOMS: {
        GET_ROOMS_ERROR: '조회에 실패했습니다. 다시 시도해주세요.',
    },
    RESERVATION: {
        CLEAN_UP_COST: 15000,
        SERVICE_COST: 2000,
        TAX_RATE: 0.05,
        NOT_ENOUGH_CONDITION_MESSAGE: '날짜와 인원을 선택하세요.',
    }
}

export {
    MAIN
}