import React, { useState, useEffect } from 'react'
import { onLoadGetMovie, getCompanyDetails } from '../api/moviedb'
import { useParams } from 'react-router-dom'
import moment from 'moment'
const Detail = (props) => {

    const params = useParams()
    const [film, setFilm] = useState(null)
    const [compagnies, setCompagnies] = useState([])

    useEffect(() => {
        onLoadGetMovie(params.id)
            .then((res) => {
                setFilm(res)
                if (compagnies.length === 0) {
                    Promise.all(res.production_companies.map(async (prod) => {
                        try {
                            return await getCompanyDetails(prod.id)
                        } catch (err) {
                            return console.log(err)
                        }
                    }))
                        .then((companies) => {
                            setCompagnies(companies)
                        })
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <h2>Détails du film</h2>
            <div className="box-result">

                {film !== null && <section className="film-infos">
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
                    <div className="film-infos-text">
                        <h3>{film.original_title}</h3>
                        <p>{film.overview}</p>
                        <p>{moment(film.release_date).locale('fr').format("DD-MM-YYYY")}</p>
                        <h4>Compagnies de Production:</h4>
                        {compagnies.length > 0 ? <ul>
                            {compagnies.map((company) => {
                                return <li key={company.id}>
                                    <a href={company.homepage}>{company.name} {company.headquarters}</a>
                                </li>
                            })}
                        </ul> : <p>Aucune compagnie enregistrée</p>}
                        <a className ="backToHomePage" href="http://localhost:3000/"><span className="material-symbols-outlined">search</span> Nouvelle recherche</a>

                    </div>
                </section>}

            </div>

        </main>)
}

export default Detail