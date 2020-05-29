export const numberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const dayCounter = (checkIn, checkOut) => {
    if (!checkOut) return 1;

    const day = 1000 * 60 * 60 * 24;
    const _checkIn = new Date(checkIn.year, checkIn.month - 1, checkIn.day);
    const _checkOut = new Date(checkOut.year, checkOut.month - 1, checkOut.day);

    if (_checkIn.getMonth() === 11 && _checkIn.getdate() > 25) _checkOut.setFullYear(_checkOut.getFullYear() + 1);

    const result = Math.round(_checkOut.getTime() - _checkIn.getTime()) / day;
    return result.toFixed(0);
}

export const getAverageCharge = prices => {
    let total = 0;
    const totalPrice = prices.reduce((acc, cur) => {
        total += cur.total;
        acc += (cur.total * cur.price);
        return acc;
    }, 0);
    return Math.floor(totalPrice / total);
}