import {increaseNumber} from '../redux/NumberSlice'
import { useDispatch } from 'react-redux'

function Inc()  {
    const dispatch = useDispatch();
    return (
        <div className='Inc'>
            <button type='button' onClick={ (e) => {
                dispatch( increaseNumber() );
            } }> + </button>
        </div>

    );
}

export default Inc;