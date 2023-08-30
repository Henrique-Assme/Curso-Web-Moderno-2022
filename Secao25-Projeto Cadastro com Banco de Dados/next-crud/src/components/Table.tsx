import Client from "@/core/Client"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
    
    const showActions = props.selectedClient || props.deletedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderClients() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-50'}`}
                >
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex">
                {props.selectedClient ? (
                    <button className={`
                        flex jusify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.selectedClient?.(client)}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.deletedClient ? (
                    <button className={`
                        flex jusify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `} onClick={() => props.deletedClient?.(client)}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderClients()}
            </tbody>
        </table>
    )
}