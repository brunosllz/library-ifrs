import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'
import { TextInput } from '../../../components/TextInput'
import { X } from 'phosphor-react'
import { publishedYearMask } from '../../../utils/publishedYearMask'
import { useEffect } from 'react'

const newBookFormSchemaValidation = z.object({
  name: z
    .string({ required_error: 'Informe o nome do livro' })
    .min(1, { message: 'Informe o nome do livro' }),
  publishingCompany: z
    .string({ required_error: 'Informe o nome da editora' })
    .min(1, { message: 'Informe o nome da editora' }),
  imageUrl: z
    .string({ required_error: 'Informe a URL da imagem' })
    .startsWith('https://www.', { message: 'Informe uma URL válida' })
    .min(1, { message: 'Informe a URL da imagem' }),
  countPage: z.string({
    required_error: 'Informe o número de páginas',
    invalid_type_error: 'Informe o número de páginas',
  }),
  publishedYear: z
    .string({ required_error: 'Infome o ano de publicação' })
    .min(4, 'Infome o ano de publicação')
    .regex(/^(1|2)\d{3}/, { message: 'Informe um ano válido' }),
  description: z.string().min(1, { message: 'Informe uma descrição do livro' }),
})

type newBookFormType = z.infer<typeof newBookFormSchemaValidation>

export function NewBookForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<newBookFormType>({
    resolver: zodResolver(newBookFormSchemaValidation),
  })

  console.log(errors)

  function handleNewBookForm(data: any) {
    console.log(data)
  }

  const publishedYearValue = watch('publishedYear')
  const countPage = watch('countPage')

  useEffect(() => {
    setValue('publishedYear', publishedYearMask(publishedYearValue))
    setValue('countPage', publishedYearMask(countPage))
  }, [setValue, publishedYearValue, countPage])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-gray-600 py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Close className="absolute top-10 right-10">
          <X size={24} weight="bold" />
        </Dialog.Close>
        <Dialog.Title className="text-2xl font-bold mb-3">
          Cadastrar livro
        </Dialog.Title>

        <form
          onSubmit={handleSubmit(handleNewBookForm)}
          className="flex flex-col gap-3"
        >
          <label htmlFor="name">
            Nome do livro
            <TextInput.Root className="mt-1">
              <TextInput.Input id="name" {...register('name')} />
            </TextInput.Root>
            <TextInput.ErrorMessage errorMessage={errors.name?.message} />
          </label>

          <label htmlFor="publishingCompany">
            Editora
            <TextInput.Root className="mt-1">
              <TextInput.Input
                id="publishingCompany"
                {...register('publishingCompany')}
              />
              <TextInput.ErrorMessage
                errorMessage={errors.publishingCompany?.message}
              />
            </TextInput.Root>
          </label>

          <label htmlFor="imageUrl">
            Imagem de capa
            <TextInput.Root className="mt-1">
              <TextInput.Input
                id="imageUrl"
                placeholder="https://www.image.com.br"
                {...register('imageUrl')}
              />
              <TextInput.ErrorMessage errorMessage={errors.imageUrl?.message} />
            </TextInput.Root>
          </label>

          <div className="flex gap-2">
            <label htmlFor="countPage" className="w-full">
              Número de páginas
              <TextInput.Root className="mt-1">
                <TextInput.Input
                  id="countPage"
                  placeholder="000"
                  {...register('countPage')}
                />
                <TextInput.ErrorMessage
                  errorMessage={errors.countPage?.message}
                />
              </TextInput.Root>
            </label>

            <label htmlFor="publishedYear" className="w-full">
              Ano de publicação
              <TextInput.Root className="mt-1">
                <TextInput.Input
                  id="publishedYear"
                  placeholder="2000"
                  {...register('publishedYear')}
                />
                <TextInput.ErrorMessage
                  errorMessage={errors.publishedYear?.message}
                />
              </TextInput.Root>
            </label>
          </div>

          <label htmlFor="description" className="flex flex-col gap-2">
            decrição do livro
            <textarea
              className="mt-1 resize-none h-24 bg-gray-700 rounded outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
              {...register('description')}
            ></textarea>
          </label>

          <Button.Root className="mt-3">
            <Button.Title>Adicionar</Button.Title>
          </Button.Root>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
