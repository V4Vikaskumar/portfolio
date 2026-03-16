import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A full‑stack real-time chat application with Jwt authentication, instant messaging, online/offline status, last seen tracking, and WebSocket-based communication.",
    tech: "React.js • Node.js • Express • PostgreSql • Socket.io",
    image: "https://res.cloudinary.com/dshedjgx8/image/upload/v1773650815/Capture_mxxxqx.png",
    github: "https://github.com/V4Vikaskumar/chat-App/tree/master",
    live: "https://chat-app-frontend-2-c9d5.onrender.com",
  },
  {
    title: "Draw-Link (Real time collaborative whiteboard)",
    description:
      "A collaborative whiteboard where multiple users can draw shapes and sketches together on a shared canvas in real time.",
    tech: "React.js • Canvas • Node.js • Express • MongoDb • Socket.io • WebSockets",
    image: "https://res.cloudinary.com/dshedjgx8/image/upload/v1773650814/draw-link_dxc1e2.png",
    github: "https://github.com/V4Vikaskumar/draw-link/tree/main",
    live: "https://draw-link-fro.onrender.com",
  },
  {
    title: "Live Code Editor",
    description:
      "A browser-based live code editor similar to CodePen where users can write HTML, CSS, and JavaScript and instantly see the preview.",
    tech: "Html5 • Css  • JavaScript • Live Preview",
    image: "https://res.cloudinary.com/dshedjgx8/image/upload/v1773650815/code_editor_wzkzct.png",
    github: "https://github.com/V4Vikaskumar/live-code-editor/tree/main",
    live: "https://live-code-editor-2uu2.onrender.com",
  },
];

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[340px] md:h-[360px] rounded-2xl shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front (Screenshot) */}
        <div
          className="absolute inset-0 bg-gray-900 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Back (Details) */}
        <div
          className="absolute inset-0 bg-gray-900 text-white p-6 rounded-2xl flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <p className="text-xs text-gray-500">{project.tech}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700"
            >
              <Github size={16} /> Code
            </a>

            <a
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm bg-white text-black px-3 py-2 rounded-lg hover:opacity-80"
            >
              <ExternalLink size={16} /> Live
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Vikas Kumar
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Web Developer specializing in building real-time applications and
          interactive web experiences using modern JavaScript technologies.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <p className="text-gray-400">
            If you'd like to collaborate or have any opportunities, feel free to
            reach out.
          </p>

          <p className="mt-4">Email: vikaskumar77103@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
