import { getCookie, deleteCookie } from 'utils/util';
import { COMMON } from 'constants/constant';

const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';

const checkLogin = () => dispatch => {
    const token = getCookie(COMMON.TOKEN_KEY);
    if (token) dispatch({ type: LOGIN, payload: token });
}
const logout = () => dispatch => {
    deleteCookie(COMMON.TOKEN_KEY);
    dispatch({ type: LOGOUT });
}

export {
    LOGIN,
    LOGOUT,
    checkLogin,
    logout,
}