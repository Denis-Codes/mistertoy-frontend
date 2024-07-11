import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import logo from "../assets/img/logo.png"

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
            {/* <h2>
                Count {count}
                <button onClick={() => {
                    changeCount(1)
                }}>+</button>
                <button onClick={() => {
                    changeCount(10)
                }}>+10</button>
            </h2 > */}
            <img src={logo} className="img-homepage" />
        </section >
    )
}