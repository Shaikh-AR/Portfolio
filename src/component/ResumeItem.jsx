import React from 'react'
import  parse  from 'html-react-parser';

const ResumeItem = ({icon,year,title,percentage}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className='resume__date'>{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description"><span>Percentage: </span>{percentage}</p>
    </div>
  )
}

export default ResumeItem