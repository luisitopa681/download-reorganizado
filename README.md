# Download Reorganizado

Una aplicación Angular refactorizada siguiendo las mejores prácticas de arquitectura modular para la gestión de grabaciones históricas.

## 🏗️ Estructura del Proyecto

La aplicación sigue una estructura modular organizada de la siguiente manera:

```
src/
├── app/
│   ├── core/                      # Servicios y funcionalidades centrales
│   │   ├── guards/               # Guards de autenticación y autorización
│   │   ├── interceptors/         # Interceptores HTTP
│   │   ├── services/             # Servicios centralizados
│   │   └── core.module.ts        # Módulo core (importado solo en AppModule)
│   │
│   ├── shared/                   # Componentes y utilidades compartidas
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── loading/         # Componente de carga
│   │   │   └── modal/           # Servicio de modales
│   │   └── shared.module.ts      # Módulo compartido
│   │
│   ├── features/                 # Módulos de características (lazy loading)
│   │   ├── home/                # Página principal
│   │   ├── record-list/         # Lista de registros
│   │   ├── record-card-list/    # Tarjetas de registro
│   │   └── grabacion/           # Gestión de grabaciones
│   │
│   ├── layout/                   # Componentes de diseño
│   │   ├── header/              # Cabecera de la aplicación
│   │   ├── sidebar/             # Menú lateral
│   │   └── layout.module.ts     # Módulo de layout
│   │
│   ├── app-routing.module.ts     # Enrutamiento principal con lazy loading
│   ├── app.component.ts          # Componente principal
│   └── app.module.ts             # Módulo principal
│
├── assets/                       # Recursos estáticos
├── environments/                 # Configuraciones de entorno
├── config/                       # Configuraciones de AWS Amplify
├── styles/                       # Estilos globales organizados
│   ├── _variables.scss          # Variables SCSS
│   ├── _mixins.scss             # Mixins reutilizables
│   ├── _material-theme.scss     # Tema personalizado de Material
│   └── global.scss              # Estilos globales
│
├── index.html                    # HTML principal
├── main.ts                       # Punto de entrada principal
└── polyfills.ts                  # Polyfills para compatibilidad
```

## 🚀 Características Implementadas

### Arquitectura Modular
- **Core Module**: Servicios singleton y funcionalidades centrales
- **Shared Module**: Componentes y utilidades reutilizables
- **Feature Modules**: Módulos de características con lazy loading
- **Layout Module**: Componentes de diseño y navegación

### Lazy Loading
Todos los módulos de características se cargan de forma diferida:
- `/records` → RecordListModule
- `/record-cards` → RecordCardListModule  
- `/grabaciones` → GrabacionModule

### Autenticación y Seguridad
- Integración con AWS Amplify
- Guard de autenticación para rutas protegidas
- Interceptor HTTP para tokens JWT
- Servicio de gestión de tokens

### UI/UX
- Material Design implementado
- Tema personalizado con colores corporativos
- Componentes responsivos
- Loading states y feedback visual

## 🛠️ Tecnologías Utilizadas

- **Angular 15**: Framework principal
- **Angular Material**: Biblioteca de componentes UI
- **AWS Amplify**: Autenticación y backend
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador de estilos
- **RxJS**: Programación reactiva

## 📦 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test
```

## 🏛️ Principios de Arquitectura

### Separación de Responsabilidades
- **Core**: Servicios singleton y lógica de negocio central
- **Shared**: Componentes y utilidades reutilizables
- **Features**: Funcionalidades específicas encapsuladas
- **Layout**: Componentes de estructura y navegación

### Lazy Loading
- Mejora el rendimiento inicial de la aplicación
- Carga módulos bajo demanda
- Reduce el tamaño del bundle inicial

### Inyección de Dependencias
- Servicios registrados en los módulos apropiados
- Core Module importado solo una vez en AppModule
- Shared Module exportado para reutilización

## 📝 Comandos Útiles

```bash
# Generar nuevo componente en features
ng generate component features/nueva-feature

# Generar nuevo servicio en core
ng generate service core/services/nuevo-servicio

# Generar nuevo módulo con lazy loading
ng generate module features/nuevo-modulo --routing

# Analizar bundle size
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/download-reorganizado/stats.json
```

## 🔧 Configuración

### Environment Files
- `environment.ts`: Configuración de desarrollo
- `environment.prod.ts`: Configuración de producción

### AWS Amplify
Configurar las credenciales en `src/config/amplify-config.ts`:
```typescript
export const amplifyConfig = {
  aws_user_pools_web_client_id: 'your-client-id',
  oauth: {
    domain: 'your-domain',
    redirectSignIn: 'your-redirect-url',
    redirectSignOut: 'your-redirect-url'
  }
};
```

## 🎯 Próximos Pasos

- [ ] Implementar testing unitario e integración
- [ ] Optimizar bundle size (eliminar dependencias no utilizadas)
- [ ] Implementar Progressive Web App (PWA)
- [ ] Añadir internacionalización (i18n)
- [ ] Configurar CI/CD pipeline
- [ ] Documentación técnica detallada

## 📚 Estructura de Módulos

### Core Module
- `TokenService`: Gestión de tokens JWT
- `CoursesService`: Servicio de cursos/contenido
- `AuthGuard`: Protección de rutas
- `AuthInterceptor`: Interceptor de autenticación

### Shared Module
- `LoadingComponent`: Componente de carga
- `CustomModalService`: Servicio de modales
- Material Design modules
- Formularios reactivos

### Feature Modules
- **Home**: Página principal con navegación
- **RecordList**: Lista de registros con tabla
- **RecordCardList**: Vista de tarjetas
- **Grabacion**: Gestión de grabaciones con reproducción

---

*Esta aplicación ha sido refactorizada siguiendo las mejores prácticas de Angular para garantizar mantenibilidad, escalabilidad y rendimiento óptimo.*