import * as Dialog from '@radix-ui/react-dialog';

export function NewBookForm() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Close>X</Dialog.Close>
        <Dialog.Title>Content title</Dialog.Title>
        <h1>Content Text</h1>
      </Dialog.Content>
    </Dialog.Portal>
  )
}