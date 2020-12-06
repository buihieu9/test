import React from 'react'
import Film from './Film'
import './style.scss'

function ListFilm(props) {
    const {films} = props
    return (
        <div className="listFilm">
            {
                films.map((item)=><Film 
                 film={item} key={item.id}
                />)
            }
        </div>
    )
}

export default ListFilm
