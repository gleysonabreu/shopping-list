import z from 'zod';

export const QuantityTypeSchema = z.union([
  z.literal('liter', {
    errorMap: () => ({
      message: 'Selecione uma das opções: Litro, Kg ou Unidade ',
    }),
  }),
  z.literal('kilogram', {
    errorMap: () => ({
      message: 'Selecione uma das opções: Litro, Kg ou Unidade ',
    }),
  }),
  z.literal('unit', {
    errorMap: () => ({
      message: 'Selecione uma das opções: Litro, Kg ou Unidade ',
    }),
  }),
]);

export const ProductTypeSchema = z.union([
  z.literal('fruit', {
    errorMap: () => ({
      message:
        'Selecione uma das opções: Padaria, Bebida, Legume, Carne ou Fruta.',
    }),
  }),
  z.literal('drink', {
    errorMap: () => ({
      message:
        'Selecione uma das opções: Padaria, Bebida, Legume, Carne ou Fruta.',
    }),
  }),
  z.literal('meat', {
    errorMap: () => ({
      message:
        'Selecione uma das opções: Padaria, Bebida, Legume, Carne ou Fruta.',
    }),
  }),
  z.literal('vegetable', {
    errorMap: () => ({
      message:
        'Selecione uma das opções: Padaria, Bebida, Legume, Carne ou Fruta.',
    }),
  }),
  z.literal('bakery', {
    errorMap: () => ({
      message:
        'Selecione uma das opções: Padaria, Bebida, Legume, Carne ou Fruta.',
    }),
  }),
]);
