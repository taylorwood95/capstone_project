import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../components/Home';
import CategoryContainer from './CategoryContainer';
import NewsContainer from './NewsContainer';
import ForumContainer from './ForumContainer';



const MainContainer = () => {
    return (
        <div>
        <Router>
        <NavBar/>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/affirmations" element = {<CategoryContainer/>}/>
                <Route path = "/news" element = {<NewsContainer/>}/>
                <Route path = "/forum" element = {<ForumContainer/>}/>
            </Routes>  

        </Router>
        </div>
    )
}

export default MainContainer