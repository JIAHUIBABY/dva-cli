import React from 'react'
import { Router, Switch, Redirect, Route } from 'dva/router'
let Maprouter = (props) => {
    let { history, routes } = props;
    return <Router history={history}>
        <Switch>
            {
                routes.map((item, index) => item.path ? (<Route key={index} path={item.path} render={(props) => item.children ?
                    (<item.component {...props}>
                        <Maprouter history={history} routes={routes}></Maprouter>
                    </item.component>) :
                    (<item.component {...props}></item.component>)
                } ></Route>) :
                    (<Redirect key={index} from={item.from} to={item.to}></Redirect>))
            }
        </Switch>
    </Router >
}
export default Maprouter