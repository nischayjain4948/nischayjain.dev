// app/about/page.js
export default function About() {
  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-gray-600">
        I&apos;m a software engineer with over 3 years of experience in building robust and scalable web applications. My expertise lies in backend development using Node.js, with hands-on experience in frameworks like Express.js. I have a strong command over databases such as MongoDB and PostgreSQL, and I&apos;m skilled at integrating Prisma for seamless database management.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        On the frontend, I specialize in React and Next.js, crafting modern, user-friendly interfaces styled with Tailwind CSS. I&apos;m also familiar with DevOps tools like Docker and GitHub Actions, which I use to optimize deployment pipelines. Passionate about problem-solving, I enjoy exploring cutting-edge technologies and creating innovative solutions for complex challenges.
      </p>
    </section>
  );
}
