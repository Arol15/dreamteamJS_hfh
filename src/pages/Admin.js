


const Admins = () => {

  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      imageUrl: '/card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      imageUrl: '/card2.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: '/card3.jpg',
    },
  ];
  return (
    <>
    <h1 className="font-bold text-4xl flex justify-center items-center mt-8">Admin Portal</h1>
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex mx-8 my-4 mt-24">     
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />        
          <div className="p-5">      
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
            <div className="flex">
            <button
              href="#"
              className="inline-flex items-center px-4 py-3 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Recieved
            </button>
            <button
              href="#"
              className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Certified
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  


  )
}

export default Admins