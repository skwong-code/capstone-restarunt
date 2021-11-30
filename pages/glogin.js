import React from 'react'

const Home = () => {
  return (
    <div className="App">
      <button
        onClick={() =>
          (window.location = 'https://skw-strapi2.herokuapp.com/connect/google')
        }
      >
        Login via Google
      </button>
    </div>
  )
}

export default Home