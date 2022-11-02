import {useSelector} from 'react-redux';

function Number() {
    const viewValue = useSelector( (state) => state.Number.num );
    return (
        <div className='Number'>
            <input type='text' readOnly disabled value={viewValue} />
        </div>
    );
}

export default Number;