const MODAL_TOGGLE = 'reservation/MODAL_TOGGLE';
const SELECTED_ROOM = 'reservation/SELECTED_ROOM';

const modalToggle = () => ({ type: MODAL_TOGGLE });
const selectedRoom = roomData => ({ type: SELECTED_ROOM, payload: roomData });

export {
    MODAL_TOGGLE,
    SELECTED_ROOM,
    modalToggle,
    selectedRoom,
}
