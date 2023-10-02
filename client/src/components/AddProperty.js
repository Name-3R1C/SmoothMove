// import axios from "axios";
// import React, { useState } from "react";

// export default function AddProperty (prop) {
//   const [property, setProperty] = useState({
//     owner_id: 1,
//     title: '',
//     description: '',
//     thumbnail_photo_url: '',
//     cover_photo_url: '',
//     cost_per_month: '',
//     area: '',
//     number_of_bathrooms: '',
//     number_of_bedrooms: '',
//     country:  '',
//     street:  '',
//     city:  '',
//     province:  '',
//     post_code :''
//   });

//   const submitNewProperty = (event) => {
//     console.log('submitData');
//     event.preventDefault();

//     axios.post('/api/properties', {property: property})
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch(e => {
//         console.error(e);
//       })
//   };

//   return (
//     <div>
//         <div>
//           <label>Title</label>
//           <input type="text" name="title" placeholder="Title" id="new-property-form__title" onChange={(event) => setProperty({...property, title: event.target.value})}/>
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__description">Description</label>
//           <textarea placeholder="Description" name="description" id="property-form__description" cols="30" rows="10" onChange={(event) => setProperty({...property, description: event.target.value})}></textarea>
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__bedrooms"># 🛌</label>
//           <input placeholder="# 🛌" type="number" name="number_of_bedrooms" id="new-property-form__bedrooms" onChange={(event) => setProperty({...property, number_of_bedrooms: event.target.value})} />

//           <label for="new-property-form__bathrooms"># 🚽</label>
//           <input placeholder="# 🚽" type="number" name="number_of_bathrooms" id="new-property-form__rooms" onChange={(event) => setProperty({...property, number_of_bathrooms: event.target.value})}/>

//           <label for="new-property-form__area"></label>
//           <input placeholder="sqft" type="number" name="area" id="new-property-form__area" onChange={(event) => setProperty({...property, area: event.target.value})}/>
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__cost">Cost Per Month</label>
//           <input placeholder="Cost Per Month" type="number" name="cost_per_month" id="new-property-form__cost" onChange={(event) => setProperty({...property, cost_per_month: event.target.value})} />
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__thumbnail">Thumbnail Image</label>
//           <input placeholder="Thumbnail Image" type="text" name="thumbnail_photo_url" id="new-property-form__thumbnail" onChange={(event) => setProperty({...property, thumbnail_photo_url: event.target.value})} />
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__cover">Cover Image</label>
//           <input placeholder="Cover Image" type="text" name="cover_photo_url" id="new-property-form__cover" onChange={(event) => setProperty({...property, cover_photo_url: event.target.value})} />
//         </div>

//         <hr/>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__street">Street</label>
//           <input placeholder="Street" type="text" name="street" id="new-property-form__street" onChange={(event) => setProperty({...property, street: event.target.value})} />
//         </div>

//         <div className="new-property-form__field-wrapper">
//           <label for="new-property-form__country">Country</label>
//           <select id="new-property-form__country" name="country" data-country-selected="CA" onChange={(event) => setProperty({...property, country: event.target.value})}>
//               <option value="US">United States</option>
//               <option value="CA">Canada</option>
//               <option value="BR">Brazil</option>
//           </select>
//         </div>
//         <div id="new-property-form__locality-fields">

//           <div className="new-property-form__field-wrapper">
//             <label for="new-property-form__city">City</label>
//             <input placeholder="City" type="text" name="city" id="new-property-form__city" onChange={(event) => setProperty({...property, city: event.target.value})} />
//           </div>
//           <div className="new-property-form__field-wrapper">
//             <label for="new-property-form__province">Province</label>
//             <input placeholder="Province" type="text" name="province" id="new-property-form__province" onChange={(event) => setProperty({...property, province: event.target.value})} />
//           </div>
//           <div className="new-property-form__field-wrapper">
//             <label for="new-property-form__zip">Postal Code</label>
//             <input placeholder="Postal Code" type="text" name="post_code" id="new-property-form__zip" onChange={(event) => setProperty({...property, post_code: event.target.value})} />
//           </div>
//         </div>

//         <div className="new-property-form__field-wrapper">
//             <button onClick={submitNewProperty}>Create</button>
//             <a id="property-form__cancel" href="#">Cancel</a>
//         </div>
//     </div>
//   );
// };

import axios from "axios";
import React, { useState } from "react";

export default function AddProperty(prop) {
  const [property, setProperty] = useState({
    owner_id: 1,
    title: "",
    description: "",
    thumbnail_photo_url: "",
    cover_photo_url: "",
    cost_per_month: "",
    area: "",
    number_of_bathrooms: "",
    number_of_bedrooms: "",
    country: "",
    street: "",
    city: "",
    province: "",
    post_code: "",
  });

  const submitNewProperty = (event) => {
    event.preventDefault();

    axios
      .post("/api/properties", { property: property })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Property</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            onChange={(event) =>
              setProperty({ ...property, title: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Description"
            rows="4"
            onChange={(event) =>
              setProperty({ ...property, description: event.target.value })
            }
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="bedrooms" className="form-label">
            # 🛌
          </label>
          <input
            type="number"
            className="form-control"
            id="bedrooms"
            placeholder="# 🛌"
            onChange={(event) =>
              setProperty({
                ...property,
                number_of_bedrooms: event.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bathrooms" className="form-label">
            # 🚽
          </label>
          <input
            type="number"
            className="form-control"
            id="bathrooms"
            placeholder="# 🚽"
            onChange={(event) =>
              setProperty({
                ...property,
                number_of_bathrooms: event.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Area (sqft)
          </label>
          <input
            type="number"
            className="form-control"
            id="area"
            placeholder="Area"
            onChange={(event) =>
              setProperty({ ...property, area: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cost" className="form-label">
            Cost Per Month
          </label>
          <input
            type="number"
            className="form-control"
            id="cost"
            placeholder="Cost Per Month"
            onChange={(event) =>
              setProperty({ ...property, cost_per_month: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail Image
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            placeholder="Thumbnail Image"
            onChange={(event) =>
              setProperty({
                ...property,
                thumbnail_photo_url: event.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cover" className="form-label">
            Cover Image
          </label>
          <input
            type="text"
            className="form-control"
            id="cover"
            placeholder="Cover Image"
            onChange={(event) =>
              setProperty({ ...property, cover_photo_url: event.target.value })
            }
          />
        </div>

        <hr />

        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            placeholder="Street"
            onChange={(event) =>
              setProperty({ ...property, street: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            id="country"
            onChange={(event) =>
              setProperty({ ...property, country: event.target.value })
            }
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="BR">Brazil</option>
          </select>
        </div>

        <div id="locality-fields">
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              onChange={(event) =>
                setProperty({ ...property, city: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="province" className="form-label">
              Province
            </label>
            <input
              type="text"
              className="form-control"
              id="province"
              placeholder="Province"
              onChange={(event) =>
                setProperty({ ...property, province: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="zip" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Postal Code"
              onChange={(event) =>
                setProperty({ ...property, post_code: event.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={submitNewProperty}
          >
            Create
          </button>
          <a href="#" className="btn btn-secondary ms-2">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
