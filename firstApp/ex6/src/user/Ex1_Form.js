import {useState} from 'react'
import '../css/Ex1.css'
import { addUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux'

function Ex1_Form() {

    const [name, setName] = useState( "" );
    const [phone, setPhone] = useState( "" );
    const [email, setEmail] = useState( "" );

    const userList = useSelector( (state) => state.user.users );

    // console.log( name, phone, email );

    const dispatch = useDispatch();

    return (
        <div className="Ex1_Form">
            <form className='form'>
                <div>
                    <label >Name</label>
                    <input type={'text'} name='name' id='name' placeholder='Enter your name' 
                            onChange={ (e)=> setName(e.target.value) } 
                            />
                    <label >Phone</label>
                    <input type={'tel'} name='phone' id='phone' placeholder='Enter your name' 
                            onChange={ (e)=> setPhone(e.target.value) } 
                            />
                    <label >Email</label>
                    <input type={'email'} name='email' id='email' placeholder='Enter your name' 
                            onChange={ (e)=> setEmail(e.target.value) } 
                            />
                    <button type='button' onClick={(e) => {
                        dispatch(addUser( {
                            num: userList.length+1 , name, phone, email
                        }));
                    }}>Add</button>
                </div>
            </form>

        </div>
    );
}

export default Ex1_Form;