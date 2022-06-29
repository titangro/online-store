import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE } from '../utils/constants';

export const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        height: window.innerHeight - 54,
      }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..." />
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..." />
          <div className="d-flex justify-content-md-between mt-3">
            <div>
              Нет аккаунта?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink>
            </div>
            <Button variant="outline-success">Войти</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
