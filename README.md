# Frontend Sistema de ADN's
Este proyecto es un sistema que te permite verificar si la secuencia de Adn 
tiene mutación o no. Revisar los últimos Adn's consultados y por último tener
las estadísticas de los Adn en la base de datos
## 🚀 Tabla de Contenidos
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Decisiones de Arquitectura](#decisiones-de-arquitectura)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso de la API](#uso-de-la-api)

---

## 🛠 Tecnologías Utilizadas

### Backend
- **Angular*: Framework web.
- **Bootstrap**: Libreria para manejar los estilos en las vistas

## 🏛 Decisiones de Arquitectura

Para este proyecto se optó por seguir los estandares de Angular:

1.  **Componentes Angular** Modulos de código fuente que tienen su HTML, CSS Y TYPESCRIPT
2.  **Servicios:** Clases encargadas de manejar la comunicación del sistema con servicios externos como consumir una API.
3.  **Capa de Modelos:** Encargada de representar la información recibida y poder ser manejada de una manera más sencilla y flexible para ser mostrada a los usuarios.
- La justificación de la organización de carpetas:
    - src/app/compartidos/componentes: esta carpeta contiene primeramente aquellos recursos que pueden ser utilizados por todo el sistema, es por eso que la carpeta componentes son aquellos modulos que existe la posibilidad de ser reutilizados en vistas más grandes.
    - src/app/vistas: la carpeta vistas engloba aquellos componentes que se consideran como la plantilla general, como el paisaje completo donde serán utilizados componentes hijos.
    - src/ap/core: la carpeta core esta pensaba como todo aquello que es crítico para el sistema, ahí se encuentran las clases modelo y los servicios, ya que sin ellos o no existe funcionamiento correcto del sistema o el trabajo es reducido en su calidad.

---

## 💻 Instalación y Configuración

### Requisitos Previos
- NodeJs
- Angular CLI

### Configuración del Frontend
1. Entrar a la carpeta del cliente: `cd Adn-Frontend`.
2. Instalar dependencias: `npm install`.
3. Configurar credenciales en el archivo `environment.development.ts`
3. Iniciar la aplicación: `ng serve`.
4. Abrir en el navegador: `http://localhost:4200`.

---
