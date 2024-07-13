import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import HERO_IMG from "../assets/img/HERO_IMG.jpg"

export function HomePage() {
    // TODO: move to storeState
    const dispatch = useDispatch()
    const [_count, setCount] = useState(10)
    const count = useSelector(storeState => storeState.count)

    function changeCount(diff) {
        // setCount(count => count + diff)
        // dispatch({ type: INCREMENT })
        dispatch({ type: 'CHANGE_BY', diff })
    }

    return (
        <section className="homepage">
            <h1>Welcome! Enjoy your stay 😁</h1>
            {/* <h2>
                Count {count}
                <button onClick={() => {
                    changeCount(1)
                }}>+</button>
                <button onClick={() => {
                    changeCount(10)
                }}>+10</button>
            </h2 > */}
            <img src={HERO_IMG} className="img-homepage" />
        </section >
    )
}