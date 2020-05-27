import URL from 'constants/url';

const GET_ROOMS = 'rooms/GET_ROOMS';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';

const getRooms = () => async dispatch => {
    dispatch({ type: GET_ROOMS });
    const response = await fetch(URL.ROOMS_ALL);
    const data = await response.json();
    dispatch({ type: GET_ROOMS_SUCCESS, payload: data });
};

export {
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    getRooms,
}