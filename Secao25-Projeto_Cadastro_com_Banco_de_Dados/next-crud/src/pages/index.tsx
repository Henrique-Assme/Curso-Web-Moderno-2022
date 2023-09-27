import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import Form from '../components/Form';
import useClients from '@/hooks/useClients';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { 
    client, clients,
    selecteClient, deleteClient, 
    newClient, saveClient,
    visibleTable, showTable
  } = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visibleTable ? (
          <>
            <div className="flex justify-end">
              <Button 
                color="green" 
                className='mb-4'
                onClick={newClient}>Novo Cliente
              </Button>
            </div>
            <Table clients={clients} 
              selectedClient={selecteClient}
              deletedClient={deleteClient}></Table>
          </>
        ) : (
          <Form client={client} canceled={showTable}
            clientUpdated={saveClient}/>
        )}
      </Layout>
    </div>
  )
}
