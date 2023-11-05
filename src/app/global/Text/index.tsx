import { TextProps } from "./types";

export default function Text({text}: TextProps){
    return (
        <p className="my-2">{text}</p>
    );
}
