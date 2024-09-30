import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { Prisma } from '@prisma/client';
@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Ya existe un producto con el nombre ${createProductDto.name}`,
          );
        }
      }

      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });
    if (!product) {
      throw new NotFoundException(`No existe el producto`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prismaService.product.update({
      where: { id: id },
      data: updateProductDto,
    });

    if (!product) throw new NotFoundException(`No existe el producto`);

    return product;
  }

  async remove(id: number) {
    const product = await this.prismaService.product.delete({
      where: {
        id: id,
      },
    });

    if (!product) throw new NotFoundException(`No existe el producto`);

    return 'Producto eliminado';
  }
}
