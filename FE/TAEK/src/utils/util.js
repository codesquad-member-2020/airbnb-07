export const numberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const dayCounter = (checkIn, checkOut) => {
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

export const formatDate = (year, month, day, gap) => {
    if ((month + '').length < 2) month = '0' + month;
    if ((day + '').length < 2) day = '0' + day;
    return [year, month, day].join(gap);
}

export const setCookie = (key, value, days) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
    document.cookie = key + '=' + cookie_value;
}

export const getCookie = (key) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + key + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

export const deleteCookie = (key) => {
    document.cookie = key + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);