
# 🚀 Proyecto Final - Colección de Videojuegos (Full-Stack)

Este sistema permite gestionar un catálogo personal de videojuegos, incluyendo títulos, plataformas, géneros, horas jugadas y estado de progreso.

---

## 📦 Tecnologías Utilizadas

| Servicio     | Tecnología           | Puerto | Descripción                     |
|--------------|----------------------|--------|---------------------------------|
| Frontend     | React 18             | 3000   | Interfaz de usuario             |
| Backend      | Express + Sequelize  | 3001   | API REST                        |
| Base de Datos| PostgreSQL           | 5432   | Almacenamiento de los datos     |
| Admin DB     | pgAdmin (opcional)   | 5050   | Interfaz para visualizar la BD  |

---

## 🧪 Requisitos Previos

- Node.js instalado
- PostgreSQL instalado
- Editor de texto (VS Code recomendado)
- pgAdmin (opcional para visualización)

---

## ⚙️ Instalación y Ejecución

### 🔹 1. Clonar el Repositorio
```
git clone https://github.com/ezkiel18/GrupoProgramacion3.git
cd GrupoProgramacion3
```

### 🔹 2. Configurar la Base de Datos

1. Crear la base de datos en PostgreSQL:

```sql
CREATE DATABASE videojuegos_db;
```

2. Verificar o ajustar las credenciales en `backend/config/config.js`

---

### 🔹 3. Backend

```
cd backend
npm install
node server.js
```

✅ Esto creará automáticamente la tabla `Juegos` (usa `sequelize.sync({ force: true })`)

---

### 🔹 4. Frontend

```
cd frontend
npm install
npm start
```

Abrir navegador en: `http://localhost:3000`

---

## 🖼️ Funcionalidades del Sistema

- Agregar videojuegos con:
  - Título
  - Plataforma
  - Género
  - Horas jugadas
  - Estado (Pendiente, Jugando, Completado)
- Editar horas jugadas
- Cambiar estado del juego
- Eliminar juegos

---

## 🔗 URLs Útiles

| Componente    | URL                             |
|---------------|----------------------------------|
| Frontend      | http://localhost:3000           |
| Backend API   | http://localhost:3001/api/juegos|
| pgAdmin (opcional) | http://localhost:5050     |

---

## 👤 Autor

> Desarrolladores por **Juan Blas Natalini,Franco Agustin Muñoz Cartagena,Ezequiel Lionel Barrionuevo,Emiliano Padin**  
> Proyecto para la materia **Programación 3 - TUP**

---

## ✅ Listo para corrección

Este sistema fue configurado para crear la base de datos automáticamente al correr el backend. No requiere migraciones manuales ni Docker.
¡Sistema completo y listo para desarrollo! 🚀