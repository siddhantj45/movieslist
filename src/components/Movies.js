import React, { useState, useEffect } from 'react'
// import axios from 'axios'

const Movies = ({ authorized }) => {
  if (!localStorage.getItem('authorized')) {
    window.location.href = '/'
  }

  const [data, setData] = useState([])
  //   const [error, setError] = useState('')

  const getData = async () => {
    // await axios
    //   .post('https://hoblist.com/movieList', {
    //     category: 'movies',
    //     language: 'kannada',
    //     genre: 'all',
    //     sort: 'voting'
    //   })
    //   .then(res => setData(res.data.result))
    //   .catch(err => {
    //     console.log(err)
    //   })

    // Remove this
    setData([
      {
        director: ['Prashanth Neel'],
        stars: ['Sanjay Dutt,Raveena Tandon,Yash,Srinidhi Shetty'],
        title: 'K.G.F: Chapter 2',
        genre: 'action,drama',
        voted: [
          {
            upVoted: [],
            downVoted: [],
            _id: '5d9448106e6974498e97e846',
            updatedAt: 1569998864,
            genre: 'action'
          },
          {
            upVoted: ['5e1d4475416a070ee7add99c'],
            downVoted: [],
            _id: '5d9448106e6974498e97e845',
            updatedAt: 1569998864,
            genre: 'drama'
          }
        ],
        poster:
          'https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg',
        totalVoted: 0,
        voting: 0
      }
    ])
    // Remove this
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="card">
        <h1>Movies</h1>

        {data.map((movie, index) => {
          return (
            <section key={index}>
              <main>
                <div className="vote">
                  <div className="fas fa-sort-up"></div>
                  <p>{Object.keys(movie.voted).length}</p>
                  <div className="fas fa-sort-down"></div>
                </div>

                <div className="content">
                  <div className="poster">
                    <img
                      src={
                        movie.poster ||
                        'https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg'
                      }
                      alt="poster-img"
                    />
                  </div>
                  <div className="details">
                    <h2>{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Director: {movie.director[0]}</p>
                    <p>Staring: {movie.stars[0]}</p>
                  </div>
                </div>
              </main>

              <button href="">Watch Trailer</button>

              <hr className="division" />
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Movies
