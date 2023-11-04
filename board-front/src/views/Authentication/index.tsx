import React from 'react';
import './style.css';

//          component: 인증 화면 컴포넌트          //
export default function Authentication() {

  //          component: sign in card 컴포넌트          //
  const SignInCard = () => {

    //          render: sign in card 컴포넌트 렌더링          //
    return (
      <div className='auth-card'></div>
    );
  };

  //          component: sign up card 컴포넌트          //
  const SignUpCard = () => {

    //          render: sign Up card 컴포넌트 렌더링          //
    return (
      <div className='auth-card'></div>
    );
  };

  //          render: 인증 화면 컴포넌트 렌더링          //
  return (
    <div id='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jumbotron-contents'>
            <div className='auth-logo-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
              <div className='auth-jumbotron-text'>{'BOARD 입니다.'}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
