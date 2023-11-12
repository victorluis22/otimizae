import { ButtonProps } from "./types";
import { Button } from '@mui/material';
import { MdSend } from 'react-icons/md';

export default function NormalButton({text}: ButtonProps){
    return (
        <div className="my-3">
            <Button
                sx={{
                    color: "#1E1E1E",
                    borderColor: "#1E1E1E",
                    ":hover":{
                        borderColor: "#1E1E1E"
                    }
                }}
                variant="outlined" 
                endIcon={<MdSend />} 
                disableElevation
                type="submit"
            >
                {text}
            </Button>
        </div>
    );
}
