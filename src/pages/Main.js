import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import Home from '../components/Home';
import RenderCards from '../components/RenderCards';

function Main() {
  return (
    <div className="container-page-main">
      <Home />

      <section id="create">
        <Form />
        <Card />
      </section>
      <section id="cards">
        <RenderCards />
      </section>
    </div>
  );
}

export default Main;
