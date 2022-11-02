import { Grid, Box } from '@mui/material'
import { useRouter } from 'next/router';

export default function Nav(){
    const navItem = ['Concept', 'Design', 'Color cosmetics', 'Skin cosmetics', 'About'];
    const router = useRouter();    

    function gogo(item){
        console.log("gogo함수:"+item);
        if(item === 0)
            router.push('/concept');//location.href='/concept';
        else if(item === 1)
            router.push('/design');//location.href='/design';
    }
    return (
        <nav>
            <Grid container my={2}>
                {navItem.map((item, index) => (

                    <Grid item xs={12} sm key={item} onClick={() => gogo(index)}>
                        <Box bgcolor='primary.light' p={2} style={{color: '#fff'}}>
                            <strong>{item}</strong>
                        </Box>
                    </Grid>
                ))}
                
            </Grid>
        </nav>
    )
}