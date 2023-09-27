import CollectionClient from "@/backend/db/CollectionClient"
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientReposotory"
import { useEffect, useState } from "react"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepository = new CollectionClient

    const { visibleTable, showForm, showTable } = useTableOrForm()
    
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAllClients, [])

    function getAllClients() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selecteClient(client: Client) {
        setClient(client)
        showForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAllClients()
    }
    
    function newClient() {
        setClient(Client.empty())
        showForm()
    }
    async function saveClient(client: Client) {
        await repo.save(client)
        getAllClients()
    }

    return {
        client,
        clients,
        visibleTable,
        showTable,
        selecteClient,
        deleteClient,
        newClient,
        saveClient
    }
}