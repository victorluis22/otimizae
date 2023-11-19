'use client'

import { instantWarn, loading, success, error } from "@/app/configs/toastConfig";
import DataTable from "@/app/global/DataTable";
import NormalButton from "@/app/global/NormalButton";
import NumberInput from "@/app/global/NumberInput";
import Text from "@/app/global/Text";
import Title from "@/app/global/Title";
import { newtonSearch } from "@/app/services/api";
import { TextField } from "@mui/material";
import { AxiosError } from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from 'react'

export default function Newton({}){
    const pathname = usePathname()

    const [expression, setExpression] = useState("x**2 + 2*x +2")
    const [initialValue, setInitialValue] = useState("-10")
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
            lmbda: [0],
            flmbda: [0]
        }
    })

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        if (expression && initialValue && limit){
            const data = {
                function: expression, 
                interval: [parseFloat(initialValue)-10, parseFloat(initialValue)+10],
                limit: parseFloat(limit),
                initialValue: parseFloat(initialValue)
            }

            const id = loading("Aguarde")
            try{
                const response = await newtonSearch(data)
                
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

            <Title text="Calculadora de busca pelo método de Newton" size="xl"/>
            
            <Text text="O método de busca de Newton para funções unidimensionais é uma forma que utiliza derivadas para calcular o mínimo ou máximo de uma função objetivo. O método inicia-se por meio de um palpite ou chute inicial, um valor que será substituído na função e iniciará todo o processo iterativo. A cada iteração, o valor de x é alterado seguindo a seguinte fórmula" />

            

            <Text text="A ideia básica do método de bisseção é dividir repetidamente o intervalo no qual se suspeita que o mínimo está localizado pela metade e, em seguida, selecionar o subintervalo no qual o mínimo deve estar."/>

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

                <Text text="Insira o valor inicial:*" />

                <NumberInput 
                    placeholder="Início"
                    value={initialValue}
                    setValue={setInitialValue}
                />

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

                    <DataTable type="bissection" data={result.data}/>
                </div>
                :
                null
            }
        </div>
    );
}
