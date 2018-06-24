import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const renderLinks = (routes=[]) =>
  routes
    .map( (route, idx) => {
      return (<li key={ idx }><Link to={ route.path }>{ route.title }</Link></li>)
    })

const MainLayout = (props) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      { renderLinks(props.routes) }
    </ul>
    <hr/>
    { props.children }
  </div>
)

const Home = (props) => (<div>Home</div>)
const NotFound = (props) => (<div>Route not found</div>)

const renderRoutes = (routes=[]) =>
  routes
    .map( (route, idx) => {
      return (<Route key={ idx } path={ route.path } exact component={ ()=>route.component } />)
    })

export const Router = (props) => (
  <BrowserRouter>
    <MainLayout routes={ props.routes }>
      <Switch>
        <Route path='/' exact component={ Home } />
        { props.routes && renderRoutes(props.routes) }
        <Route component={ NotFound } />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);
