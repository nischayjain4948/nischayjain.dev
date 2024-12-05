"use client";
import ProjectCard from './components/ProjectCard';
import Image from 'next/image'; // For optimized image loading
import Link from 'next/link'; // Import Link from Next.js
import { projectData } from './projectData';

export default function Home() {
  return (
    <>
      <section className="text-center p-6 sm:p-10 bg-gray-100 relative overflow-hidden">
        {/* Background with additional coding logos */}
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-b from-transparent to-black">
          <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {[
              'javascript-plain',
              'nextjs-original',
              'nodejs-plain',
              'mongodb-plain',
              'prisma-plain',
              'postgresql-plain',
              'react-plain',
              'docker-plain',
              'git-plain',
              'tailwindcss-plain',
              'express-original',
            ].map((icon, index) => (
              <div key={index} className="flex justify-center items-center">
                <i className={`devicon-${icon} colored text-3xl sm:text-5xl`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative z-10">
          <img
            src="/nischay.jpeg" // Replace with your actual profile image
            alt="Profile Picture"
            className="mx-auto rounded-full border-4 border-white"
            width={150}
            height={150}
          />
          <h1 className="text-2xl sm:text-4xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 animate-gradient-text">
            Nischay Jain
          </h1>
          <p className="mt-2 text-sm sm:text-lg text-gray-400">
            Software Engineer
          </p>
          <p className="mt-4 text-sm sm:text-lg text-gray-600">
            I&apos;m a software engineer passionate about building innovative web
            applications.
          </p>
        </div>

        {/* Skills Section */}
        <h2 className="text-xl sm:text-2xl font-bold mt-10 text-gray-800 relative z-10">
          My Skills
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
          {[
            { icon: 'javascript-plain', label: 'JavaScript', level: 90 },
            { icon: 'nextjs-original', label: 'Next.js', level: 85 },
            { icon: 'nodejs-plain', label: 'Node.js', level: 88 },
            { icon: 'mongodb-plain', label: 'MongoDB', level: 75 },
            { icon: 'prisma', label: 'Prisma', level: 80 },
            { icon: 'postgresql-plain', label: 'PostgreSQL', level: 70 },
            { icon: 'react-plain', label: 'React', level: 85 },
            { icon: 'docker-plain', label: 'Docker', level: 65 },
            { icon: 'git-plain', label: 'Git', level: 90 },
            { icon: 'tailwindcss-plain', label: 'Tailwind CSS', level: 80 },
            { icon: 'express-original', label: 'Express.js', level: 85 },
            { icon: 'amazonwebservices-plain', label: 'AWS', level: 85 },
          ].map((skill, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform"
            >
              {skill.icon === 'prisma' ? (
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/prisma.svg"
                  alt={skill.label}
                  width={32} // Set appropriate width and height for the image
                  height={32}
                  className="mx-auto"
                />
              ) : (
                <i
                  className={`devicon-${skill.icon} colored text-3xl sm:text-4xl`}
                ></i>
              )}
              <p className="text-xs sm:text-sm mt-2">{skill.label}</p>
              {/* Skill level bar */}
              <div className="mt-2 w-full h-2 bg-gray-300 rounded">
                <div
                  className="h-full bg-green-400 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <section className="container mx-auto p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </section>

        {/* Social Media Section */}
      </section>

      <h2 className="text-xl sm:text-2xl font-bold mt-10 text-gray-800 relative z-10 text-center">
        Connect With Me
      </h2>
      <div className="mt-10 space-x-4 sm:space-x-6 flex justify-center">
        <Link
          href="https://www.linkedin.com/in/nischay-jain-799998213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain colored text-3xl sm:text-4xl cursor-pointer"></i>
        </Link>
        <Link
          href="https://github.com/nischayjain4948"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-plain colored text-3xl sm:text-4xl cursor-pointer"></i>
        </Link>
        <Link
          href="https://x.com/Nischay_jn?t=5dYj7_3ixaAF3w6XCFFpww&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-twitter-plain colored text-3xl sm:text-4xl cursor-pointer"></i>
        </Link>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s linear infinite;
        }
      `}</style>
    </>
  );
}
