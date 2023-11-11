'use client'

import { instantWarn, loading, success, error } from "@/app/configs/toastConfig";
import NormalButton from "@/app/global/NormalButton";
import NumberInput from "@/app/global/NumberInput";
import Text from "@/app/global/Text";
import Title from "@/app/global/Title";
import { goldenSearch, startAPI } from "@/app/services/api";
import { TextField } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from 'react'

export default function SecaoAurea({}){
    const pathname = usePathname()

    const [expression, setExpression] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [limit, setLimit] = useState("")

    const [result, setResult] = useState({
        sucess: false,
        fx: 0,
        img: "",
        time: 0,
        x: 0
    })

    const submit = async () => {
        if (expression && start && end && limit){
            const data = {
                function: expression, 
                interval: [parseFloat(start), parseFloat(end)],
                limit: parseFloat(limit)
            }

            const id = loading("Aguarde")
            try{
                const response = await goldenSearch(data)
                
                setResult({sucess: true, ...response.data})

                success(id, "Comunicação feita com sucesso")
            }
            catch{
                error(id, "Erro ao se comunicar com o servidor.")
            }
        }
        else{
            instantWarn("Preencha todos os campos obrigatórios.")
        }
    }

    return (
        <div>
            <p className="font-bold text-dark-blue">{pathname.slice(1,pathname.length).replaceAll("/", " / ")}</p>

            <Title text="Calculadora de Seção Áurea" size="xl"/>
            
            <Text text="O Método da Seção Áurea, também conhecido como proporção áurea, é uma técnica matemática que envolve dividir um segmento em duas partes de forma que a razão entre a parte menor e a parte maior seja igual à razão entre a parte maior e o segmento inteiro, aproximadamente 1,618." />

            <TextField
                className="my-3"
                id="outlined-multiline-static"
                label="Insira a função*"
                multiline
                fullWidth
                rows={4}
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
            />

            <Text text="Insira o intervalo de busca:*" />

            <div className="flex gap-3 flex-wrap">
                <NumberInput 
                    placeholder="Início"
                    value={start}
                    setValue={setStart}
                />
                <NumberInput 
                    placeholder="Fim"
                    value={end}
                    setValue={setEnd}
                />
            </div>

            <div>
                <Text text="Insira a condição de parada:*" />
                <NumberInput 
                    placeholder="Ex: 0.000001"
                    value={limit}
                    setValue={setLimit}
                />
            </div>

            <NormalButton action={submit} text="Enviar"/>
            
            {result.sucess ?
                <p>ola </p>
                :
                null
            }
        </div>
    );
}
