import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button, Grid, Nav, NavItem, MenuDropdown, MenuItem, NavDropdown } from 'react-bootstrap';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
      </ul>



<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link to="/shop">Shop</Link>
      </NavItem>
      <NavItem eventKey={3} href="#">
        <Link to="/journal">Journal</Link>
      </NavItem>
      <NavItem eventKey={4} href="#">
        <Link to="/elements">Elements</Link>
      </NavItem>
      <NavItem eventKey={5} href="#">
        <Link to="/pages">Pages</Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/journal" component={Journal} />
      <Route path="/elements" component={Elements} />
      <Route path="/pages" component={Pages} />



    </div>
  </Router>
);

const MobileMenu = () => (
  <Router>
    <div>

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link to="/shop">Shop</Link>
      </NavItem>
      <NavItem eventKey={3} href="#">
        <Link to="/journal">Journal</Link>
      </NavItem>
      <NavItem eventKey={4} href="#">
        <Link to="/elements">Elements</Link>
      </NavItem>
      <NavItem eventKey={5} href="#">
        <Link to="/pages">Pages</Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/journal" component={Journal} />
      <Route path="/elements" component={Elements} />
      <Route path="/pages" component={Pages} />



    </div>
  </Router>
);


const Home = () => (
  <div class="home">
    <h2>Home</h2>
  </div>
);

const Shop = () => (
  <div class="about">
    <h2>Shop</h2>
  </div>
);

const Journal = () => (
  <div class="about">
    <h2>Journal</h2>
  </div>
);

const Elements = () => (
  <div class="about">
    <h2>Elements</h2>
  </div>
);

const Pages = () => (
  <div class="about">
    <h2>Pages</h2>
  </div>
);


const Topics = ({ match }) => (
  <div>
    <h2>Journal</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
