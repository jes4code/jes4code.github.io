import Nefli from "../assets/img-projects/nefli.png";
import EvaluIA from "../assets/img-projects/evaluia.png";
import Crawler from "../assets/img-projects/crawler.png"


export const proyectos = [
 {
    titulo: "Ñefli",
    descripcion:
      "Plataforma web tipo streaming con arquitectura de microservicios. Permite gestionar películas, series, episodios, actores, géneros y perfiles de usuario. Stack: Java - Spring Boot - Maven - PostgreSQL - Nginx - Docker.",
    imagen: Nefli.src,
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Nginx", "Docker", "Docker Compose"],
    codigo: "https://github.com/jes4code/netflix-project",
    categoria: "fullstack",
  },
  {
    titulo: "EvaluIA",
    descripcion:
      "Aplicación web para evaluación automática de exámenes asistida por LLM, con generación de feedback a partir de rúbricas. Integra un flujo completo desde la subida de entregas (PDF/archivos) y la definición de criterios, hasta la evaluación, el reporte de resultados y la consulta posterior. Stack: Python - FastAPI - React - MongoDB - Docker - Docker Compose - Google Gemini API.",
    imagen: EvaluIA.src, 
    tecnologias: ["Python", "FastAPI", "React", "MongoDB", "Docker", "Docker Compose", "Google Gemini API"],
    codigo: "TODO: pega aquí la URL de tu repo de EvaluIA",
    categoria: "fullstack",
  },
  {
    titulo: "RIBW Crawler",
    descripcion: "Crawler web en Java que recopila información de múltiples URLs y genera un diccionario serializado de ocurrencias de términos. Incluye módulo interactivo de búsqueda y script automatizado para compilar/ejecutar/limpiar. Proyecto universitario de Recuperación de Información y Búsqueda en la Web. Stack: Java 25 + Serialización de objetos.",
    imagen: Crawler.src, 
    tecnologias: ["Java", "JDK 25", "Serialización", "CLI"],
    codigo: "https://github.com/jes4code/RIBW-Crawler",
    categoria: "backend",
  },

];
