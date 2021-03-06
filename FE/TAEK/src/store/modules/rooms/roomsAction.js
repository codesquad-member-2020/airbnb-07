import URL from 'constants/url';
import { COMMON } from 'constants/constant';
import { checkResponseData } from 'utils/util';

const GET_ROOMS_INIT_DATA = 'rooms/GET_ROOMS';
const GET_ROOMS_FILTER_DATA = 'rooms/GET_ROOMS_FILTER_DATA';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';
const SAVE_FILTER_DATA = 'rooms/SAVE_FILTER_DATA';
const APPLY_CHARGE_FILTER = 'rooms/APPLY_CHARGE_FILTER';
const CHANGE_PAGE = 'rooms/CHANGE_PAGE';

const getRoomsInitData = data => async dispatch => {
    const _cacheData = JSON.parse(localStorage.getItem(COMMON.INIT_ROOMS_DATA_KEY));
    if (_cacheData) {
        dispatch({ type: GET_ROOMS_SUCCESS, payload: _cacheData });
        dispatch(applyChargeFilter(data.min, data.max));
        return;
    }

    try {
        dispatch({ type: GET_ROOMS_INIT_DATA });
        const response = await fetch(URL.ROOMS_INIT);
        if (!checkResponseData(response)) throw (`${response.status}Error! ${COMMON.GET_DATA_ERROR}`);

        const json = await response.json();
        localStorage.setItem(COMMON.INIT_ROOMS_DATA_KEY, JSON.stringify(json));
        dispatch({ type: GET_ROOMS_SUCCESS, payload: json });
        dispatch(applyChargeFilter(data.min, data.max));
    } catch (e) {
        dispatch({ type: GET_ROOMS_ERROR, payload: e });
    }
};

const getRoomsFilterData = data => async dispatch => {
    const _cacheData = JSON.parse(localStorage.getItem(COMMON.FILTER_ROOMS_DATA_KEY));
    const _filterData = localStorage.getItem(COMMON.FILTER_DATA_KEY)
    if (_cacheData && _filterData === JSON.stringify(data.filterData)) {
        dispatch({ type: GET_ROOMS_SUCCESS, payload: _cacheData });
        dispatch(applyChargeFilter(data.min, data.max));
        dispatch(saveFilterData(data.filterData));
        return;
    }

    try {
        dispatch({ type: GET_ROOMS_FILTER_DATA });
        const response = await fetch(URL.ROOMS_FILTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.filterData),
        });
        if (!checkResponseData(response)) throw (`${response.status}Error! ${COMMON.GET_DATA_ERROR}`);

        const json = await response.json();
        localStorage.setItem(COMMON.FILTER_DATA_KEY, JSON.stringify(data.filterData));
        localStorage.setItem(COMMON.FILTER_ROOMS_DATA_KEY, JSON.stringify(json));
        dispatch({ type: GET_ROOMS_SUCCESS, payload: json });
        dispatch(applyChargeFilter(data.min, data.max));
        dispatch(saveFilterData(data.filterData));
    } catch (e) {
        dispatch({ type: GET_ROOMS_ERROR, payload: e });
    }
}

const saveFilterData = filterData => ({ type: SAVE_FILTER_DATA, payload: filterData });
const applyChargeFilter = (min, max) => ({ type: APPLY_CHARGE_FILTER, payload: { min, max } });
const changePage = page => ({ type: CHANGE_PAGE, payload: page });

export {
    GET_ROOMS_INIT_DATA,
    GET_ROOMS_FILTER_DATA,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
    SAVE_FILTER_DATA,
    APPLY_CHARGE_FILTER,
    CHANGE_PAGE,
    getRoomsInitData,
    getRoomsFilterData,
    saveFilterData,
    applyChargeFilter,
    changePage,
}