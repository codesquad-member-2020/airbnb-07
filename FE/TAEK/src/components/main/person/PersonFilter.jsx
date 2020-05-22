import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PersonFilterModal from './PersonFilterModal';
import { MAIN } from 'constants/constant';

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
    const { total, adult, child, baby } = useSelector(({ person }) => person);

    const persons = total ? [] : ['인원'];
    if (adult) persons.push(`${MAIN.PERSON.ADULT_TEXT} ${adult}명`);
    if (child) persons.push(`${MAIN.PERSON.CHILD_TEXT} ${child}명`);
    if (baby) persons.push(`${MAIN.PERSON.BABY_TEXT} ${baby}명`);

    return (
        <PersonFilterWrap>
            <PersonFilterBtn onClick={handleSetOpen}>
                {persons.join(', ')}
            </PersonFilterBtn>
            {isOpen && <PersonFilterModal {...{ handleSetOpen }} />}
        </PersonFilterWrap>
    )
}

export default PersonFilter
