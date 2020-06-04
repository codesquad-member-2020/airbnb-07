import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from 'store/modules/person/personAction';
import { MAIN } from 'constants/constant';

const PersonFilterModalItem = ({ typeText, ageText, countText, countType, }) => {
    const dispatch = useDispatch();
    const limitCount = MAIN.PERSON.LIMIT_COUNT;
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
                    disabled={!countText}
                    className={'person-count-btn'}
                    onClick={() => handlePersonCountDown(countType)}>➖
                </button>
                <span className='person-count'>{countText}</span>
                <button
                    disabled={limitCount === countText}
                    className={'person-count-btn'}
                    onClick={() => handlePersonCountUp(countType)}>➕
                </button>
            </div>
        </div>
    )
}

export default PersonFilterModalItem
