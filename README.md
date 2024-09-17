# DynamicForm

## Descripción

DynamicForm es un proyecto que permite crear y gestionar formularios dinámicos. El sistema está compuesto por un backend implementado en .NET Framework y un frontend desarrollado en Angular.

## Requisitos

- Docker
- .NET Framework
- Node.js y npm

## Configuración del Backend

1. **Compilar el Proyecto**

   Antes de levantar el servicio de base de datos, debes compilar el proyecto .NET Framework.

   ```bash
   # Navega al directorio del proyecto .NET
   cd path/to/your/dotnet/project

   # Compila el proyecto
   dotnet build
2. **Levantar servicio Docker**

    Ejecutar el siguiente comando:

    ```bash
    #Levantar servicio SQL Server y BACKFORM
    docker-compose up --build

3. **Ejecutar Script inicial BD**

    Una vez levantado el servicio SQL, ejecutar el archivo init-db.sql

4. **Levantar FRONT**

    Para levantar el front ejecutar los siguientes comandos:

    ```bash
    npm install
    npm run start

5. **Evidencias**

