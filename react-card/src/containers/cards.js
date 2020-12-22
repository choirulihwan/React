import React from 'react'
import Card from '../components/card'
import './cards.css'

const Cards = props => {
    return (
      <section className="card_container">
        {props.catData.map(
            cat => <Card title={cat.title} image={cat.image} description={cat.description} />        
        )}
      </section>  
    );    
}

export default Cards