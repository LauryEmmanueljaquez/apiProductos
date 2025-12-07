import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import type { CreateProductDto } from './dto/create-product.dto';
import type { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear producto', description: 'Crea un nuevo producto en la base de datos' })
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar productos', description: 'Obtiene todos los productos' })
  @ApiResponse({ status: 200, description: 'Lista de productos' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener producto', description: 'Obtiene un producto por su ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto encontrado' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar producto', description: 'Actualiza un producto existente' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar producto', description: 'Elimina un producto de la base de datos' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del producto' })
  @ApiResponse({ status: 200, description: 'Producto eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}