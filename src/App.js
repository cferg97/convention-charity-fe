import { Button, Container, Form, Image } from "react-bootstrap";
import { useState } from "react";

function App() {
  return (
    <Container
      fluid
      style={{ display: "flex", flexDirection: "column" }}
      className="text-center align-items-center"
    >
      <img
        className="img-fluid my-2 mx-2 logo-main"
        style={{ borderRadius: "5px" }}
        src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1681043028/griffish/eventbrite_lkakmp.png"
        alt="Griffish Isles Logo"
      />
      <h2>Charity Auction Submission</h2>

      <Container fluid style={{ alignContent: "center" }}>
        <Form className="mx-auto" style={{ maxWidth: "35rem" }}>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="What's the name of your item?"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Write a short description of what your item is/what materials were used to make it"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Who would you like to be credited as?"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload image of item </Form.Label>
            <Form.Control type="file" accept="image/*" capture="environment" />
          </Form.Group>

          <Button>Submit!</Button>
        </Form>
      </Container>
    </Container>
  );
}

export default App;
