import {Grid} from '@mui/material'

function TestList( {list}) {
    return (
        <div className='TestList'>
            <Grid container>
                {list.map((vo, index) => (
                    <Grid item key={index} xs={12}>
                        <strong>{vo.id}{ ' : ' }</strong>
                        <span>{vo.value}</span>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default TestList;