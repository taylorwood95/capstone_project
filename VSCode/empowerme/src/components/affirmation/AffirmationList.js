import React from 'react'
import AffirmationDetail from './AffirmationDetail'

const AffirmationList = ({category}) => {

    const allAffirmations = category.affirmations.map((affirmation, index) => {
        return <AffirmationDetail key={index} affirmation={affirmation}/>
    })
  return (

    <div>
        <ul>
            <p>AffirmationList</p>
            {allAffirmations}
        </ul>
    </div>

  )
}

export default AffirmationList