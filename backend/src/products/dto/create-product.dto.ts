//Opcion por defecto que trae Nest: usar clases para el manejo de datos
//export class CreateProductDto {}

//Opcion con prisma:
import { Product } from '@prisma/client';

export type CreateProductDto = Omit<Product, 'id' | ' createdAt' | 'updatedAt'>;
