import React, { useState } from 'react'
import styled from 'styled-components';
import PersonFilterModal from './PersonFilterModal';

const PersonFilterWrap = styled.div`
    position: relative;
    color: #484848;
`;

const PersonFilterBtn = styled.div`
    border: 1.19px solid #7f8c8d99;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 25px;
    height: 100%;
    line-height: 39.6px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
`;

const PersonFilter = () => {
    const [isOpen, setOpen] = useState(false);
    const handleSetOpen = () => setOpen(!isOpen);

    return (
        <PersonFilterWrap>
            <PersonFilterBtn onClick={handleSetOpen}>인원</PersonFilterBtn>
            {isOpen && <PersonFilterModal {...{ handleSetOpen }} />}
        </PersonFilterWrap>
    )
}

export default PersonFilter
