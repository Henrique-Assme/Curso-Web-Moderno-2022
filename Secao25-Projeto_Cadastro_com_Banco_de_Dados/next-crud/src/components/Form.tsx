import { useState } from "react"
import Input from './Input';
import Client from "@/core/Client";
import Button from './Button';

interface FormProps {
    client: Client
    canceled?: () => void
    clientUpdated?: (client: Client) => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? '')
    return (
        <div>
            {id ? (
                <Input text="Código" value={id} readOnly />
            ) : false}
            <Input 
                text="Nome" 
                value={name}
                onChange={setName}
                className="mb-4"
            />
            <Input 
                text="Idade" 
                type="number" 
                value={age} 
                onChange={setAge}
            />
            <div className="flex justify-end mt-3">
                <Button color="blue"  className="mr-2" 
                    onClick={() => props.clientUpdated?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'salvar'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}