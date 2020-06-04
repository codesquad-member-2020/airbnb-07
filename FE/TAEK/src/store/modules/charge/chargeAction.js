const SAVE_CHARGE = 'charge/SAVE_CHARGE'
const RESET_CHARGE = 'charge/RESET_CHARGE';
const MIN_CHARGE = 'charge/MIN_CHARGE';
const MAX_CHARGE = 'charge/MAX_CHARGE';

const saveCharge = () => ({ type: SAVE_CHARGE });
const resetCharge = () => ({ type: RESET_CHARGE });
const minCharge = (charge) => ({ type: MIN_CHARGE, payload: charge });
const maxCharge = (charge) => ({ type: MAX_CHARGE, payload: charge });

export {
    SAVE_CHARGE,
    RESET_CHARGE,
    MIN_CHARGE,
    MAX_CHARGE,
    saveCharge,
    resetCharge,
    minCharge,
    maxCharge,
}