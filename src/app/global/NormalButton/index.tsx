import { ButtonProps } from "./types";
import { Button } from '@mui/material';
import { MdSend } from 'react-icons/md';

export default function NormalButton({action, text}: ButtonProps){
    return (
        <Button 
            className={`bg-dark-blue transition-all hover:bg-dark-blue my-3`} 
            variant="contained" 
            endIcon={<MdSend />} 
            disableElevation
            onClick={() => action()}
        >
            {text}
        </Button>
    );
}
