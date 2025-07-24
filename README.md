# WOG - The World of Grandpa

## Descripción del Proyecto

Descripción del Proyecto
WOG - The World of Grandpa es una aplicación web de una sola página (SPA) con un profundo enfoque social. Nuestra misión es construir una comunidad que conecte a nuestros adultos mayores (abuelos) con voluntarios dedicados, brindándoles compañía, apoyo y amor. Buscamos fomentar la inclusión, mejorar el bienestar emocional y salvaguardar la dignidad de nuestros mayores a través de redes solidarias de apoyo humano.

La aplicación permite a los "abuelos" solicitar asistencia o compañía para diversas actividades, y a los "voluntarios" ofrecer su tiempo y ayuda. Un sistema de autenticación robusto con diferentes roles de usuario garantiza que cada miembro de la comunidad tenga acceso a las funcionalidades pertinentes.

## Características Principales

WOG ofrece un conjunto de funcionalidades diseñadas para facilitar la interacción y el apoyo mutuo:

- Registro de Usuarios: Permite a nuevos "abuelos" y "voluntarios" unirse a la plataforma.

- Inicio de Sesión Seguro: Autenticación de usuarios con cifrado de contraseñas para proteger la información personal.

- Perfiles de Usuario:

    - Abuelos: Pueden gestionar su perfil y crear solicitudes de citas.

    - Voluntarios: Gestionan su perfil y pueden visualizar y confirmar citas disponibles.

    - Administradores: Tienen control total sobre la gestión de usuarios y citas.

- Gestión de Citas:

    - Los abuelos pueden crear nuevas solicitudes de citas detallando fecha, hora, lugar y motivo.

    - Los voluntarios pueden visualizar un listado de citas pendientes y confirmar su participación en aquellas que deseen atender.

- Navegación Intuitiva: Interfaz de usuario sencilla que facilita la interacción con la aplicación.

- Rutas Protegidas: Acceso restringido a ciertas secciones de la aplicación basado en el estado de autenticación y el rol del usuario.

## Tecnologías Utilizadas

Este proyecto está construido con una combinación de tecnologías modernas para una experiencia de usuario fluida y un desarrollo eficiente:

- HTML5, CSS3, JavaScript (ES6+): Los pilares para la estructura, estilo y lógica del frontend.
- Vite: Un bundler de próxima generación para un desarrollo web extremadamente rápido y optimizado para producción.
- Crypto-JS: Librería utilizada para el cifrado y descifrado de contraseñas, garantizando la seguridad de las credenciales de usuario.
- Enrutamiento Vanilla JS: Un sistema de enrutamiento personalizado implementado en src/routes/router.js para gestionar las vistas de la SPA sin recargas de página.
- Simulación de Base de Datos (JSON Local): Para propósitos de demostración y desarrollo, la aplicación utiliza un archivo db.json para simular el almacenamiento de usuarios y citas. Las interacciones con este "pseudo-backend" se realizan directamente desde el frontend.

## Estructura del Proyecto
```bash

.
├── database/                 # Archivos de simulación de base de datos
│   ├── db.json               # Datos de usuarios y citas
│   └── pasword.txt           # (Considerar eliminar o proteger si se usa para algo sensible)
├── public/                   # Archivos estáticos y componentes HTML reutilizables
│   ├── footer.html           # Pie de página compartido
│   ├── header.html           # Cabecera compartida
│   ├── include-html.js       # Script para la inclusión dinámica de HTML
│   └── styles.css            # Estilos globales de la aplicación
├── src/                      # Código fuente principal de la aplicación
│   ├── js/                   # Scripts JavaScript generales
│   │   ├── auth.js           # Lógica de autenticación y manejo de roles
│   │   └── main.js           # Punto de entrada principal de la aplicación
│   ├── routes/               # Configuración del enrutamiento
│   │   └── router.js         # Lógica del enrutador de la SPA
│   └── views/                # Componentes de vista de la aplicación
│       ├── about.js          # Vista "Acerca de"
│       ├── accessDenied.js   # Vista de acceso denegado
│       ├── home.js           # Vista de la página de inicio
│       ├── login.js          # Vista de inicio de sesión
│       ├── loginScript.js    # Lógica asociada a la vista de login
│       ├── notFound.js       # Vista "Página no encontrada"
│       ├── registerScript.js # Lógica asociada a la vista de registro
│       ├── userRegister.js   # Vista de registro de usuario
│       ├── abuelos/          # Vistas específicas para el rol "abuelo"
│       │   ├── createDate/   # Creación de citas
│       │   │   ├── createDate.js
│       │   │   └── createDateScript.js
│       │   └── profile/      # Perfil del abuelo
│       │       ├── profile.js
│       │       └── profileScript.js
│       ├── dates/            # Vistas relacionadas con la gestión de citas
│       │   ├── dates.js
│       │   └── datesScript.js
│       └── voluntarios/      # Vistas específicas para el rol "voluntario"
│           └── profile/      # Perfil del voluntario
│               ├── profile.js
│               └── profileScript.js
├── index.html                # Archivo HTML principal de la SPA
├── package.json              # Metadatos del proyecto y dependencias
├── package-lock.json         # Bloqueo de dependencias
└── README.md                 # Este archivo

```

## Instalación y Ejecución

Para poner en marcha el proyecto en tu entorno local, sigue los siguientes pasos:

**Prerequisitos**

Asegúrate de tener instalado Node.js (versión 14 o superior) y npm (gestor de paquetes de Node.js).

## Pasos de Instalación
1. Clona el repositorio:

```bash

git clone https://github.com/AnSan29/retoStartups-appAbuelos.git 
cd retoStartups-appAbuelos

```
2. Clona el repositorio:

```bash
npm install
```

## Ejecución en Modo Desarrollo

Para iniciar la aplicación en modo desarrollo con Vite:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado (normalmente en http://localhost:5173). Vite ofrece Hot Module Replacement (HMR), lo que significa que los cambios que realices en el código se reflejarán instantáneamente sin necesidad de recargar la página.


## Autenticación y Gestión de Usuarios

El sistema de autenticación de WOG maneja los siguientes roles: admin, abuelo y voluntario.

## Proceso de Autenticación

1. Registro: Los usuarios pueden registrarse como "abuelo" o "voluntario". Las contraseñas se cifran utilizando Crypto-JS con algoritmo AES (hashPassword en src/js/auth.js) antes de ser almacenadas en el archivo db.json.

1. Inicio de Sesión:
    - El usuario introduce su nombre de usuario y contraseña.
    - La contraseña ingresada se compara con la contraseña almacenada en db.json después de ser descifrada (decryptPassword en src/js/auth.js).
    - Si las credenciales son válidas, se genera un token (en este caso, un objeto JSON que contiene los datos del usuario, incluyendo el rol) que se almacena en el localStorage del navegador.

1. Manejo de Roles y Rutas Protegidas:
    - La función isAutenticated() verifica la presencia del token en localStorage.
    - getUserRole() extrae el rol del usuario del token almacenado.
    - El enrutador (src/routes/router.js) utiliza las funciones validateGuardedPath() y la información de los roles para restringir el acceso a ciertas vistas. Si un usuario intenta acceder a una ruta protegida sin autenticación, es redirigido a la página de login. Si está autenticado pero no tiene el rol adecuado, se muestra la vista AccessDenied.

1. Cierre de Sesión: Elimina el token del localStorage y actualiza la interfaz de usuario.


**Nota de Seguridad:** Para un entorno de producción real, la gestión de usuarios y la base de datos deberían estar respaldadas por un servidor backend real que maneje el almacenamiento seguro de contraseñas (usando bcrypt u otros algoritmos de hashing seguros con salting) y la gestión de sesiones/tokens de forma más robusta. El uso de db.json y el manejo directo de contraseñas en el frontend son solo para fines de desarrollo y demostración en esta SPA. El archivo database/pasword.txt podría contener claves sensibles; considera su eliminación o protección si no es estrictamente necesario.

## Componentes Compartidos

La aplicación utiliza un sistema de inclusión de HTML para reutilizar elementos como la cabecera y el pie de página, lo que facilita la consistencia visual y el mantenimiento del código:

- public/include-html.js: Este script busca elementos en index.html que tengan el atributo data-include. Por ejemplo:

```HTML
<div data-include="/public/header.html"></div>
```

Al cargar la página, el script realiza una petición fetch a la URL especificada en data-include y reemplaza el elemento div con el contenido HTML recuperado, asegurando una estructura consistente en toda la SPA sin duplicación de código.


## Contacto
Si tienes preguntas o sugerencias sobre WOG, no dudes en contactar al equipo de desarrollo.