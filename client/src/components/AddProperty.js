import axios from "axios";
import React, { useState } from "react";

export default function AddProperty (prop) {
  const [property, setProperty] = useState({
    owner_id: 1,
    title: '',
    description: '',
    thumbnail_photo_url: '',
    cover_photo_url: '',
    cost_per_month: '',
    area: '',
    number_of_bathrooms: '',
    number_of_bedrooms: '',
    country:  '',
    street:  '',
    city:  '',
    province:  '',
    post_code :''
  });

  const submitNewProperty = (event) => {
    console.log('submitData');
    event.preventDefault();

    axios.post('/api/properties', {property: property})
      .then((res) => {
        console.log(res.data);
      })
      .catch(e => {
        console.error(e);
      })
  };

  return (
    <div>
        <div>
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" id="new-property-form__title" onChange={(event) => setProperty({...property, title: event.target.value})}/>
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__description">Description</label>
          <textarea placeholder="Description" name="description" id="property-form__description" cols="30" rows="10" onChange={(event) => setProperty({...property, description: event.target.value})}></textarea>
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__bedrooms"># 🛌</label>
          <input placeholder="# 🛌" type="number" name="number_of_bedrooms" id="new-property-form__bedrooms" onChange={(event) => setProperty({...property, number_of_bedrooms: event.target.value})} />

          <label for="new-property-form__bathrooms"># 🚽</label>
          <input placeholder="# 🚽" type="number" name="number_of_bathrooms" id="new-property-form__rooms" onChange={(event) => setProperty({...property, number_of_bathrooms: event.target.value})}/>

          <label for="new-property-form__area"></label>
          <input placeholder="sqft" type="number" name="area" id="new-property-form__area" onChange={(event) => setProperty({...property, area: event.target.value})}/>
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__cost">Cost Per Month</label>
          <input placeholder="Cost Per Month" type="number" name="cost_per_month" id="new-property-form__cost" onChange={(event) => setProperty({...property, cost_per_month: event.target.value})} />
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__thumbnail">Thumbnail Image</label>
          <input placeholder="Thumbnail Image" type="text" name="thumbnail_photo_url" id="new-property-form__thumbnail" onChange={(event) => setProperty({...property, thumbnail_photo_url: event.target.value})} />
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__cover">Cover Image</label>
          <input placeholder="Cover Image" type="text" name="cover_photo_url" id="new-property-form__cover" onChange={(event) => setProperty({...property, cover_photo_url: event.target.value})} />
        </div>

        <hr/>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__street">Street</label>
          <input placeholder="Street" type="text" name="street" id="new-property-form__street" onChange={(event) => setProperty({...property, street: event.target.value})} />
        </div>

        <div className="new-property-form__field-wrapper">
          <label for="new-property-form__country">Country</label>
          <select id="new-property-form__country" name="country" data-country-selected="CA" onChange={(event) => setProperty({...property, country: event.target.value})}>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="BR">Brazil</option>
          </select>
        </div>
        <div id="new-property-form__locality-fields">
          
          <div className="new-property-form__field-wrapper">
            <label for="new-property-form__city">City</label>
            <input placeholder="City" type="text" name="city" id="new-property-form__city" onChange={(event) => setProperty({...property, city: event.target.value})} />
          </div>
          <div className="new-property-form__field-wrapper">
            <label for="new-property-form__province">Province</label>
            <input placeholder="Province" type="text" name="province" id="new-property-form__province" onChange={(event) => setProperty({...property, province: event.target.value})} />
          </div>
          <div className="new-property-form__field-wrapper">
            <label for="new-property-form__zip">Postal Code</label>
            <input placeholder="Postal Code" type="text" name="post_code" id="new-property-form__zip" onChange={(event) => setProperty({...property, post_code: event.target.value})} />
          </div>
        </div>

        <div className="new-property-form__field-wrapper">
            <button onClick={submitNewProperty}>Create</button>
            <a id="property-form__cancel" href="#">Cancel</a>
        </div>
    </div>
  );
};