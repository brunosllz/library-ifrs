import { useForm } from 'react-hook-form'
import { useEditCategory } from '../../../hooks/useBooksData'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'
import { TextInput } from '../../../components/TextInput'

import { X } from 'phosphor-react'

interface CategoryEdit {
  id: string
  name: string
  createdAt: Date
}

interface EditCategoryFormProps {
  category: CategoryEdit
}

const editCategoryFormSchemaValidation = z.object({
  name: z
    .string({ required_error: 'Informe o nome da categoria' })
    .min(1, { message: 'Informe o nome da categoria' }),
})

type editCategoryFormType = z.infer<typeof editCategoryFormSchemaValidation>

export function EditCategoryForm({ category }: EditCategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<editCategoryFormType>({
    resolver: zodResolver(editCategoryFormSchemaValidation),
  })

  const { mutate: editCategory, isLoading } = useEditCategory()

  function handleNewBookForm(data: editCategoryFormType) {
    const editedCategory = Object.assign(data, {
      createdAt: category.createdAt,
      updatedAt: new Date(),
    })

    editCategory({ categoryId: category.id, editedCategory })
    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-gray-600 py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Close className="absolute top-10 right-10">
          <X size={24} weight="bold" />
        </Dialog.Close>
        <Dialog.Title className="text-2xl font-bold mb-3">
          Editar categoria
        </Dialog.Title>

        <form
          onSubmit={handleSubmit(handleNewBookForm)}
          className="flex flex-col gap-3"
        >
          <label htmlFor="name">
            Nome da categoria
            <TextInput.Root className="mt-2">
              <TextInput.Input
                id="name"
                defaultValue={category.name}
                placeholder="Business & Economics"
                error={!!errors.name}
                {...register('name')}
              />
            </TextInput.Root>
            <TextInput.ErrorMessage errorMessage={errors.name?.message} />
          </label>

          <Button.Root disabled={isLoading} className="mt-3">
            <Button.Title>Editar</Button.Title>
          </Button.Root>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
