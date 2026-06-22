import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(formRef.current);

    formData.append(
      "access_key",
      "a921b8b5-0835-4ce6-b0b1-b89affc9cf4d"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully! ✅");
      formRef.current.reset();

      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      setResult("Failed to send message ❌");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-cyan-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg">
          I'd love to hear from you — reach out for opportunities or questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me 🚀
        </h3>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center text-sm text-gray-300 mt-2">
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;