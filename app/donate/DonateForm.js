"use client";

export default function DonateForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value="test" required />
      </div>
      <div>
        <label htmlFor="name">Company Name:</label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value="test"
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address Line 1:</label>
        <input type="text" id="address" name="address" value="test" required />
      </div>
      <div>
        <label htmlFor="address">Address Line 2:</label>
        <input type="text" id="address" name="address" value="test" required />
      </div>
      <div>
        <label htmlFor="address">City:</label>
        <input type="text" id="address" name="address" value="test" required />
      </div>
      <div>
        <label htmlFor="address">Zip code:</label>
        <input type="text" id="address" name="address" value="test" required />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
