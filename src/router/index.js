import React from 'react'
import routes from './routes'
import Maprouter from './maprouter'
let Router = (props) => {
    return <Maprouter routes={routes} history={props.history}></Maprouter>
}
export default Router