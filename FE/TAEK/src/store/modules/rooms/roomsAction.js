import URL from 'constants/url';

const GET_ROOMS = 'rooms/GET_ROOMS';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';

const getRooms = () => async dispatch => {
    dispatch({ type: GET_ROOMS });
    const response = await fetch(URL.ROOMS_ALL);
    const data = await response.json();
    if (response.status === 200) dispatch({ type: GET_ROOMS_SUCCESS, payload: data });
    else dispatch({ type: GET_ROOMS_ERROR, payload: data.error });
};

export {
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
    getRooms,
}