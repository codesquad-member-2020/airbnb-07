import URL from 'constants/url';

const GET_ROOMS = 'rooms/GET_ROOMS';
const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';

const getRooms = () => dispatch => {
    dispatch({ type: GET_ROOMS });
    fetch(URL.ROOMS_ALL)
        .then(res => res.json())
        .then(json => dispatch({ type: GET_ROOMS_SUCCESS, payload: json }))
        .catch(e => {
            dispatch({ type: GET_ROOMS_ERROR, payload: e });
        });
};

export {
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
    getRooms,
}