import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from 'store/modules/person/personAction';

const PersonFilterModalItem = ({ typeText, ageText, countText, countType, }) => {
    const dispatch = useDispatch();
    const handlePersonCountUp = (countType) => dispatch(increaseCount(countType));
    const handlePersonCountDown = (countType) => dispatch(decreaseCount(countType));

    return (
        <div className='modal-item-wrap'>
            <div>
                <div className='person-type'>{typeText}</div>
                <div className='person-age'>{ageText}</div>
            </div>
            <div>
                <button
                    className='person-count-btn'
                    onClick={() => handlePersonCountDown(countType)}>➖
                </button>
                <span className='person-count'>{countText}</span>
                <button
                    className='person-count-btn'
                    onClick={() => handlePersonCountUp(countType)}>➕
                </button>
            </div>
        </div>
    )
}

export default PersonFilterModalItem
