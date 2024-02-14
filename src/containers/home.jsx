import React, { useState, useEffect } from 'react'
import { SearchMoviesWithKeyWord } from '../api/moviedb'
import { Link } from 'react-router-dom'
import moment from 'moment'
const Home = (props) => {

    const [films, setFilms] = useState([])
    const [value, setValue] = useState("")

    const recupFilms = (e) => {
        e.preventDefault()
        SearchMoviesWithKeyWord(value)
            .then((res) => {
                setFilms(res.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <main>
            <section className="searchBox">
                <h2>Rechercher un film</h2>
                <form
                    onSubmit={recupFilms}
                >
                    <input
                        type="text"
                        placeholder='saisir ma recherche'
                        onChange={(e) => {
                            setValue(e.currentTarget.value)
                        }}
                    />
                    <button type="submit"className="button">Chercher</button>
                </form>
            </section>
            {films.length > 0 && <section className="list">
                <ul id="list">
                    {films.map((movie) => {
                        return <li key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>{movie.title} - {moment(movie.release_date).locale('fr').format("YYYY")}</Link>
                        </li>
                    })}
                </ul>
            </section>}
        </main>)
}

export default Home