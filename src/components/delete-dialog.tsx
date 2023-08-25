import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from './button';

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
              <Button color='gray' size='md'>
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button onClick={handleDelete} color='red' size='md'>
                Remover
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
