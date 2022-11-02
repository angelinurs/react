import '../css/Ex1.css'
import { useSelector, useDispatch } from 'react-redux';
import { delUser } from '../redux/userSlice';

function Ex1_Res()  {
    /*
        # state 는 저장소! 즉, store.js 를 의미하고,
        state.user 는 store.js 에 등록된 리듀서들 중 user 라는 이름으로
        등록된 userSlice.js 를 의미한다.
        그리고 그 뒤의 users 가 바로 
        userSlice 에 있는 initialState 안의 명칭중 하나다.
    */
    const list = useSelector( (state) => state.user.users );
    const dispatch = useDispatch();
    return (
        <div className='Ex1_Res'>
            {/* 
                삼항 연산자를 활용하여 list 의 길이가  0 보다 클 때만 반복함.
             */}
            <div className='res' >
             {list.length > 0 ? list.map( data => 
                <div key={data.num}>
                    <h2>User No : {data.num}</h2>
                    <h2>User Name : {data.name}</h2>
                    <h2>User Phone : {data.phone}</h2>
                    <h2>User email : {data.email}</h2>
                    <button type='button' > Edit </button>
                    <button type='button' onClick={ (e) => {
                        dispatch( delUser( { num : data.num }));
                    }} > Delete </button>
                </div>

                ): 'This is empty' }
            </div>
            
        </div>

    );
}

export default Ex1_Res;