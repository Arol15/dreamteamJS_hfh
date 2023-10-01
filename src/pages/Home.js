import { useState, useEffect } from "react";

export default function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    async function logcardsData() {
      const response = await fetch(
        "https://us-central1-data-253523.cloudfunctions.net/posting"
      );
      const data = await response.json();
      setCardsData(data); // Set the fetched data to the state
    }

    logcardsData(); // Call the function to fetch data
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <h1 className="font-bold text-4xl flex justify-center items-center mt-8">
        HABITAT FOR HUMANITY
      </h1>
      <a href="">Click Here to Donate</a>
      <div className="collection">
        {cardsData.map((product, index) => (
          <div className="product" key={index}>
            <a className="product__image" href="#"></a>
            <div className="product__name">
              <p>
                <a href="#">{product.name}</a>
              </p>
            </div>
            <div className="product__price">
              <p>{product.certified}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
