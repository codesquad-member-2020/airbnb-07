import URL from 'constants/url';
import { COMMON } from 'constants/constant';

const MODAL_TOGGLE = 'reservation/MODAL_TOGGLE';
const SELECTED_ROOM = 'reservation/SELECTED_ROOM';
const GET_RESERVATION_INFO_DATA = 'reservation/GET_RESERVATION_INFO_DATA'
const GET_RESERVATION_INFO_SUCCESS = 'reservation/GET_RESERVATION_INFO_SUCCESS';
const GET_RESERVATION_INFO_ERROR = 'reservation/GET_RESERVATION_INFO_ERROR';

const modalToggle = () => ({ type: MODAL_TOGGLE });
const selectedRoom = roomData => ({ type: SELECTED_ROOM, payload: roomData });

const requestReservation = data => async dispatch => {
    const response = await fetch(URL.RESERVATION(data.id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.reservationData),
    });
    const json = await response.json();
    alert(json.message);
    dispatch(modalToggle());
}

const getReservationInfoData = () => async dispatch => {
    dispatch({ type: GET_RESERVATION_INFO_DATA });
    try {
        const response = await fetch(URL.RESERVATION_INFO);
        if (response.status !== 200) throw (`${response.status}Error! ${COMMON.GET_DATA_ERROR}`);
        const json = await response.json();
        dispatch({ type: GET_RESERVATION_INFO_SUCCESS, payload: json });
    } catch (e) {
        dispatch({ type: GET_RESERVATION_INFO_ERROR, payload: e });
    }
}

export {
    MODAL_TOGGLE,
    SELECTED_ROOM,
    GET_RESERVATION_INFO_DATA,
    GET_RESERVATION_INFO_SUCCESS,
    GET_RESERVATION_INFO_ERROR,
    modalToggle,
    selectedRoom,
    requestReservation,
    getReservationInfoData,
}
