import { Grid, Box } from '@mui/material'

export default function Nav(){
    const navItem = ['Concept', 'Design', 'Color cosmetics', 'Skin cosmetics', 'About'];
    return (
        <nav>
            <Grid container my={2}>
                {navItem.map((item) => (

                    <Grid item xs={12} sm key={item}>
                        <Box bgcolor='primary.light' p={2} style={{color: '#fff'}}>
                            <strong>{item}</strong>
                        </Box>
                    </Grid>
                ))}
                
            </Grid>
        </nav>
    )
}