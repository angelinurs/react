import {useState} from 'react'

function Ex6()  {
    const [txt, setTxt]  = useState('Whale');

    return (
        <div className='Ex6'>
            <p id='txt_p'>{txt}</p>

            <button type='button' onClick={ () => {
                setTxt( txt === 'Whale' ? '고래': 'Whale');
            }}>Change</button>

        </div>
    );
}

export default Ex6;