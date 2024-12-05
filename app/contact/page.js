// app/contact/page.js
export default function Contact() {
    return (
      <section className="text-center p-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  