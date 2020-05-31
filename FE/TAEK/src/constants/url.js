const URL = {
    ROOMS_INIT: process.env.ROOMS_INIT_URL,
    ROOMS_FILTER: process.env.ROOMS_FILTER_URL,
    RESERVATION: (accommodationId) => process.env.RESERVATION_URL.replace('{accommodationId}', accommodationId),
    RESERVATION_INFO: process.env.RESERVATION_INFO_URL,
    RESERVATION_DELETE: (accommodationId, reservationId) => process.env.RESERVATION_DELETE_URL.replace('{accommodationId}', accommodationId).replace('{reservationId}', reservationId),
}

export default URL;