import React, { useState } from "react";
import HeroSection from "./HeroSection";
import axios from "axios";
import "./PropertySearch.scss";
import PropertyList from "./PropertyList"; // Import PropertyList component
import PropertyCard from "./PropertyCard";
import PropertyDetail from "./PropertyDetail";

function PropertySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentProperty, setCurrentProperty] = useState();

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

  const handleCardClick = (propertyId) => {
    setCurrentProperty(propertyId);
  };
  return (
    <div className="container">
      {currentProperty ? (
        <div className="detail-wrapper">
          <PropertyDetail
            currentPropertyID={currentProperty}
            setCurrentProperty={setCurrentProperty}
          />
        </div>
      ) : (
        <div>
          <div className="property-search bg-light">
            <HeroSection onSearch={handleSearch} />
            <div className="w-100 mt-4 custom-container">
              {searchPerformed ? ( // Conditionally render based on searchPerformed
                <div className="row">
                  {loading ? (
                    <p>Loading...</p>
                  ) : searchResults.length === 0 ? (
                    <p>No results found.</p>
                  ) : (
                    searchResults.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        onCardClick={handleCardClick}
                      />
                    )) //
                  )}
                </div>
              ) : (
                <PropertyList />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertySearch;
