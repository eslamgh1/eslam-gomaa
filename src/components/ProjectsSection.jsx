import { ExternalLink, Github ,ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description: "1-Built with React 18. 2-Styled with Tailwind CSS. 3-Utilized React Router for seamless navigation and routing. 4-Integrated React Query for efficient data fetching and state management. 5-Implemented Context API for managing global state, such as authentication and cart data. 6-Added offline detection to ensure a smooth experience.",
        image: "/projects/freshcart.png",
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://freshcart-lovat.vercel.app/",
        gitHubUrl: "https://github.com/eslamgh1/Freshcart",
    },
    {
        id: 2,
        title: "Note App",  
        description: "Modern Notes App – Built with React 19 & Tailwind CSS. This project showcases my ability to integrate modern frontend tools for a seamless user experience. Create, edit, and delete notes with a clean UI-Persistent state using Zustand for lightweight state management",
        image: "/projects/noteapp.png",
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://note-app-react-2025.vercel.app/",
        gitHubUrl: "https://github.com/eslamgh1/Note-App-React-2025",
    },
    {
        id: 3,
        title: "Project 1",
        description: "This is project using vanilla JavaScript to create a Bookmark Manager, This project is showcasing the ability to build functional applications from scratch- local Storage to persist bookmark data across sessions- dynamic table to display bookmarks with options to visit or delete them. using SweetAlert2",
        image: "/projects/bookmark.png",
        tags: ["HTML", "JavaScript", "CSS"],
        demoUrl: "https://eslamgh1.github.io/JS-Task-3/",
        gitHubUrl: "https://github.com/eslamgh1/JS-Task-3",
    }
]



export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            {<div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured<span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-forground mb-12 max-w-xl mx-auto">
                    Creating responsive, highperformance websites that drive engagement and business growth
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card p-6 rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-small border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-forground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank" 
                                    className="text-forground/80 transition colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>

                                    <a 
                                    href={project.gitHubUrl} 
                                    target="_blank" 
                                    className="text-forground/80 transition colors duration-300">
                                    <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center text-center mt-12 ">
 
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/"
                        target="_blank"
                    >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
     
                </div>

            </div>}
        </section>
    );
};

//2 hour :5 mins