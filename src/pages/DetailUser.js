import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

export default function DetailUser() {
    const [data, setData] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((json) => setData(json))
        return () => {
            setData(null)
        }
    }, [])

    console.log(data)

    return(
        <Container>
            <h1>Data user with parameter {params.id} is</h1>
            <br />
            <p className="h2">{data?.name}</p>
            <p>{data?.username}</p>
            <p>{data?.email}</p>
            <p>{data?.phone}</p>
            <p>{data?.website}</p>
        </Container>
    )
}