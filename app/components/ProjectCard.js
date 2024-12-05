// app/components/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ title, description, link, image }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          width={500} 
          height={300} 
          className="w-full h-56 object-cover" 
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <a href={link} target="_blank" className="text-blue-500 mt-2 inline-block">View Project</a>
        </div>
      </div>
    );
}
