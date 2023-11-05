import { TitleProps } from "./types";

export default function Title({text, size}: TitleProps){
    return (
        <h1 className={`font-bold text-${size} my-3`}>{text}</h1>
    );
}
