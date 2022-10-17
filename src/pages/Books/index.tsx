import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { NewBookForm } from './components/NewBookForm';

import { Plus, MagnifyingGlass, Trash } from 'phosphor-react'

export function Books() {
  return (
    <main className="flex flex-col">
      <header className="bg-gray-700 py-4 px-6 flex justify-between items-center w-full">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Root>
              <Button.Icon>
                <Plus weight='bold' />
              </Button.Icon>
              <Button.Title>
                Adicionar Livro
              </Button.Title>
            </Button.Root>
          </Dialog.Trigger>

          <NewBookForm />
        </Dialog.Root>

        <div className='w-80'>
          <TextInput.Root className='border border-gray-400'>
            <TextInput.Input
              placeholder='Procure pelo nome do livro'
            />
            <TextInput.Icon>
              <MagnifyingGlass />
            </TextInput.Icon>
          </TextInput.Root>
        </div>
      </header>

      <section className='px-6 mt-6'>
        <div className='bg-gray-700 p-6 rounded-md'>
          <h1 className='text-2xl font-bold'>
            Gerenciar Livros
          </h1>

          <table className='w-full border-collapse min-w-[600px] mt-6 text-sm'>
            <thead className='table w-full table-fixed'>
              <tr className='table w-full table-fixed text-left'>
                <th className='p-4 bg-gray-500 rounded-tl-md'>
                  Código
                </th>
                <th className='p-4 bg-gray-500  w-1/2'>
                  Nome
                </th>
                <th className='p-4 bg-gray-500 text-center'>
                  Data de criação
                </th>
                <th className='p-4 text-center bg-gray-500 rounded-tr-md'>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className='table w-full table-fixed'>
              <tr className='table w-full table-fixed'>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600'>
                  h12343T
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 w-1/2'>
                  Do mil ao milhão: Sem cortar o cafezinho
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 text-center'>
                  16/10/22
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 '>
                  <div className='flex items-center justify-center gap-2'>
                    <Button.Root>
                      <Button.Title>
                        Detalhes
                      </Button.Title>
                    </Button.Root>

                    <Button.Root>
                      <Button.Icon>
                        <Trash />
                      </Button.Icon>
                    </Button.Root>
                  </div>
                </td>
              </tr>
              <tr className='table w-full table-fixed'>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600'>
                  h12343T
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 w-1/2'>
                  Do mil ao milhão: Sem cortar o cafezinho
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 text-center'>
                  16/10/22
                </td>
                <td className='p-3 border-t-4 border-gray-700 bg-gray-600 '>
                  <div className='flex items-center justify-center gap-2'>
                    <Button.Root>
                      <Button.Title>
                        Detalhes
                      </Button.Title>
                    </Button.Root>

                    <Button.Root>
                      <Button.Icon>
                        <Trash />
                      </Button.Icon>
                    </Button.Root>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
