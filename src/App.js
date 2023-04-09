import { Button, Container, Form, Image } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const onImageSelect = (e) => {
    setImage(e.target.files[0]);
  };

  const postData = async (form) => {
    try {
      setIsLoading(true);
      let response = await fetch(
        "https://convention-charity-be-production.up.railway.app/submit",
        {
          method: "POST",
          body: JSON.stringify(form),
          "Content-Type": "application/json",
        }
      );
      if (response.ok) {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("itemName", itemName);
    formData.append("itemDesc", description);
    formData.append("submitterName", name);
    formData.append("image", image);

    postData(formData);
  };

  return (
    <Container
      fluid
      style={{ display: "flex", flexDirection: "column" }}
      className="text-center align-items-center pt-2"
    >
      <img
        className="img-fluid my-2 mx-2 logo-main"
        style={{ borderRadius: "5px" }}
        src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1681043028/griffish/eventbrite_lkakmp.png"
        alt="Griffish Isles Logo"
      />
      <h2>Charity Auction Submission</h2>

      <Container fluid style={{ alignContent: "center" }}>
        <Form
          className="mx-auto"
          style={{ maxWidth: "35rem" }}
          onSubmit={(e) => onSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              disabled={loading}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              type="text"
              placeholder="What's the name of your item?"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              disabled={loading}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              as="textarea"
              rows="3"
              placeholder="Write a short description of what your item is/what materials were used to make it"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Who would you like to be credited as?"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload image of item </Form.Label>
            <br />
            <Form.Control
              disabled={loading}
              onChange={(e) => onImageSelect(e)}
              required
              type="file"
              accept="image/*"
              capture="environment"
            />
            <Form.Text className="text-white">
              If you're on mobile, this will open the camera app!
            </Form.Text>
          </Form.Group>

          <Button type="submit">Submit!</Button>
        </Form>
      </Container>
    </Container>
  );
}

export default App;
