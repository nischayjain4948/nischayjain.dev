// app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Nischay Jain',
  description: 'A portfolio showcasing my software engineering projects and skills.',
};

// app/layout.js or app/head.js
export default function Layout({ children }) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/devicon@2.14.0/devicon.min.css"
        />


       
      </head>

      <Head>
        {/* Add Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha384-KyZXEJpZfVSr2uU9kKFrFUnnFwU0hYlT2qwaDxZfpqFqPXLQd6Vw5Z7DceF4qH0h"
          crossOrigin="anonymous"
        />
      </Head>
      
          {/* Add the Font Awesome CDN */}
      
      <html lang="en">
        <body>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
