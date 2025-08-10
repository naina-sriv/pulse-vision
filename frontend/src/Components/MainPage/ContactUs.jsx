import React from 'react';

const ContactUs = () => {
  return (
    // Replaced 'min-h-screen' with 'flex-grow' to fix the layout.
    // Set the background to be transparent to show the main page's background.
    <section className="flex-grow text-white py-16 px-6 md:px-20 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Main card with dark, glassy styling */}
        <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
          <p className="text-center text-gray-300 mb-10">
            Have a question, suggestion, or just want to say hello? We’d love to hear from you!
          </p>

          <form className="space-y-6">
            {/* Styled form fields for dark mode */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-1 w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="mt-1 w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                required
              ></textarea>
            </div>

            {/* Styled submit button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;
