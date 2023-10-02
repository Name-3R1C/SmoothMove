// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function PropertyDetail({
//   currentPropertyID,
//   setCurrentProperty,
// }) {
//   console.log("PropertyDetail ---- ");
//   const [property, setProperty] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/property-detail/", { params: { id: currentPropertyID } })
//       .then((response) => {
//         console.log(response.data.properties.rows[0]);
//         setProperty(response.data.properties.rows[0]);
//         // console.log(property)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [currentPropertyID]);

//   return (
//     <div className="container">
//       <div key={property.id}>
//         <div className="card">
//           <span onClick={() => setCurrentProperty(null)}> ❌ </span>
//           <img src={property.cover_photo_url} alt="type" />
//           <div className="card-body">
//             <h5 className="card-title">${property.cost_per_month}</h5>
//             <p className="card-text">
//               {property.number_of_bedrooms} bed {property.number_of_bathrooms}{" "}
//               bath {property.area} sqrt
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PropertyDetail({
  currentPropertyID,
  setCurrentProperty,
}) {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Define the URL to fetch property details by ID
    const url = `/api/property/${currentPropertyID}`;

    axios
      .get(url)
      .then((response) => {
        setProperty(response.data.property);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPropertyID]);

  return (
    <div className="container mt-5">
      {property ? (
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">${property.cost_per_month}</h5>
            <span
              className="close-icon"
              onClick={() => setCurrentProperty(null)}
            >
              ❌
            </span>
          </div>
          <img
            src={property.cover_photo_url}
            className="card-img-top img-fluid"
            alt="Property"
          />
          <div className="card-body">
            <h5 className="card-title">{property.title}</h5>
            <p className="card-text">{property.description}</p>
          </div>
          <div className="card-footer">
            <p className="card-text">
              <strong>Address:</strong> {property.street}, {property.city},{" "}
              {property.province}, {property.post_code}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
}
