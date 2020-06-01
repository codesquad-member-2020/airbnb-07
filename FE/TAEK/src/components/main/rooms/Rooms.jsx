import React, { useEffect } from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';
import LoadingSpiner from '@/components/common/LoadingSpiner';
import PageTop from '@/components/common/PageTop';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsInitData, getRoomsFilterData } from 'store/modules/rooms/roomsAction';
import ReservationModal from './reservation/ReservationModal';
import { COMMON } from 'constants/constant';
import { numberComma } from 'utils/util';

const RoomsWrap = styled.div`
    margin-top: 60px;
`;

const RoomsTitle = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 20px;
    font-weight: 600;
    color: #000;
`;

const ResultReset = styled.div`
    color: #c2c2c2;
    font-weight: 500;
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
    :hover {
        color: #000;
    }
`;

const Rooms = () => {
    const dispatch = useDispatch();
    const { min, max } = useSelector(({ charge }) => charge);
    const { loading, filterData, filterRoomsData, error } = useSelector(({ rooms }) => rooms);
    const { isModalOpen, roomData } = useSelector(({ reservation }) => reservation);

    const handleResultResetClick = () => location.reload();

    useEffect(() => {
        filterData ? dispatch(getRoomsFilterData({ filterData, min, max })) : dispatch(getRoomsInitData({ min, max }));
    }, [dispatch]);

    if (loading) return <LoadingSpiner />;

    return (
        <RoomsWrap>
            {error ?
                <>
                    <span>{error}</span>
                </> :
                <>
                    {isModalOpen && <ReservationModal {...{ roomData }} />}
                    <RoomsTitle>
                        {filterRoomsData.allData.length ?
                            `검색 결과 약 ${numberComma(filterRoomsData.allData.length)}개` :
                            `${COMMON.NOT_RESULT}`}
                        <ResultReset onClick={handleResultResetClick}>초기화</ResultReset>
                    </RoomsTitle>
                    <RoomList allData={filterRoomsData.allData} />
                    <PageTop />
                </>}
        </RoomsWrap>
    )
}

export default Rooms
