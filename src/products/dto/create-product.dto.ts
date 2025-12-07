import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nombre del producto' })
  name: string;

  @ApiProperty({ description: 'Descripción del producto', required: false })
  descripcion?: string;

  @ApiProperty({ description: 'Precio del producto' })
  price: number;

  @ApiProperty({ description: 'URL de la imagen del producto', required: false })
  image?: string;
}
