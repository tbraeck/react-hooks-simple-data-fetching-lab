import React, { useEffect, useState } from "react";


function App() {
    const [dogImage, setDogImage] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then((data) => {

                setDogImage(data.message)

            })
    }, [])
    if (!dogImage) return <p>Loading...</p>
    return <img src={dogImage} alt="A Random Dog" />
}



// create your App component here
export default App;