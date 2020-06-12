// Write your Character component here
import React from 'react'
import Container from './Container'


function Character(props){

    console.log(props)



    return(
        <Container>
            <h2>Name: {props.information.name}</h2>
            <p>Birth Year {props.information.birth_year}</p>
        </Container>
    )
}

export default Character;