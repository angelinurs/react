import { Button, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export const Ex2_button = () =>   {
    return (
        <Stack spacing={2} >
            <Stack spacing={2} direction='row' >
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </Stack>
            <Stack spacing={2} direction='row' >
                <Button variant="contained" color='primary'>primary</Button>
                <Button variant="contained" color='secondary'>secondary</Button>
                <Button variant="contained" color='error'>error</Button>
                <Button variant="contained" color='warning'>warning</Button>
                <Button variant="contained" color='info'>info</Button>
            </Stack>
            <Stack spacing={2} direction='row' >
                <Button variant="contained" size='small' >Small</Button>
                <Button variant="contained" size='medium' >Medium</Button>
                <Button variant="contained" size='large' >Large</Button>
            </Stack>
            <Stack spacing={2} direction='row' >
                <Button variant="contained" startIcon={<SendIcon />} >Send</Button>
                <Button variant="contained" 
                        endIcon={<SendIcon />} 
                        disableRipple
                        onClick={() => alert("안녕!")} >Send</Button>
                <IconButton size='small' color='error' >
                    <SendIcon/>

                </IconButton>
            </Stack>
        </Stack>

    );
}