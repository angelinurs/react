import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green, pink } from '@mui/material/colors';
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { setCookie } from 'cookies-next';

export default function SignIn( ) {

    const router = useRouter();

    const [mvo, setMvo] = useState({
        m_id: '',
        m_pw: ''
    });

    const API_URL = "/mem/login";

    function changeMvo(e) {
        setMvo({
            ...mvo,
            // [e.target.name] -> name 에 지정된 이름을 그대로 변수로 사용 가능
            [e.target.name] : e.target.value
        })
        // console.log( mvo.m_id + ' / ' + mvo.m_pw );
    }
    
    function login()    {

        axios.post(
            API_URL,
            null,  
            {
                params : {
                    id : mvo.m_id,
                    pw : mvo.m_pw
                }
            }
        ).then( json => {
            console.log( json );
            console.log( json.data.chk );
            if( json.data.chk & 1 ) {
                setCookie( 'uname', json.data.user.m_name, { maxAge: 3600 } );
                router.push( '/' );
            } else {
                router.push( '/signin' );
            }
        });
        
    }

    return (
        <div style={{width:'80%', margin: 'auto', padding: '20px'}}>
            <Stack direction={'column'} alignItems='center' spacing={1}>
                <Avatar src="/broken-image.jpg" sx={{ bgcolor: green[500]}}/>
                <FormControl>
                    <TextField name="m_id" label="Email" autoComplete="email"
                            fullWidth autoFocus onChange={changeMvo} />
                    <TextField name="m_pw" label="Password" type={'password'} autoComplete="pwd"
                            fullWidth onChange={changeMvo}/>
                    <Button variant="contained" fullWidth onClick={login}>Sign In</Button>
                </FormControl>
            </Stack>
        </div>
    );
}