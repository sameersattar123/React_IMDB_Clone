import { Box , styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/common/Header'
import Slide from '../Components/Slide'
import UpNext from '../Components/UpNext'
import { NOWPLAYING_API_URL } from '../Constants/Constant'
import { CategoryMovies } from '../Services/Api'

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Home = () => {
    const [ movies , setMovies] = useState([])

    useEffect(() => {
        const getData = async() => {

            const response = await CategoryMovies(NOWPLAYING_API_URL)
            setMovies(response.results)
        }
        getData()
    } , [])
  return (
    <>
        <Header/>
        <Container>
        <Wrapper>
            <Banner movies={movies}/>
            <UpNext movies={movies}/>
        </Wrapper>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        </Container>
    </>
  )
}

export default Home 