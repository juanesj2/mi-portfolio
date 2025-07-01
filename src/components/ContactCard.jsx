import { Mail, Github, Linkedin } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://i.pravatar.cc/150?img=3" // Tu foto
          alt="Tu nombre"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Tu Nombre</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Desarrollador Frontend</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href="mailto:tuemail@example.com"
          className="flex items-center text-blue-600 hover:underline"
        >
          <Mail className="w-5 h-5 mr-2" /> tuemail@example.com
        </a>
        <a
          href="https://github.com/tuusuario"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <Github className="w-5 h-5 mr-2" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          className="flex items-center text-blue-700 hover:underline"
          target="_blank"
        >
          <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
