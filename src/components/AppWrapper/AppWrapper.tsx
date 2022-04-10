import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ResultsContext } from '../../context/ResultsContext';
import { ResultsContextType } from '../../types/context';
import Loader from '../Loader';
import MoviePage from '../MoviePage/MoviePage';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import SearchAppBar from '../SearchAppBar';
import classes from "./styles.module.css";

const AppWrapper = () => {
    
    const {isLoading} = React.useContext(ResultsContext) as ResultsContextType;

    if(isLoading) {
        return <Loader/>
    }

    return (
        <div className={classes.appWrapper}>
            <SearchAppBar/>
            <Routes>
                <Route path="/" element={<ResultsGrid/>}/>
                <Route path="movie/:id" element={<MoviePage />}/>
            </Routes>
        </div> 
    )
}

export default AppWrapper; 