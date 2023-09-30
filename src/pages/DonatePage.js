import { useState } from "react";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    zip: "",
    description: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: file });
  // };

  function handleSubmit(e) {
    e.preventDefault();
    // const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });

    //setFormData({
    //   name: "",
    //   address_1: "",
    //   address_2: "",
    //   city: "",
    //   zip: "",
    //   file: null,
    // })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="company_name">Company Name:</label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address_1">Address Line 1:</label>
        <input
          type="text"
          id="address_1"
          name="address_1"
          value={formData.address_1}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address_2">Address Line 2:</label>
        <input
          type="text"
          id="address_2"
          name="address_2"
          value={formData.address_2}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          required
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="zip">Zip code:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        {/* <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
            onChange={handleImageUpload}
          /> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
