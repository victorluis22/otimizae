'use client'

import { instantWarn, loading, success, error } from "@/app/configs/toastConfig";
import DataTable from "@/app/global/DataTable";
import NormalButton from "@/app/global/NormalButton";
import NumberInput from "@/app/global/NumberInput";
import Text from "@/app/global/Text";
import Title from "@/app/global/Title";
import { goldenSearch } from "@/app/services/api";
import { TextField } from "@mui/material";
import { AxiosError } from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from 'react'

export default function SecaoAurea({}){
    const pathname = usePathname()

    const [expression, setExpression] = useState("x**2 + 2*x +2")
    const [start, setStart] = useState("-10")
    const [end, setEnd] = useState("10")
    const [limit, setLimit] = useState("0.000001")

    const [result, setResult] = useState({
        sucess: false,
        fx: 0,
        img: "",
        time: 0,
        x: 0,
        data: {
            time: [0],
            a: [0],
            b: [0],
            d: [0],
            x1: [0],
            fx1: [0],
            x2: [0],
            fx2: [0]
        }
    })

    const submit = async (e: FormEvent) => {
        e.preventDefault()
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
                console.log(response.data)

                success(id, "Comunicação feita com sucesso")
            }
            catch(e){
                const err = e as AxiosError
                const status = err.response ? err.response.status : 500

                if (status === 400){
                    error(id, "Algum operador usado não é permitido, tente novamente.")
                }
                else if(status == 408){
                    error(id, "O programa demorou muito para responder, tente novamente depois.")
                }
                else{
                    error(id, "Erro interno do servidor.")
                }
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

            <form onSubmit={(e) => submit(e)}>
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
                <NormalButton text="Enviar"/>
            </form>
            
            {result.sucess ?
                <div className="my-3 ">
                    <Title text="Resultados" size="xl" />
                    <Image src={`data:image/jpeg;base64,${result.img}`} alt="Gráfico do Resultado" width={500} height={500} />
                    <Text text={`Função minimizada: ${expression}`}/>
                    <Text text={`x: ${result.x}`}/>
                    <Text text={`y: ${result.fx}`}/>
                    <Text text={`Iterações: ${result.time}`}/>

                    <DataTable type="golden" data={result.data}/>
                </div>
                :
                null
            }
        </div>
    );
}
