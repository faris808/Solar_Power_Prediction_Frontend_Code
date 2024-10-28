import React from 'react';

const Home = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center px-8 lg:px-24 py-16 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?solar-energy')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Harness the Power of Solar Energy
          </h1>
          <p className="text-lg lg:text-2xl text-gray-300 mb-8">
            Our AI-powered platform provides accurate solar energy predictions, helping you make smart energy choices.
          </p>
          <a
            href="/prediction"
            className="inline-block px-10 py-4 text-lg font-semibold bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            View Predictions
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
            Why Choose SolarIQ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Accurate Predictions</h3>
              <p className="text-gray-400 text-center">
                Leverage our AI-powered algorithm for precision in forecasting solar energy output.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Smart Analytics</h3>
              <p className="text-gray-400 text-center">
                Get real-time insights to optimize solar energy usage and maximize efficiency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">User-Friendly Interface</h3>
              <p className="text-gray-400 text-center">
                Navigate seamlessly through an easy-to-use interface designed for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} SolarIQ. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
