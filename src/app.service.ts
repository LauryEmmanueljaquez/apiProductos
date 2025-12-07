import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
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
    };
  }
}
