import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Route path="/login"></Route>
            <Route path="/"></Route>
        </Router>
    )
}