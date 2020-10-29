import './App.css'
import { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Movies from './components/Movies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [authorized, setAuthorized] = useState(false)

  return (
    <Router>
   <div className="App">
     
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route
            path="/login"
            exact
            render={() => <SignIn setAuthorized={res => setAuthorized(res)} />}
          />
          <Route
            path="/movie"
            exact
            render={() => <Movies authorized={authorized} />}
          />
        </Switch>
      
    </div>
  </Router>
  )
}

export default App
