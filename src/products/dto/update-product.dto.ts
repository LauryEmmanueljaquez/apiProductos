import { ApiPropertyOptional } from '@nestjs/swagger';
import type { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto implements Partial<CreateProductDto> {
  @ApiPropertyOptional({ description: 'Nombre del producto' })
  name?: string;

  @ApiPropertyOptional({ description: 'Descripción del producto' })
  descripcion?: string;

  @ApiPropertyOptional({ description: 'Precio del producto' })
  price?: number;

  @ApiPropertyOptional({ description: 'URL de la imagen del producto' })
  image?: string;
}
