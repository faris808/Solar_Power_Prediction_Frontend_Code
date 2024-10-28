import React, { useState } from "react";

const PredictionPage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [comparisonCsvUrl, setComparisonCsvUrl] = useState("");
  const [futurePredictionCsvUrl, setFuturePredictionCsvUrl] = useState("");

  const handleForecast = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/forecast");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setImageUrl(`http://localhost:5000${data.imageUrl}`);
      setComparisonCsvUrl(`http://localhost:5000${data.comparisonCsvUrl}`);
      setFuturePredictionCsvUrl(`http://localhost:5000${data.futurePredictionCsvUrl}`);
    } catch (error) {
      console.error("Error fetching forecast:", error);
      alert("Failed to generate forecast");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
        Solar Power Forecast
      </h1>

      <button
        className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 disabled:bg-zinc-400"
        onClick={handleForecast}
        disabled={loading}
      >
        {loading ? "Generating Forecast..." : "Click to Generate Forecast"}
      </button>

      {loading && (
        <div className="mt-8 flex justify-center">
          <div className="border-8 border-gray-300 border-t-yellow-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      {imageUrl && (
        <div className="mt-10 flex justify-center w-full">
          <img
            src={imageUrl}
            alt="Solar Power Forecast"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      )}

      {comparisonCsvUrl && futurePredictionCsvUrl && (
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 space-y-4 lg:space-y-0 w-full max-w-lg">
          <a
            href={comparisonCsvUrl}
            download
            className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full lg:w-5/12 text-center"
          >
            Click to Download Comparison Results CSV
          </a>
          <a
            href={futurePredictionCsvUrl}
            download
            className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 w-full lg:w-5/12 text-center"
          >
            Click to Download Future Prediction Results CSV
          </a>
        </div>
      )}
    </div>
  );
};

export default PredictionPage;







// import React, { useState } from "react";

// const PredictionPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   const handleForecast = async () => {
//     setLoading(true); // Start the loading spinner
//     try {
//       const response = await fetch("http://localhost:5000/api/forecast");

//       if (!response.ok) {
//         // If the response is not okay, throw an error
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json(); // Parse the JSON from the response
//       console.log("Data received is :", data);

//       // Prepend the backend URL to the image path
//       console.log("Checking:-",`http://localhost:5000${data.imageUrl}`)
//       setImageUrl(`http://localhost:5000${data.imageUrl}`); // Fix here
//     } catch (error) {
//       console.error("Error fetching forecast:", error);
//       alert("Failed to generate forecast");
//     } finally {
//       setLoading(false); // Stop the loading spinner
//     }
//   };

//   const loaderStyle = {
//     borderTopColor: "#3498db",
//     animation: "spin 1s ease-in-out infinite",
//     border: "8px solid #f3f3f3",
//     borderRadius: "50%",
//     width: "128px",
//     height: "128px",
//   };

//   const spinKeyframes = `
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   `;

//   return (
//     <div className="container mx-auto my-28">
//       <style>{spinKeyframes}</style> {/* Add keyframes directly in style */}
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Solar Power Forecast
//       </h1>
//       <div className="flex justify-center mb-6">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//           onClick={handleForecast}
//           disabled={loading}
//         >
//           {loading ? "Generating Forecast..." : "Generate Forecast"}
//         </button>
//       </div>
//       {/* Display loading spinner while processing */}
//       {loading && (
//         <div className="flex justify-center">
//           <div style={loaderStyle}></div>
//         </div>
//       )}
//       {/* Display forecasted image when available */}
//       {imageUrl && (
//         <div className="flex justify-center">
//           <img
//             src={imageUrl}
//             alt="Solar Power Forecast"
//             className="w-4/5 max-w-lg rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PredictionPage;

























































