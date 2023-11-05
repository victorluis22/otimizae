'use client'

import Text from "@/app/global/Text";
import Title from "@/app/global/Title";
import { TextField } from "@mui/material";
import { usePathname } from "next/navigation";

export default function secaoAurea({}){
    const pathname = usePathname()

    return (
        <div>
            <p className="font-bold text-dark-blue">{pathname.slice(1,pathname.length).replaceAll("/", " / ")}</p>

            <Title text="Calculadora de Seção Áurea" size="xl"/>
            
            <Text text="O Método da Seção Áurea, também conhecido como proporção áurea, é uma técnica matemática que envolve dividir um segmento em duas partes de forma que a razão entre a parte menor e a parte maior seja igual à razão entre a parte maior e o segmento inteiro, aproximadamente 1,618." />

            <TextField
                id="outlined-multiline-static"
                label="Insira a função"
                multiline
                fullWidth
                rows={4}
            />
            
        </div>
    );
}
