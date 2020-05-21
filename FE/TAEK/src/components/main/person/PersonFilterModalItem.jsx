import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from 'store/modules/person';

const PersonFilterModalItem = ({ typeText, ageText, countText, personType, }) => {
    const dispatch = useDispatch();
    const handlePersonCountUp = (personType) => dispatch(increaseCount(personType));
    const handlePersonCountDown = (personType) => dispatch(decreaseCount(personType));

    return (
        <div className='modal-item-wrap'>
            <div>
                <div className='person-type'>{typeText}</div>
                <div className='person-age'>{ageText}</div>
            </div>
            <div>
                <button
                    className='person-count-btn'
                    onClick={() => handlePersonCountDown(personType)}>➖
                </button>
                <span className='person-count'>{countText}</span>
                <button
                    className='person-count-btn'
                    onClick={() => handlePersonCountUp(personType)}>➕
                </button>
            </div>
        </div>
    )
}

export default PersonFilterModalItem
