import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../components/Home';
import CategoryContainer from './CategoryContainer';
import NewsContainer from './NewsContainer';
import ForumContainer from './ForumContainer';
import AffirmationsContainer from './AffirmationsContainer';



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
                <Route path = "/affirmations-list" element = {<AffirmationsContainer/>}/>
            </Routes>  

        </Router>
        </div>
    )
}

export default MainContainer