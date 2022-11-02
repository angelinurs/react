import { useState } from 'react'

const Ex4 = () => {
    const [ vo, setVO ] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const setValue = ( e ) => {
        let value = e.target.value;
        let id = e.target.id;
        
        setVO({
            // 스프레이드 속성. VO 를 하나 복사해 놓는 개념
            ...vo,
            [id]: value
        });
    };

    return (
        <div className='Ex4' >
            <div>
                <label>이름</label>
                <input type='text' id='name' value={vo.name} onChange={setValue} />
            </div>
            <div>
                <label>Email</label>
                <input type='email' id='email' value={vo.email} onChange={setValue} />
            </div>
            <div>
                <label>전화번호</label>
                <input type='tel' id='phone' value={vo.phone} onChange={setValue} />
            </div>
            <p>이름 : {vo.name}</p>
            <p>Email : {vo.email}</p>
            <p>전화번호 : {vo.phone}</p>
        </div>

    );
}

export default Ex4;