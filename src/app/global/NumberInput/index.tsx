import { NumberInputProps } from "./types";

export default function NumberInput({value, setValue, placeholder}: NumberInputProps){
    return (
        <input
            placeholder={placeholder}
            className={`border rounded-material-ui border-gray-400 outline-light-blue pl-2 py-2 font-light placeholder:text-black w-full max-w-sm`}
            type="number" 
            name="Numeric Input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
