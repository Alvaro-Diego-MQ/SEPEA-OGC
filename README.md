
SEPEA - Sistema de Evaluación de Programas de Estudio para la Acreditación
![alt text](https://img.shields.io/badge/License-MIT-blue.svg)
![alt text](https://img.shields.io/badge/tech-Next.js-black?logo=next.js)
![alt text](https://img.shields.io/badge/styling-TailwindCSS-38B2AC?logo=tailwind-css)
SEPEA es una aplicación web moderna diseñada para gestionar y agilizar el proceso de evaluación y acreditación de programas de estudio en instituciones educativas. La plataforma facilita la recolección de datos, el seguimiento del progreso y la generación de reportes para los comités de acreditación.
✨ Características Principales
📋 Gestión de Evaluaciones: Crea, asigna y da seguimiento a los procesos de evaluación de manera centralizada.
👥 Roles de Usuario: Sistema de permisos diferenciados para administradores, evaluadores y coordinadores de programa.
📊 Generación de Reportes: Exporta informes detallados y resúmenes ejecutivos sobre el estado de la acreditación.
🎨 Interfaz Moderna y Responsiva: Desarrollada con las últimas tecnologías para una experiencia de usuario fluida en cualquier dispositivo.
🌙 Tema Claro y Oscuro: Soporte nativo para adaptarse a las preferencias visuales del usuario.
🛠️ Stack Tecnológico
Este proyecto está construido con un stack de tecnologías moderno y escalable:
Framework: Next.js 15+ (App Router)
Lenguaje: TypeScript
Librería UI: React
Estilos: Tailwind CSS v4
Componentes: Shadcn/ui y Radix UI
Gestión de Formularios: React Hook Form
Validación de Esquemas: Zod
🚀 Puesta en Marcha (Getting Started)
Sigue estos pasos para ejecutar una copia local del proyecto.
Pre-requisitos
Asegúrate de tener instalado lo siguiente:
Node.js (v18.x o superior)
npm, yarn, o pnpm
Instalación
Clona el repositorio:
code
Bash
git clone https://github.com/tu-usuario/sepea.git
Navega al directorio del proyecto:
code
Bash
cd sepea
Instala las dependencias:
code
Bash
npm install
# o
yarn install
Configura las variables de entorno:
Crea una copia del archivo .env.example y renómbrala a .env.local.
code
Bash
cp .env.example .env.local
Luego, rellena las variables necesarias en el archivo .env.local (ej. claves de API, URL de la base de datos, etc.).
Inicia el servidor de desarrollo:
code
Bash
npm run dev
Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.
