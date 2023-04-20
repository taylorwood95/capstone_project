import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../components/Home';
import CategoryContainer from './CategoryContainer';
import NewsContainer from './NewsContainer';
import ForumContainer from './ForumContainer';
import CalenderContainer from '../components/calender/CalenderContainer';
import AffirmationContainer from './AffirmationContainer';
// import AffirmationsContainer from './AffirmationsContainer';



const MainContainer = () => {
    return (
        <div>
        <Router>
        <NavBar/>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/affirmations" element = {<CategoryContainer/>}/>
                <Route path = "/affirmations/${id}" element = {<AffirmationContainer/>}/>
                <Route path = "/news" element = {<NewsContainer/>}/>
                <Route path = "/forum" element = {<ForumContainer/>}/>
                <Route path='/calender' element={<CalenderContainer/>}/>
            </Routes>  

        </Router>
        </div>
    )
}

export default MainContainer