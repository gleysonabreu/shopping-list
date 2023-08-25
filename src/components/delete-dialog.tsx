import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

type DeleteDialog = {
  title: string;
  description: string;
  children: ReactNode;
  handleDelete: () => void;
}

export function DeleteDialog({ title, description, children, handleDelete }: DeleteDialog) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-gray-400 p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-gray-100 m-0 text-lg font-medium">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="text-gray-200 mt-4 mb-5 text-sm leading-normal">
            {description}
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <button className="text-gray-200 text-sm bg-gray-600 hover:bg-gray-500 inline-flex items-center justify-center rounded-lg p-3 font-medium outline-none">
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button onClick={handleDelete} className='text-white text-sm bg-red-600 hover:bg-red-500 inline-flex items-center justify-center rounded-lg p-3 font-medium outline-none'>
                Remover
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
