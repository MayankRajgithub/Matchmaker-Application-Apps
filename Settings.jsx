import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Form, Button, Card } from 'react-bootstrap';
// Removed lucide-react import

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('personal-details');

  return (
    <div className="d-flex bg-light min-vh-100" style={{ width: "900px",height:"400px", top: 0, left: 0 }}>
      {/* Main Content Area - now takes full width */}
      <Col md={12} lg={12} className="p-4">
        {/* Top Header/Navbar */}
      

        {/* Tabbed Content */}
        <Tab.Container id="settings-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav variant="underline" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="personal-details" className="text-dark">Personal Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="business-details" className="text-dark">Business Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="subscription" className="text-dark">Subscription</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Personal Details Tab */}
            <Tab.Pane eventKey="personal-details">
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="mb-4">Manage Your Personal Information</Card.Title>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" className="rounded-3" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" className="rounded-3" />
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" className="rounded-3" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" className="rounded-3" />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>

            {/* Business Details Tab */}
            <Tab.Pane eventKey="business-details">
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="mb-4">Your Business Information</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formCompanyName">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter company name" className="rounded-3" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBusinessEmail">
                      <Form.Label>Business Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter business email" className="rounded-3" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter business address" className="rounded-3" />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>

            {/* Subscription Tab */}
            <Tab.Pane eventKey="subscription">
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="mb-4">Manage Your Subscription</Card.Title>
                  <p>You are currently on the <strong>Premium Plan</strong>.</p>
                  <p>Next billing date: <strong>July 21, 2025</strong>.</p>
                  <Button variant="outline-primary" className="me-2 rounded-pill">Change Plan</Button>
                  <Button variant="outline-danger" className="rounded-pill">Cancel Subscription</Button>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* Save Button */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="primary" className="rounded-pill px-4 py-2 shadow-sm">Save</Button>
        </div>
      </Col>
    </div>
  );
}

export default App;