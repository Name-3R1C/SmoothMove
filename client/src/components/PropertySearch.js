import React, { useState } from "react";
import HeroSection from "./HeroSection";
import axios from "axios";

function PropertySearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      console.log(query);
      const encodedQuery = encodeURIComponent(query.query);
      console.log(encodedQuery);
      const response = await axios.get(`/api/properties/search`, {
        params: {
          query: encodedQuery,
          city: query.city,
          province: query.province,
          postcode: query.postcode,
        },
      });
      console.log(response.data);
      const data = response.data;

      setSearchResults(data.properties);
      setLoading(false);
    } catch (error) {
      console.error("Error searching for properties:", error);
      setLoading(false);
    }
  };

  return (
    <div className="property-search bg-light">
      <HeroSection onSearch={handleSearch} />
      <div className="container mt-4">
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
                    className="card-img-top img-fluid" // Apply Bootstrap classes
                    alt={property.title}
                    style={{ maxHeight: "200px" }} // Set max height for the image
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
                      <strong>Bathrooms:</strong> {property.number_of_bathrooms}
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
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertySearch;
