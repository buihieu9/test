import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'
function FilterFilm() {
    const {query1 ,query2} = useParams()
    const [param1,setParam1] = useState(query1)
    const [param2,setParam2] = useState(query2) 
    useEffect(()=>{
        setParam1(query1)
        setParam2(query2)
        return ()=>{
            // console.log('removed');
        }
    },[query1,query2])

    const handleOnchange = ()=>{

    }

    return (
        // console.log(param2),
        <div className="filterFilm">
            <div className="filterFilm__title">
                <span>Phim Hanh Dong</span>
                <i className="fas fa-caret-right"></i>
            </div>
            <div className="filterFilm__filter">
                <form>
                    <select onChange={handleOnchange} value={
                        param1==="genres"?param2:"default"
                    }>
                        <option value="default" >Genres</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="drama">Cartoon</option>
                    </select>
                    <select onChange={handleOnchange} value={(
                        param1==="country"?param2:"default"
                    )}>
                        <option value="default">Country</option>
                        <option value="vietnam">Viet Nam</option>
                        <option value="united-states">United States</option>
                        <option value="China">China</option>
                        <option value="korea">korea</option>
                        <option value="japan">Japan</option>
                        <option value="hongkong">Hong Kong</option>
                        <option value="europe">Europe</option>
                    </select>
                    <select onChange={handleOnchange} value={(
                        param1==="year"?param2:"default"
                    )}>
                        <option value="default">Year</option>
                        <option value="vietnam">2020</option>
                        <option value="united-states">2019</option>
                        <option value="China">2018</option>
                        <option value="korea">2017</option>
                        <option value="japan">2016</option>
                        <option value="hongkong">2015</option>
                        <option value="europe">2014</option>
                    </select>
                    <select onChange={handleOnchange} value={(
                        param1==="sort"?param2:"default"
                    )}>
                        <option value="default">Sort</option>
                        <option value="votes">Votes</option>
                        <option value="date-updated">Date</option>
                    </select>
                    <button type="submit">Filter Film</button>
                </form>
            </div>
        </div>
    )
}

export default FilterFilm
