import React, {useState} from 'react'

const Card = ({heading, content}) => {
  const [contentShown, setContentShown] = useState(true);
    return (
    <div>
      <h2>{heading}</h2>
      <button onClick={}>{contentShown ? 'Hide' : 'Show'}</button>
      {contentShown && <p>{content}</p>}
    </div>
  )
}

export default Card
