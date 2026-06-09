import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Nischay Jain — Backend & Cloud Engineer | Node.js · AWS · Azure',
  description:
    'Senior Backend Engineer with 4+ years building scalable, cloud-native systems at Accenture. Expert in Node.js, AWS, Azure Functions, Microservices, and Distributed Architecture.',
  keywords: [
    'Node.js Developer',
    'Backend Engineer India',
    'Cloud Engineer',
    'AWS Developer',
    'Azure Developer',
    'Full Stack Developer Jaipur',
    'Freelance Node.js Developer',
    'Microservices Architecture',
    'Serverless Architecture',
    'API Development',
    'Nischay Jain',
  ].join(', '),
  authors: [{ name: 'Nischay Jain', url: 'https://linkedin.com/in/nischay-jain-799998213' }],
  creator: 'Nischay Jain',
  openGraph: {
    title: 'Nischay Jain — Backend & Cloud Engineer',
    description:
      'Building scalable cloud-native applications used by thousands. Expert in Node.js, AWS, Azure, and Distributed Systems.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nischay Jain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nischay Jain — Backend & Cloud Engineer',
    description:
      'Building scalable cloud-native applications. Expert in Node.js, AWS, Azure, and Distributed Systems.',
    creator: '@Nischay_jn',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/devicon@2.14.0/devicon.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
