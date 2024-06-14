import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      setErrorMessage("Failed to load user details. Please try again.");
      setShowErrorModal(true);
    }
  };

  const handleClose = () => setShowErrorModal(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id: {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username:</b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {user.email}
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/Home")}>
            Back
          </button>
        </div>
      </div>

      <Modal show={showErrorModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
