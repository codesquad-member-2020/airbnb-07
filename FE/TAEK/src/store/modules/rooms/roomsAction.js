import URL from 'constants/url';
import { COMMON } from 'constants/constant';

const GET_ROOMS_INIT_DATA = 'rooms/GET_ROOMS';
const GET_ROOMS_FILTER_DATA = 'rooms/GET_ROOMS_FILTER_DATA';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';
const APPLY_CHARGE_FILTER = 'rooms/APPLY_CHARGE_FILTER';

const getRoomsInitData = data => async dispatch => {
    dispatch({ type: GET_ROOMS_INIT_DATA });
    try {
        const response = await fetch(URL.ROOMS_INIT);
        if (response.status !== 200) throw (`${response.status}Error! ${COMMON.GET_ROOMS_ERROR}`);
        const json = await response.json();
        dispatch({ type: GET_ROOMS_SUCCESS, payload: json });
        dispatch(applyChargeFilter(data.min, data.max));
    } catch (e) {
        dispatch({ type: GET_ROOMS_ERROR, payload: e });
    }
};

const getRoomsFilterData = data => async dispatch => {
    dispatch({ type: GET_ROOMS_FILTER_DATA });
    try {
        const response = await fetch(URL.ROOMS_FILTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.filterData),
        });
        if (response.status !== 200) throw (`${response.status}Error! ${COMMON.GET_ROOMS_ERROR}`);
        const json = await response.json();
        dispatch({ type: GET_ROOMS_SUCCESS, payload: json });
        dispatch(applyChargeFilter(data.min, data.max));
    } catch (e) {
        dispatch({ type: GET_ROOMS_ERROR, payload: e });
    }
}

const applyChargeFilter = (min, max) => ({ type: APPLY_CHARGE_FILTER, payload: { min, max } });

export {
    GET_ROOMS_INIT_DATA,
    GET_ROOMS_FILTER_DATA,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
    APPLY_CHARGE_FILTER,
    getRoomsInitData,
    getRoomsFilterData,
    applyChargeFilter,
}