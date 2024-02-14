import axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY

export function SearchMoviesWithKeyWord(keyword){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function onLoadGetMovie(id){
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getCompanyDetails(id){
    return axios.get(`https://api.themoviedb.org/3/company/${id}?api_key=${API_KEY}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}