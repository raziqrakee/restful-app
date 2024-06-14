import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  let navigate = useNavigate();

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSuccessClose = () => {
    setShow(false);
    navigate("/Home");
  };

  const handleErrorClose = () => setShowErrorModal(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", user);
      setMessage("User added successfully!");
      setShow(true);
    } catch (error) {
      setErrorMessage("Error adding user. Please try again.");
      setShowErrorModal(true);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-outline-secondary mx-2"
              onClick={() => setUser({ name: "", username: "", email: "" })}
            >
              Reset
            </button>
            <Link to="/Home" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>

          {/* Success Modal */}
          <Modal show={show} onHide={handleSuccessClose}>
            <Modal.Header closeButton>
              <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleSuccessClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Error Modal */}
          <Modal show={showErrorModal} onHide={handleErrorClose}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleErrorClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
