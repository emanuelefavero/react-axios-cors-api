import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // NOTE: fetch data using axios from a cross origin (cors) url endpoint (the following url is from my own API deployed on cyclic)

        // TIP: you must use cors middleware in your API server file to allow cross origin requests

        axios
            .get('https://shy-lime-scorpion-hose.cyclic.app/')
            .then((response) => {
                setPosts(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading
                ? 'Loading...'
                : posts.map((post, index) => (
                      <div key={index}>
                          <h1>Name: {post.name}</h1>
                          <p>Age: {post.age}</p>
                      </div>
                  ))}
        </>
    )
}

export default App
