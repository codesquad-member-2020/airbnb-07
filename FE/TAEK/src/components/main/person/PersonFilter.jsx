import React, { useState, useEffect } from 'react'
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
    const [prevPersons, setPrevPersons] = useState('');
    const { isSave, totalCount, adultCount, childCount, babyCount } = useSelector(({ person }) => person);

    const handleSetOpen = () => setOpen(!isOpen);

    const persons = isSave && totalCount ? [] : ['인원'];
    if (isSave && adultCount) persons.push(`${MAIN.PERSON.ADULT.TEXT} ${adultCount}명`);
    if (isSave && childCount) persons.push(`${MAIN.PERSON.CHILD.TEXT} ${childCount}명`);
    if (isSave && babyCount) persons.push(`${MAIN.PERSON.BABY.TEXT} ${babyCount}명`);

    useEffect(() => {
        setPrevPersons(persons.join(', '));
    }, [isOpen]);

    return (
        <PersonFilterWrap>
            <PersonFilterBtn onClick={handleSetOpen}>
                {isSave ? persons.join(', ') : prevPersons}
            </PersonFilterBtn>
            {isOpen && <PersonFilterModal {...{ handleSetOpen }} />}
        </PersonFilterWrap>
    )
}

export default PersonFilter
