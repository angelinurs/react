import {userState} from 'react'

const Ex7_sub = ( {year} ) => {
    // 전달 받는 Properties 중 특정한 parameter 만 받을때는
    // {} 으로 감싸서 받는다.

    return (
        <div className='Ex7_sub'>
            <h1>창업년도 : {year}</h1>
        </div>
    );
}

export default Ex7_sub;