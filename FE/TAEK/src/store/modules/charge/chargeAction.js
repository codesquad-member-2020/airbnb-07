const RESET_CHARGE = 'RESET_CHARGE';
const MIN_CHARGE = 'MIN_CHARGE';
const MAX_CHARGE = 'MAX_CHARGE';

const resetCharge = () => ({ type: RESET_CHARGE });
const minCharge = (charge) => ({ type: MIN_CHARGE, payload: charge });
const maxCharge = (charge) => ({ type: MAX_CHARGE, payload: charge });

export {
    RESET_CHARGE,
    MIN_CHARGE,
    MAX_CHARGE,
    resetCharge,
    minCharge,
    maxCharge,
}