
import Nefli from "../assets/img-projects/nefli.png";
import EvaluIA from "../assets/img-projects/evaluia.png";
import Crawler from "../assets/img-projects/crawler.png"

export const proyectos = [
    {
    titulo: "Ñefli",
    imagen: Nefli.src,
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Nginx", "Docker", "Docker Compose"],
    codigo: "https://github.com/jes4code/netflix-project",
    categoria: "fullstack",
  },
  {
    titulo: "EvaluIA",
    imagen: EvaluIA.src, 
    tecnologias: ["Python", "FastAPI", "React", "MongoDB", "Docker", "Docker Compose", "Google Gemini API"],
    codigo: "https://github.com/jes4code/EvaluIA-Project",
    categoria: "fullstack",
  },
  {
    titulo: "RIBW Crawler",
    imagen: Crawler.src,
    tecnologias: ["Java", "JDK 25", "Serialización", "CLI"],
    codigo: "https://github.com/jes4code/RIBW-crawler",
    categoria: "backend",
  },

];
