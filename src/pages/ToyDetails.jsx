// import { useEffect, useState } from "react"
// import { Link, Navigate, useParams } from "react-router-dom"

// import { toyService } from "../services/toy.service.js"

// export function ToyDetails() {
//     const [toy, setToy] = useState(null)
//     const { toyId } = useParams()

//     useEffect(() => {
//         if (toyId) loadToy()
//     }, [toyId])

//     function loadToy() {
//         toyService.getById(toyId)
//             .then(toy => setToy(toy))
//             .catch(err => {
//                 console.log('Had issues in toy details', err)
//                 Navigate('/toy')
//             })
//     }
//     if (!toy) return <div>Loading...</div>
//     return (
//         <section className="toy-details">
//             <h1>Toy vendor : {toy.vendor}</h1>
//             <h5>Price: ${toy.price}</h5>
//             <p>⛐</p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!</p>
//             <Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp;
//             <Link to={`/toy`}>Back</Link>
//             <p>
//                 <Link to="/toy/nJ5L4">Next Toy</Link>
//             </p>
//         </section>
//     )
// }

import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

import { toyService } from "../services/toy.service.js"

export function ToyDetails() {
    const [toy, setToy] = useState(null)
    const { toyId } = useParams()

    useEffect(() => {
        if (toyId) loadToy()
    }, [toyId])

    function loadToy() {
        toyService.getById(toyId)
            .then(toy => setToy(toy))
            .catch(err => {
                console.log('Had issues in toy details', err)
                Navigate('/toy')
            })
    }
    if (!toy) return <div>Loading...</div>
    return (
        <section className="toy-details" style={{ textAlign: 'center' }}>
        <h1>
          Toy name: <span>{toy.name}</span>
        </h1>
        <h1>
          Toy price: <span>${toy.price}</span>
        </h1>
        <h1>
          Labels: <span>{toy.labels.join(' ,')}</span>
        </h1>
        <h1 className={toy.inStock ? 'green' : 'red'}>
          {toy.inStock ? 'In stock' : 'Not in stock'}
        </h1>
        <button className="btn">
          <Link to="/toy">Back</Link>
        </button>
      </section>
    )
}
