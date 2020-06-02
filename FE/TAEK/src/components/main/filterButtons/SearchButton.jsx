import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { COMMON } from 'constants/constant';
import { getRoomsFilterData } from 'store/modules/rooms/roomsAction';
import { changePage } from 'store/modules/rooms/roomsAction';
import { formatDate } from 'utils/util';

const SearchButtonWrap = styled.div`
    border: 1.19px solid #7f8c8d99;
    background-color: #000;
    color: #fff;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 25px;
    height: 100%;
    line-height: 39.6px;
    cursor: pointer;
    box-sizing: border-box;
    width: 100px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const SearchButton = () => {
    const dispatch = useDispatch();
    const { location } = useSelector(({ location }) => location);
    const date = useSelector(({ date }) => date);
    const person = useSelector(({ person }) => person);
    const charge = useSelector(({ charge }) => charge);

    const { checkInDateInfo, checkOutDateInfo } = date;
    const { totalCount } = person;
    const { min, max } = charge;

    const handleSearchClick = () => {
        if (!date.isSave || !person.isSave) return alert(COMMON.NOT_ENOUGH_CONDITION_MESSAGE);
        if (!date.checkOutDate) return alert(COMMON.NOT_INPUT_CHECKOUT_MESSAGE);
        const filterData = {
            location: location,
            startDate: formatDate(checkInDateInfo.year, checkInDateInfo.month, checkInDateInfo.day, '-'),
            endDate: formatDate(checkOutDateInfo.year, checkOutDateInfo.month, checkOutDateInfo.day, '-'),
            people: totalCount,
            min: charge.isSave ? min : null,
            max: charge.isSave ? max : null
        }
        dispatch(getRoomsFilterData({ filterData, min, max }));
        dispatch(changePage(1));
    }

    return (
        <SearchButtonWrap onClick={handleSearchClick}>
            검 색
        </SearchButtonWrap>
    )
}

export default SearchButton
