import React, { useEffect, useState } from 'react'
import './Header.css'
import { getAllFilms, searchFilms } from './../../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [value, setValue] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getAllFilms())
  }, [])

  const click = (e) => {
    e.preventDefault()
    dispatch(searchFilms(value))
    navigate('/')
  }
  return (
    <div className="header">
      <div className="container header__row">
        <div className="header__center" id="header">
          <h1>Movie bar</h1>
          <form onSubmit={(e) => click(e)} className="header__form" action="">
            <input
              onChange={(e) => setValue(e.target.value)}
              className="header__input"
              type="text"
              placeholder="find"
              name="search"
            />
            <button type="submit" className="form__logo" id="searchBtn">
              search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
