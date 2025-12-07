# 🛍️ Products API

> Una API REST moderna y escalable para gestionar productos de forma eficiente

Construida con **NestJS**, **Prisma ORM** y **SQLite**, esta API ofrece una solución completa y documentada para operaciones CRUD de productos con una arquitectura robusta y fácil de mantener.

---

## 🚀 Características

- ✅ **CRUD Completo** - Crear, leer, actualizar y eliminar productos
- 📚 **Documentación Swagger** - UI interactiva para probar endpoints
- 🗄️ **Base de Datos SQLite** - Persistencia de datos con Prisma ORM
- 🏗️ **Arquitectura Modular** - Código organizado y escalable
- 📝 **TypeScript Strict** - Tipado fuerte para mayor seguridad
- 🔄 **Hot Reload** - Desarrollo ágil con compilación en tiempo real

## 📋 Requisitos Previos

- **Node.js** v22.6.0 o superior
- **npm** v10.0.0 o superior

## 🔧 Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Configurar la base de datos**
```bash
npx prisma migrate dev --name init
```

3. **Iniciar el servidor**
```bash
npm run start:dev
```

Servidor disponible en: http://localhost:4000/api/

## 📚 Documentación de API

### Swagger UI
```
http://localhost:4000/api/
```

### GET /api/info
Obtiene información de la API

### Productos - CRUD
- **POST /api/products** - Crear producto
- **GET /api/products** - Obtener todos
- **GET /api/products/{id}** - Obtener por ID
- **PATCH /api/products/{id}** - Actualizar
- **DELETE /api/products/{id}** - Eliminar

## 📦 Scripts

```bash
npm run start:dev      # Desarrollo con hot reload
npm run build          # Compilar para producción
npm run start:prod     # Ejecutar en producción
npm run test           # Tests unitarios
npm run test:e2e       # Tests e2e
npm run format         # Formatear código
npm run lint           # Linting
```

## 🗄️ Modelo de Datos

```typescript
Product {
  id: number              // ID único
  name: string            // Nombre (único)
  descripcion: string?    // Descripción opcional
  price: number           // Precio
  image: string?          // URL de imagen
  createdAt: DateTime     // Fecha creación
  updatedAt: DateTime     // Fecha actualización
}
```

## 🔌 Variables de Entorno

```env
PORT=4000
DATABASE_URL="file:./dev.db"
```

## 📊 Tecnologías

| Tecnología | Versión |
|-----------|---------|
| NestJS | ^9.0.0 |
| Prisma | ^5.0.0 |
| SQLite | Prisma |
| Swagger | ^7.0.0 |
| TypeScript | ^5.0.0 |
| Jest | ^29.0.0 |

## 🚀 Deploy

### Vercel
1. Conectar repositorio
2. Configurar env vars
3. Deploy automático

### Heroku
```bash
heroku create <app-name>
git push heroku main
```

### Railway / Render
- Conectar Git
- Setear env vars
- Deploy automático

## 🐛 Troubleshooting

Puerto 4000 en uso:
```bash
lsof -i :4000
kill -9 <PID>
```

Reset BD:
```bash
npx prisma migrate reset
```

## 📝 Licencia

Laury Jaquez Actuana - 2025
