import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '@/core/Client';
import Button from '../components/Button';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import ClientRepository from '@/core/ClientReposotory';
import CollectionClient from '@/backend/db/CollectionClient';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const repo: ClientRepository = new CollectionClient
  
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAllClients, [])

  function getAllClients() {
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }
  
  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }
  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button 
                color="green" 
                className='mb-4'
                onClick={newClient}>Novo Cliente
              </Button>
            </div>
            <Table clients={clients} 
              selectedClient={selectedClient}
              deletedClient={deletedClient}></Table>
          </>
        ) : (
          <Form client={client} canceled={() => setVisible('table')}
            clientUpdated={saveClient}/>
        )}
      </Layout>
    </div>
  )
}
