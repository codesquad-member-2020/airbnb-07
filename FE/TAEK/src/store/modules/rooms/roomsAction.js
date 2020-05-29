import URL from 'constants/url';
import { MAIN } from 'constants/constant';

const GET_ROOMS = 'rooms/GET_ROOMS';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';
const APPLY_CHARGE_FILTER = 'rooms/APPLY_CHARGE_FILTER';

const getRooms = () => async dispatch => {
    dispatch({ type: GET_ROOMS });
    try {
        const response = await fetch(URL.ROOMS_ALL);
        if (response.status !== 200) throw (`${response.status}Error! ${MAIN.ROOMS.GET_ROOMS_ERROR}`);
        const data = await response.json();
        dispatch({ type: GET_ROOMS_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: GET_ROOMS_ERROR, payload: e });
    }
};

const applyChargeFilter = (min, max) => ({ type: APPLY_CHARGE_FILTER, payload: { min, max } });

export {
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
    APPLY_CHARGE_FILTER,
    getRooms,
    applyChargeFilter,
}