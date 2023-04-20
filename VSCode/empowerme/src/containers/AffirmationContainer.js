import React, { useEffect, useState } from 'react'
import AffirmationList from './components/affirmations/AffirmationList';

const AffirmationContainer = ({id}) => {

    const url = "http://localhost:8080/affirmations/${id}";
    const [affirmations, setAffirmations] = useState ([]);

    const getAffirmations = () => {
      fetch(url)
      .then(results => results.json())
      .then(affirmationData => setAffirmations(affirmationData))
    }

    useEffect(() => {
      getAffirmations();
    }, [id])

  return (
    <>
    <div>
        <AffirmationList affirmations={affirmations}/>
    </div>
    </>
  )
}

export default AffirmationContainer