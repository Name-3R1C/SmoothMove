// import React, { useState } from "react";
// import HeroSection from "./HeroSection";
// import axios from "axios";
// import PropertyDetail from "./PropertyDetail";

// function PropertySearch() {
//   const [searchQuery, setSearchQuery] = useState("all"); // Set the default search query to "all" or an empty string
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const handleSearch = async (query) => {
//     console.log("query", query);
//     try {
//       setLoading(true);
//       //console.log(query);
//       //let queryParams = {};
//       const queryParams = {
//         ...query,
//         query: query.searchQuery,
//         city: query.city,
//         province: query.province,
//         postcode: query.postcode,
//       };
//       //console.log("queryparams", queryParams);
//       // Check if searchQuery is not "all" or empty
//       // if (searchQuery && searchQuery !== "all") {
//       //   queryParams.query = searchQuery;
//       // }
//       const encodedQuery = encodeURIComponent(query.query);
//       // console.log(encodedQuery);
//       // if (city) {
//       //   queryParams.city = city;
//       // }
//       //console.log(queryParams);
//       // if (province) {
//       //   queryParams.province = province;
//       // }
//       // if (postcode) {
//       //   queryParams.postcode = postcode;
//       // }
//       const response = await axios.get(`/api/properties/search`, {
//         params: queryParams,
//       });

//       //console.log(response.data);
//       const data = response.data;

//       setSearchResults(data.properties);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error searching for properties:", error);
//       setLoading(false);
//     }
//   };
//   // Function to open the property detail
//   const openPropertyDetail = (property) => {
//     setSelectedProperty(property);
//   };

//   // Function to close the property detail
//   const closePropertyDetail = () => {
//     setSelectedProperty(null);
//   };

//   return (
//     <div className="property-search bg-light">
//       <HeroSection onSearch={handleSearch} />
//       <div className="container mt-4">
//         <div className="row">
//           {loading ? (
//             <p>Loading...</p>
//           ) : searchResults.length === 0 ? (
//             <p>No results found.</p>
//           ) : (
//             searchResults.map((property) => (
//               <div className="col-md-4 mb-3" key={property.id}>
//                 <div className="card">
//                   <img
//                     src={property.thumbnail_photo_url}
//                     className="card-img-top img-fluid"
//                     alt={property.title}
//                     style={{ maxHeight: "200px" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{property.title}</h5>

//                     <p className="card-text">
//                       <strong>Cost per Month:</strong> $
//                       {property.cost_per_month}
//                     </p>
//                     <p className="card-text">
//                       <strong>Bedrooms:</strong> {property.number_of_bedrooms}
//                     </p>
//                     <p className="card-text">
//                       <strong>Bathrooms:</strong> {property.number_of_bathrooms}
//                     </p>
//                     <p className="card-text">
//                       <strong>Street:</strong> {property.street}
//                     </p>
//                     <p className="card-text">
//                       <strong>City:</strong> {property.city}
//                     </p>
//                     <p className="card-text">
//                       <strong>Province:</strong> {property.province}
//                     </p>
//                     <p className="card-text">
//                       <strong>Postal Code:</strong> {property.post_code}
//                     </p>
//                     <button
//                       onClick={() => openPropertyDetail(property)}
//                       className="btn btn-secondary rounded-pill text-white"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PropertySearch;
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import axios from "axios";
import PropertyDetail from "./PropertyDetail";
import PropertyList from "./PropertyList"; // Import PropertyList component

function PropertySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search has been performed

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/properties/search`, {
        params: query,
      });

      const data = response.data;
      setSearchResults(data.properties);
      setLoading(false);
      setSearchPerformed(true); // Set searchPerformed to true when a search is performed
    } catch (error) {
      console.error("Error searching for properties:", error);
      setLoading(false);
    }
  };

  const openPropertyDetail = (property) => {
    setSelectedProperty(property);
  };

  const closePropertyDetail = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="property-search bg-light">
      <HeroSection onSearch={handleSearch} />
      <div className="container mt-4">
        {searchPerformed ? ( // Conditionally render based on searchPerformed
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : searchResults.length === 0 ? (
              <p>No results found.</p>
            ) : (
              searchResults.map((property) => (
                <div className="col-md-4 mb-3" key={property.id}>
                  <div className="card">
                    <img
                      src={property.thumbnail_photo_url}
                      className="card-img-top img-fluid"
                      alt={property.title}
                      style={{ maxHeight: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>

                      <p className="card-text">
                        <strong>Cost per Month:</strong> $
                        {property.cost_per_month}
                      </p>
                      <p className="card-text">
                        <strong>Bedrooms:</strong> {property.number_of_bedrooms}
                      </p>
                      <p className="card-text">
                        <strong>Bathrooms:</strong>{" "}
                        {property.number_of_bathrooms}
                      </p>
                      <p className="card-text">
                        <strong>Street:</strong> {property.street}
                      </p>
                      <p className="card-text">
                        <strong>City:</strong> {property.city}
                      </p>
                      <p className="card-text">
                        <strong>Province:</strong> {property.province}
                      </p>
                      <p className="card-text">
                        <strong>Postal Code:</strong> {property.post_code}
                      </p>
                      <button
                        onClick={() => openPropertyDetail(property)}
                        className="btn btn-secondary rounded-pill text-white"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <PropertyList /> // Render PropertyList component when no search has been performed
        )}
      </div>
    </div>
  );
}

export default PropertySearch;
