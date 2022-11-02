import {useCase} from 'react'

function Ex5()  {
    let txt = 'Whale';

    const setValue = () => {
        if( txt === 'Whale' )
            txt = '고래';
        else
            txt = 'Whale';

        console.log( txt );
        document.getElementById( 'txt_p' ).innerText = txt;
    }

    return (
        <div className='Ex5'>
            <p id='txt_p'>{txt}</p>

{/*             
            <button type='button' onClick={setValue}>Change</button>
 */}

            <button type='button' onClick={ () => { 
                if( txt === 'Whale' )
                    txt = '고래';
                else
                    txt = 'Whale';
        
                console.log( txt );
                document.getElementById( 'txt_p' ).innerText = txt;

                }}>Change</button>
        </div>
    );
}

export default Ex5;