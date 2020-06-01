import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { changePage } from 'store/modules/rooms/roomsAction';
import { MAIN } from 'constants/constant';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
    },
}));

export default function PaginationControlled() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentPage, filterRoomsData } = useSelector(({ rooms }) => rooms);

    const handleChange = (event, value) => dispatch(changePage(value));

    const maximum = MAIN.ROOMS.MAXIMUM_VIEW_ITEM_COUNT;
    const pageCount = Math.ceil(filterRoomsData.allData.length / maximum);

    return (
        <div className={classes.root}>
            <Pagination count={pageCount} page={currentPage} onChange={handleChange} />
        </div>
    );
}