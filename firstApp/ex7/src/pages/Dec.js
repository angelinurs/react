import {decreaseNumber} from '../redux/NumberSlice'
import { useDispatch} from 'react-redux'

function Dec()  {
    const dispatch = useDispatch();
    return (
        <div className='Dec'>
            <button type='button' onClick={ (e) => {
                dispatch( decreaseNumber() );
            }}> - </button>
        </div>
    );
}

export default Dec;