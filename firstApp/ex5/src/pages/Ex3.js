import react, { useState } from 'react'

function Ex3()  {
    // let txt = "immutable effect";
    const [txt, setTxt] = useState( "mutable effect" );

    // function changeValue( e ) {
    //     // console.log( '1234' );
    //     console.log( e.target.value );
    //     setTxt( e.target.value );
    // };

    const changeValue = (e) => {
        setTxt( e.target.value );
    };

    return (
        <div className='Ex3'>
            <input type='text' value={txt} onChange={changeValue} />
            <br />
            <p>{txt}</p>

        </div>
    );
}

export default Ex3;