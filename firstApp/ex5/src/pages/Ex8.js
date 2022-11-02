import {useState} from 'react'
import data from '../data/data.json'

import styles from '../css/Ex8.module.css'
import Ex8_table from './Ex8_table';

function Ex8() {
    const [subno, setSubno] = useState( 1 );
    const [title, setTitle] = useState( 'frontEnd' );

    function setSubNumber(e) {

        // setSubno( e.target.key );
        // or
        // setSubno( e.target.value );
    }

    return (
        <div>            
            <ul className={styles.m_list}>
                {data.subject.map( sub => (
                    <li key={sub.id} onClick={ () => {
                        setSubno( sub.id );
                        setTitle( sub.title );
                    } }>{sub.title}</li>
                ) )}
            </ul>
            <h1>{title}</h1>
            <Ex8_table subject={subno} />
        </div>
    );
}

export default Ex8;