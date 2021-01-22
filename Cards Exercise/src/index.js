import React from 'react';
import ReactDOM from 'react-dom';
import CardInformation from './Componants/card'
import './style/card.css'
import User from './Componants/User'

const InfUser = User.map(x => <CardInformation name={x.name} image={x.image} specialty={x.specialty} summary={x.summary} facebook={x.facebook} linkedIn={x.linkedIn} gitHup={x.gitHup} />)

function Cards() {
  return (
    <div className="container">
      {InfUser}
    </div>
  )
}

ReactDOM.render(<Cards />, document.getElementById('root'));
