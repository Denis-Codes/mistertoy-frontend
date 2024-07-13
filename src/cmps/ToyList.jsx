import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy, onEditToy, addToCart }) {
    console.log('Render')
    return (
        <div className="toy-list-container">
            <ul className="toy-list">
                {toys.map(toy =>
                    <li className="toy-preview" key={toy._id}>
                        <ToyPreview toy={toy} />

                        <div>
                            <button onClick={() => onRemoveToy(toy._id)}>x</button>
                            <button onClick={() => onEditToy(toy)}>Edit</button>
                        </div>

                        {/* <button className="buy" onClick={() => addToCart(toy)}>
                        Add to Cart
                    </button> */}
                    </li>)}
            </ul>
        </div>
    )
}