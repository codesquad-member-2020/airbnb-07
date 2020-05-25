import React from 'react'
import styled from 'styled-components';
import DateFilter from './date/DateFilter';
import PersonFilter from './person/PersonFilter';
import ChargeFilter from './charge/ChargeFilter';

const FilterButtonsWrap = styled.div`
    display: flex;
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
    > * {
       margin-right: 20px;
       :last-child {
           margin-right: 0;
       }
       @media (max-width: 680px) { margin-right: 8px; }
    }
`;

const FilterButtons = () => {
    return (
        <FilterButtonsWrap>
            <DateFilter />
            <PersonFilter />
            <ChargeFilter />
        </FilterButtonsWrap>
    )
}

export default FilterButtons
