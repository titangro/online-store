import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Context } from '..';
import { NavLink, useNavigate } from 'react-router-dom';
import { SHOP_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import { observer } from 'mobx-react-lite';

const NavBarComponent = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const handleAuth = () => {
    user.setIsAuth(true);
    // navigate(LOGIN_ROUTE)
  };

  const handleEscape = () => {
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light">Админ панель</Button>
            <Button
              variant="outline-light"
              className="ms-2"
              onClick={handleEscape}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light" onClick={handleAuth}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export { NavBarComponent as NavBar };
