import React from 'react';
import './style.css';

//          component: Top 3 List Item 컴포넌트          //
export default function Top3Item() {

  //          render: Top 3 List Item 컴포넌트 렌더링         //
  return (
    <div className='top-3-list-item'>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profile-box'>
                    <div className='top-3-list-item-profile-image' style={{ backgroundImage: `url()` }}></div>
                </div>
                <div className='top-3-list-item-write-box'>
                    <div className='top-3-list-item-nickname'>{'안녕하세요관리자입니다.'}</div>
                    <div className='top-3-list-item-write-date'>{'2023. 06. 22'}</div>
                </div>
            </div>
            <div className='top-3-list-item-middle'>
                <div className='top-3-list-item-title'>{'오늘 점심 메뉴 추천'}</div>
                <div className='top-3-list-item-content'>{'점심 메뉴 무엇을 먹을지 추천을 받고싶다.'}</div>
            </div>
            <div className='top-3-list-item-bottom'>
                <div className='top-3-list-item-counts'>
                    {`댓글 0 · 좋아요 0 · 조회수 0`}
                </div>
            </div>
        </div>
    </div>
  )
}
