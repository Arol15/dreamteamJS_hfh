import { useState } from "react";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for your donation!!!");
    setFormData({
      name: "",
      company_name: "",
      address_1: "",
      address_2: "",
      city: "",
      zip: "",
      description: "",
      file: null,
    });
  }

  return (
    <div>
      <h1 className="text-center text-6xl text-blue-800 py-4">Donate Today!</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Company Name:
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address_1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address Line 1:
          </label>
          <input
            type="text"
            id="address_1"
            name="address_1"
            value={formData.address_1}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address_2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address Line 2:
          </label>
          <input
            type="text"
            id="address_2"
            name="address_2"
            value={formData.address_2}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            required
            onChange={handleInputChange}
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="zip"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Zip code:
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
            onChange={handleImageUpload}
            className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
