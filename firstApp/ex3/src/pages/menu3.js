import React from 'react'

function Menu3()    {
    let divStyleformat = {
        // 가운데 정렬
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // 화면 정 가운데 가게 하기
        // vh : viewPort Height 
        // -> 현재 실행중인 화면의 크기에 맞추어 상대적 위치를 반환
        height: '100vh'
    }
    let formStyleformat = {
        // 세로축으로 펼침.
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div className='Menu3' style={ divStyleformat }>
            <form style={ formStyleformat }>
                <label>Email :&nbsp;</label>
                <input type={'email'} placeholder='email enter' />
                <label>Password :&nbsp;</label>
                <input type={'password'} placeholder='password enter' />
                <br />
                <button type={'button'}>Login</button>
            </form>
        </div>
    );
}

export default Menu3;