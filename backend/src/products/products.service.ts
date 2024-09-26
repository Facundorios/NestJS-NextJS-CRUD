import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    try {
      return this.prismaService.product.create({
        data: createProductDto,
      });
    } catch (error) {
      console.error(error);
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

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
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
