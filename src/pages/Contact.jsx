import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl leading-10 font-extrabold text-yellow-500">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-400">
            Have questions about our Solar Power Prediction System? We're here to help!
          </p>
        </div>

        {/* Contact Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-8">Contact Us</h3>
            <form>
              <div className="mb-6">
                <label className="block text-gray-400 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-2 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full mt-2 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-8">Contact Information</h3>
            <p className="text-gray-400 mb-6">
              Reach out to us via the contact details below or use the form to send us a message. We're happy to assist you with any inquiries!
            </p>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-center">
                <span className="text-yellow-500 font-semibold mr-2">Email:</span>
                <a href="mailto:contact@solarforecast.com" className="hover:underline">contact@solarforecast.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 font-semibold mr-2">Phone:</span>
                +123 456 7890
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 font-semibold mr-2">Address:</span>
                123 Solar Street, Green Energy City, EC1 1ZZ
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-2xl text-yellow-500 font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.676 0H1.325C.594 0 0 .593 0 1.324v21.352C0 23.406.594 24 1.325 24h11.482v-9.294H9.847v-3.622h2.96V8.413c0-2.93 1.796-4.526 4.416-4.526 1.255 0 2.336.093 2.649.135v3.072l-1.819.001c-1.426 0-1.701.677-1.701 1.67v2.19h3.402l-.444 3.622h-2.958V24h5.784C23.406 24 24 23.406 24 22.676V1.324C24 .593 23.406 0 22.676 0z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.194-.896-.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.763.127 1.125-4.09-.205-7.719-2.164-10.141-5.144-.424.727-.666 1.571-.666 2.473 0 1.707.869 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.697 4.374 3.946 4.828-.413.113-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.42-1.683 1.319-3.808 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14.002-7.503 14.002-14.002 0-.213-.004-.425-.014-.636.964-.695 1.8-1.562 2.462-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 0v24H0V0h24zM8.75 18.9v-9.8l8.35 4.9-8.35 4.9z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

