import React, {useState, useEffect} from 'react';
import ForumList from '../components/forum/ForumList';


const ForumContainer = () => {

    const url = "http://localhost:8080/api/forum"
    const [forum, setForum] = useState([])

    const getForum = () => {
      fetch(url)
      .then(results => results.json())
      .then(forumData => setForum(forumData))
    };

    useEffect (() => {
      getForum();
    },[]);




    return (

    <div>
        <ForumList forum = {forum}/>
        
    </div>
    )
};

export default ForumContainer