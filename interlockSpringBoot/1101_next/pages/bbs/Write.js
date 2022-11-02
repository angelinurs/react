import { Box, Stack, TextField, Divider, Button } from '@mui/material';

import {useState} from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';

function Write() {
    const [bbs, setBbs] = useState({
        subject :'',
        writer : '',
        content : '',
        pwd: '',
        bname: 'BBS'        
    });
    
    const ADD_BBS_URL = '/bbs/addBBS';
    const router = useRouter();

    const onChangeBbs = (e) => {
        setBbs({
            ...bbs,
            [e.target.name] : e.target.value,
        });
    }

    const add = () => {
        // Axios.get(
        //     ADD_BBS_URL, {
        //         params : bbs
        //         // {
        //         //     subject : bbs.subject,
        //         //     writer : bbs.writer,
        //         //     content : bbs.content,
        //         //     pwd: bbs.pwd,
        //         //     bname: 'BBS'
        //         // }
        //     }
        // ).then( data => {
        //     let rval = data.data;
        //     if( rval > 0 ) {
        //         router.push( "/" );
        //     }
        // } );

        // Axios.post(
        //     ADD_BBS_URL, null, {params :bbs}
        // ).then( data => {
        //     let rval = data.data;
        //     if( rval > 0 ) {
        //         router.push( "/" );
        //     }
        // } );

        Axios.post(
            ADD_BBS_URL,
            {
                subject : bbs.subject,
                writer : bbs.writer,
                content : bbs.content,
                pwd: bbs.pwd,
                bname: 'BBS'
            }
        ).then( data => {
            let rval = data.data;
            if( rval > 0 ) {
                router.push( "/" );
            }
        } );
    }

    return (
        <div className='Write'>
            <h2>글쓰기 화면</h2>
            <Box sx={{width: "350px"}}>
                <Stack>
                    <TextField
                        id="writer"
                        name="writer"
                        label="Writer"
                        variant="outlined"
                        onChange={ onChangeBbs } 
                        sx={{width:'150px', mb:1}}
                    />
                    <Divider />

                    <TextField
                        id="subject"
                        name="subject"
                        label="subject"
                        variant="outlined"
                        onChange={ onChangeBbs } 
                        sx={{width:'350px', mb:1}}
                    />                
                    <Divider />
                    
                    <TextField
                        id="content"
                        name="content"
                        label="content"
                        multiline
                        rows={5}
                        defaultValue=""
                        onChange={ onChangeBbs } 
                        sx={{width:'350px', mb:1}}
                    />
                    <Divider />

                    <TextField
                        id="pwd"
                        name="pwd"
                        label="pwd"
                        type="password"
                        // autoComplete="current-password"
                        onChange={ onChangeBbs } 
                        sx={{width:'150px', mb:1}}
                    />
                    
                    <Button variant="contained" onClick={() =>{ add(); } }>글쓰기</Button>
                </Stack>
            </Box>
            
        </div>

    );
}

export default Write;