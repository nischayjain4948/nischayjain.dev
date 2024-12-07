"use client"
export default function Contact() {
  return (
    <section className="text-center p-10">
      
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-lg mt-4 text-gray-600">
        Feel free to reach out to me for any queries, collaboration, or freelance opportunities!
      </p>

      {/* Contact Information */}
      <section className="mt-8 text-center">
        <p className="text-lg">
          Email: 
          <a href="mailto:nischayjain4948@gmail.com" className="text-blue-500 underline ml-2">
            nischayjain4948@gmail.com
          </a>
        </p>
        <p className="text-lg mt-2">
          Phone: 
          <a href="tel:+919876543210" className="text-blue-500 underline ml-2">
            +91 9983513299
          </a>
        </p>
        <button
          className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
          onClick={() => window.open("/nischayjain.pdf", "_blank")}
        >
          Download My Resume
        </button>
      </section>

      {/* FAQs Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4 max-w-2xl mx-auto">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold">How can I collaborate with you?</h3>
            <p className="mt-2 text-gray-600">
              Send me an email or call me directly, and we can discuss your project or collaboration ideas.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold">What services do you offer?</h3>
            <p className="mt-2 text-gray-600">
              I specialize in backend development, scalable systems, and full-stack solutions using Node.js, MongoDB, and Next.js.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold">Are you available for freelance projects?</h3>
            <p className="mt-2 text-gray-600">
              Yes, I am available for freelancing and would love to hear about your project requirements.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
