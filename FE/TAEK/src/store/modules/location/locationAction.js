const CHANGE_LOCATION = 'location/CHANGE_LOCATION';

const changeLocation = location => ({ type: CHANGE_LOCATION, payload: location });

export {
    CHANGE_LOCATION,
    changeLocation,
}