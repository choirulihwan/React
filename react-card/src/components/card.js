import React from 'react'
import './card.css'

const Card = props => {
    return (
        <article className="card">
            <header className="card_title">
                <h3>{props.title}</h3>
            </header>
            <figure>
                <img src={props.image} alt="cat" />
            </figure>
            <main className="card_description">
                {props.description}
            </main>
        </article>
    );
}

export default Card