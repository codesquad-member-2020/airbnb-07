import React from 'react'
import styled from 'styled-components';
import LocationFilter from './location/LocationFilter';
import DateFilter from './date/DateFilter';
import PersonFilter from './person/PersonFilter';
import ChargeFilter from './charge/ChargeFilter';
import SearchButton from './SearchButton';

const ButtonsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 39.98px;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 0.5px solid #bdc3c7;
        top: calc(100% + 15px);
        left: 0;
    }
`;

const FilterButtonsWrap = styled.div`
    display: flex;
    position: relative;
    > * {
       margin-right: 20px;
       @media (max-width: 680px) { margin-right: 8px; }
    }
`;

const FilterButtons = () => {
    return (
        <ButtonsWrap>
            <FilterButtonsWrap>
                <LocationFilter />
                <DateFilter />
                <PersonFilter />
                <ChargeFilter />
            </FilterButtonsWrap>
            <SearchButton />
        </ButtonsWrap>
    )
}

export default FilterButtons
