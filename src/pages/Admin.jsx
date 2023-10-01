import { useState, useEffect } from 'react'

const Admins = () => {
  const [postings, setPosting] = useState('')

  
useEffect(() => {

    console.log("hey there")

    fetch("https://corsproxy.io/?https://us-central1-data-253523.cloudfunctions.net/posting",{
      method: 'POST',
      // mode: 'cors',
      headers: {
        Host: "us-central1-data-253523.cloudfunctions.net",
        "Content-Type": "application/json",
      }
    , body: JSON.stringify({"certified": true})
      
    })
      .then(res => res.json())
      .then(data => {
        setPosting(data)
        console.log("you got data", data)           
      })
      .catch(err => {
        console.log("error...oh no");
        console.error(err)
      })
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const jsonData = await response.json();
    // setData(jsonData);
    // } catch (error) {
    //   // Handle errors here
    //   console.error('Error fetching data:', error)
    // }
    // };

    // Call fetchData to initiate the data fetching
  }, [])



  return (
    <>
      {/* {Array.isArray(postings) && postings.map(post => {
  return <h1>{post.description}</h1>
})} */}
          
  {postings && postings.map((post, index) => (
    <div className='w-full mt-10' key={index}>
    <div  className="max-w-md  border border-gray-200 rounded-lg shadow-lg bg-white dark:border-gray-700 mb-4">
      <a href="/">
        <img className="w-full rounded-t-lg" src={post.image_uri} alt="" />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">{post.city}</h5>
        </a>
        <p className="mb-3 font-bold dark:text-gray-600">{post.description}</p>
        <div className="flex justify-between">
          <button className="inline-flex items-center px-7 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Received
          </button>
          <button className="inline-flex items-center px-7 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Verify
          </button>
        </div>
    </div>
      </div>
    </div>
  ))}


    </>
  )
}

export default Admins
