import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Potfolio from './pages/Portfolio'
import Login from './pages/Login'
import Admin from './pages/Admin'

export const Routes = () =>{
    return(
        <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/portfolio" exact component={Potfolio}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/admin" exact component={Admin}/>
            <Route  render={()=>{
                <p>Not Found 404</p>
            }} />
        </Switch>
    );
}