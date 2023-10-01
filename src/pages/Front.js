import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("here");
    async function logcardsData() {
      const response = await fetch(
        "https://corsproxy.io?https://us-central1-data-253523.cloudfunctions.net/posting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ certified: 0 }),
        }
      );
      const data = await response.json();
      console.log(data);
      setPosts(data); // Set the fetched data to the state
    }

    logcardsData(); // Call the function to fetch data
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <img
        src="/cropped-habitat-for-humanity-logo.jpg"
        width="200"
        height="200"
      />
      <p></p>
      <h1 className="font-bold text-4xl flex justify-center items-center mt-8">
        DISASTER RELIEF DONATIONS
      </h1>
      <a href="https://dreamteam-js-hfh.vercel.app/donate">
        Click Here to Donate
      </a>
      <div className="collection">
        {posts.map((product, index) => (
          <div className="product" key={index}>
            <a className="product__image" href="#"></a>
            <div className="product__name">
              <p>
                <a href="#">{product.description}</a>
              </p>
            </div>
            <div className="product__Certified">
              <p>{product.certified}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
