import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl leading-9 font-extrabold sm:text-5xl sm:leading-10">
            About <span className="text-yellow-500">SolarIQ</span> Prediction System
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-400">
            Harnessing the power of solar energy through predictive analytics, advanced algorithms, and real-time data.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Overview */}
          <div className="bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-yellow-500">Overview</h3>
            <p className="mt-4 text-gray-300">
              SolarIQ is an innovative solar power prediction platform that analyzes historical and current solar and weather data to forecast energy outputs. With the rise of renewable energy, managing solar power efficiently has never been more important.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-yellow-500">Key Features</h3>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              <li>Real-time and historical data integration for accurate predictions.</li>
              <li>Powerful machine learning models to analyze and forecast solar output.</li>
              <li>Customizable dashboards with detailed analytics and insights.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-yellow-500">Benefits</h3>
            <p className="mt-4 text-gray-300">
              SolarIQ maximizes the potential of solar energy by providing actionable insights into future energy production. Businesses can reduce their reliance on the grid, lower costs, and better plan energy storage.
            </p>
          </div>

          {/* Future Goals */}
          <div className="bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-yellow-500">Future Goals</h3>
            <p className="mt-4 text-gray-300">
              Our future vision for SolarIQ includes the integration of AI-driven real-time monitoring and predictive algorithms to further enhance forecasting accuracy.
            </p>
          </div>
        </div>

        {/* Model Performance Metrics */}
        <div className="mt-16 bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-6">LSTM Model Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
            <div className="flex flex-col items-center">
              <span className="font-bold">MSE</span>
              <span className="text-yellow-400">98.4485</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">RMSE</span>
              <span className="text-yellow-400">9.9221</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">MAE</span>
              <span className="text-yellow-400">2.0625</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">R² Score</span>
              <span className="text-yellow-400">0.9736</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-yellow-500">Join the Renewable Energy Revolution</h3>
          <p className="mt-4 text-lg text-gray-400">
            SolarIQ is your partner in creating a greener, more sustainable future.
          </p>
          <button
            onClick={handleLearnMore}
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg"
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </button>

          {showMore && (
            <div className="mt-8 text-lg text-gray-300 text-left">
              <h4 className="text-2xl font-semibold text-yellow-500 mb-4">Additional Insights</h4>
              <p>
                SolarIQ is not just a tool for solar energy prediction; it is a comprehensive platform designed to help users monitor and optimize their solar energy consumption.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

