import { useDispatch, useSelector } from 'react-redux'

import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {
    // const dispatch = useDispatch()
    // const count = useSelector(storeState => storeState.userModule.count)
    // const toysLength = useSelector(storeState => storeState.toyModule.toys.length)
    
    return (
        <footer className='app-footer'>
            {/* <h5>
                Currently {toysLength} toys in the shop
            </h5> */}
            <p>
            © 2023 Denis's Toy Shop. All rights reserved.
            </p>
            <UserMsg />
        </footer>
    )
}
