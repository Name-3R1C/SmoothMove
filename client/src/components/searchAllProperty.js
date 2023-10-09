import React, { useState } from "react";
import axios from "axios";

function SearchAllProperty() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

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

  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSearchClick = () => {
    const query = {
      query: searchQuery,
      city: city,
      province: province,
      postcode: postcode,
    };
    handleSearch(query);
  };

  return (
    <div className="property-search bg-light">
      <div
        className="hero-section"
        style={{ backgroundColor: "#f0f8ff", marginTop: "20px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary mb-2"
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {searchPerformed ? (
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
        ) : null}
      </div>
    </div>
  );
}

export default SearchAllProperty;
