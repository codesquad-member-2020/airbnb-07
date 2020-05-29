import React from 'react'
import { useHistory } from "react-router-dom";

const MainHeaderMenu = () => {
    let history = useHistory();
    const handleMyPageClick = () => history.push('/mypage');

    return (
        <ul className='main-header-menu'>
            <li>숙소 호스트 되기</li>
            <li>체험 호스팅하기</li>
            <li>도움말</li>
            <li onClick={handleMyPageClick}>마이페이지</li>
            <li>로그아웃</li>
        </ul>
    )
}

export default MainHeaderMenu
