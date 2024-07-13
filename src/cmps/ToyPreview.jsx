import { Link } from "react-router-dom";

export function ToyPreview({ toy }) {
    const generateRobohashUrl = (id) => {
        return `https://robohash.org/${id}`
    }
    return (
        <article>
            <h4>{toy.name}</h4>
            <img src={generateRobohashUrl(toy._id)} alt={toy.name} style={{ width: '100px', height: '100px' }} />
            <p>Price: <span>${toy.price.toLocaleString()}</span></p>
            <p className={toy.inStock ? 'green' : 'red'}>
                {toy.inStock ? 'In stock' : 'Not in stock'}
            </p>
            {toy.owner && <p>Owner: <Link to={`/user/${toy.owner._id}`}>{toy.owner.fullname}</Link></p>}
            <hr />
            <Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp; | &nbsp;
            <Link to={`/toy/${toy._id}`}>Details</Link>
        </article>
    )
}
