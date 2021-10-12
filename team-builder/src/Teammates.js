import React from 'react'

export default function Teammates(props) {
    const { details } = props

    if(!details) {
        return (
            <h3>Working on fetching your teammate&apos;s details...</h3>
        )
    }

    return (
        <div className='team-container'>
          <h2>Name: {details.name}</h2>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
        </div>
    )
}