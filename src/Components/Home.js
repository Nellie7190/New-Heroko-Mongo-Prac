import React, { useEffect, useState } from 'react'

const Home = () => {
    const [vinyls, setVinyls] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/vinyls')
            .then(response => response.json())
            .then(data => setVinyls(data.vinyls))
    },[])
    console.log(vinyls)
    const vinylsDisplay = vinyls.map((vinyl, id) => <li key={id}>{vinyl.artistName}: {vinyl.albumName}</li>)
  return (
      <ul>
          {vinylsDisplay}
      </ul>
  )
}

export default Home