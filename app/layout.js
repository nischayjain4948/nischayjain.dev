// app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';


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
