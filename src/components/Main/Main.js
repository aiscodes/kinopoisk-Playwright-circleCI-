import React from 'react'
import './Main.css'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '../Progress/Progress'
import { getFilmById } from './../../actions/index'
import { Link } from 'react-router-dom'

export default function Main() {
  const dispatch = useDispatch()
  const data = useSelector((r) => r.films)
  return (
    <div className="main" id="main">
      <div className="container main__row">
        {!data ? (
          <Progress />
        ) : (
          data.map((e, i) => {
            return (
              <div key={e.filmId} className="main__list" id="main__list">
                <div className="main__left">
                  <img src={e.posterUrl} alt="movie" id="movie" />
                </div>
                <div className="main__right">
                  <h2 className="main__title">{e.nameRu}</h2>
                  <h3>
                    Страна:
                    {e.countries.map((e, i) => (
                      <span className="ml5" key={i}>
                        {e.country}
                      </span>
                    ))}
                  </h3>
                  <h3>
                    Год выпуска:<span className="ml5">{e.year}</span>
                  </h3>
                  <h3>
                    Длительность:<span className="ml5">{e.filmLength}</span>
                  </h3>
                  <h3>
                    Жанры:
                    {e.genres.map((e, i) => (
                      <span className="ml5">{e.genre}</span>
                    ))}
                  </h3>
                  <Link
                    onClick={() => dispatch(getFilmById(e.filmId))}
                    to={`/detail/${e.filmId}`}
                    id="more"
                  >
                    <button className="more">details</button>
                  </Link>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
