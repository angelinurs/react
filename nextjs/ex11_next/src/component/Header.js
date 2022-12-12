import { Button, Toolbar, Typography } from "@mui/material";
import Nav from "./Nav";
import { useRouter } from "next/router";
import { getCookie, hasCookie, deleteCookie } from 'cookies-next';

export default function Header(){
    const router = useRouter();

    
    return(
        <div style={{width:'80%', margin: 'auto', padding: '20px'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, border: '1px solid red'}}>
                    <img src="/images/logo.png" alt="logo"/>
                </Typography>

                { !hasCookie( 'uname' ) && (
                    <Button variant="contained" size="small"
                        onClick={() => router.push( "/signin")}>Sign in</Button>                    
                )}
                { hasCookie( 'uname' ) && (
                    <Button variant="contained" size="small"
                        onClick={() => {
                            deleteCookie( 'uname' );
                            router.push( "/");
                        }}
                    > Sign out</Button>                    
                )}

            </Toolbar>
            
            <Nav/>
        </div> 
    )
}