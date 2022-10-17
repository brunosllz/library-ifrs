import { useForm } from 'react-hook-form'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'
import { TextInput } from '../../../components/TextInput'

export function NewBookForm() {
  const { register, handleSubmit } = useForm()

  function handleNewBookForm(data: any) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Close>X</Dialog.Close>
        <Dialog.Title>Cadastrar livro</Dialog.Title>

        <form
          onSubmit={handleSubmit(handleNewBookForm)}
          className="flex flex-col gap-2"
        >
          <label htmlFor="codeBook">
            Código do livro
            <TextInput.Root>
              <TextInput.Input id="codeBook" {...register('codeBook')} />
            </TextInput.Root>
          </label>

          <label htmlFor="name">
            Nome do livro
            <TextInput.Root>
              <TextInput.Input id="name" {...register('name')} />
            </TextInput.Root>
          </label>

          <label htmlFor="imageUrl">
            Image da capa
            <TextInput.Root>
              <TextInput.Input id="imageUrl" {...register('imageUrl')} />
            </TextInput.Root>
          </label>

          <label htmlFor="countPage">
            Numéro de páginas
            <TextInput.Root>
              <TextInput.Input id="countPage" {...register('countPage')} />
            </TextInput.Root>
          </label>

          <label htmlFor="description">
            decrição do livro
            <TextInput.Root>
              <TextInput.Input id="description" {...register('description')} />
            </TextInput.Root>
          </label>

          <Button.Root>
            <Button.Title>Adicionar</Button.Title>
          </Button.Root>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
