// import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
// export class UpdateProductDto {}

export type UpdateProductDto = Partial<CreateProductDto>;
