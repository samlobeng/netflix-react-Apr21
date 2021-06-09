import { useState, useEffect } from "react"

const ShowDetail = ({ match, history }) => {

    const [selectedMovie, setselectedMovie] = useState(null)

    useEffect(() => {
        const getMovie = async () => {
            try {
                let id = match.params.imdbID
                let response = await fetch(
                    `http://www.omdbapi.com/?apikey=a0871843&s="${this.props.imdbID.toLowerCase()}"&type=movie&page=1`
                  );
                  console.log(response)
                  let moviesArr = await response.json();
                  let movieToShow = moviesArr.find(movie => movie.imdbID.toString() === id)
                  selectedMovie(movieToShow)
            } catch (error) {
                console.log(error)
        
            }
        }
getMovie()
    }, [match.params.imdbID])  

    return (
        <>
            {
                selectedMovie === null
                    ? <h1>LOADING...</h1>
                    : typeof selectedMovie === 'undefined'
                        ? <h1>404 - Movie NOT FOUND</h1>
                        : (
                            <div>
                                <h1>{selectedMovie.Title}</h1>
                                <img onClick={() => history.push('/comments/' + selectedMovie.id)} src={selectedMovie.Poster} alt="movie pic"></img>
                                {/* <DishComments selectedPasta={selectedPasta} /> */}
                            </div>
                        )
            }
        </>
    )
}

export default ShowDetail