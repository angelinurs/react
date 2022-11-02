import {useState} from 'react'
import Ex7_sub from './Ex7_sub';

function Ex7( data ) {
    // data 는 Properties 라고 하며, 인자라고 이해하면 된다.
    // 이런 Properties 는 이 컴포넌트 내에서 변경할 수 없다.
    // data.year = 2000; 이런것을 할 수 없다.
    // 만약 수정하고 싶다면,useState 를 사용하면 된다.
    const [txt, setTxt] = useState( data.str );
    const [year, setYear] = useState( data.year );

    return (
        <div className='Ex7'>
            <Ex7_sub year={year} />
            <p>{txt} ({year})</p>
            <button type='button' onClick={ () =>{
                setTxt( txt === 'Whale' ? '고래':'Whale');
                setYear( year + 1 );
            }} >Change</button>

        </div>
    );

}

export default Ex7;