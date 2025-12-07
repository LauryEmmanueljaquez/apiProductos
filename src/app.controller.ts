import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('API Info')
@Controller('info')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Información de la API',
    description: 'Obtiene la descripción, versión y listado de endpoints disponibles en la API'
  })
  @ApiResponse({
    status: 200,
    description: 'Información completa de la API de Productos',
    schema: {
      example: {
        title: 'Products API',
        description: 'API para gestionar productos',
        version: '1.0',
        endpoints: {
          products: 'GET /api/products - Obtener todos los productos',
          createProduct: 'POST /api/products - Crear un nuevo producto',
          getProduct: 'GET /api/products/:id - Obtener un producto por ID',
          updateProduct: 'PATCH /api/products/:id - Actualizar un producto',
          deleteProduct: 'DELETE /api/products/:id - Eliminar un producto',
          documentation: 'GET /api/ - Ver documentación Swagger'
        },
        message: '¡Bienvenido a la API de Productos!'
      }
    }
  })
  getHello() {
    return this.appService.getHello();
  }
}
