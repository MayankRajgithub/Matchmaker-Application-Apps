import React, { useState } from "react";
import { Tabs, Tab, Form, Button ,Table} from "react-bootstrap";

function ContactUs() {
    const [key, setKey] = useState("emailSetup");
  const [email, setEmail] = useState("");
  const [inquiries, setInquiries] = useState([
    {
      date: "26/06/2025",
      message: "Few lines of message from the contact form Few lines of message from the contact form...",
      email: "raj@gmail.com",
      contactNo: "9834225633",
    },
  ]);

    return (
<>
<div className="p-4" style={{ width: "1000px",height:"400px", top: 0, left: 0 }}>
      <h3 className="mb-4">Contact Us</h3>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 border-bottom"
      >
        <Tab eventKey="emailSetup" title="Email Setup">
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Contact Form Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-3">
              Save
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="contactInquiry" title="Contact Inquiry">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Message</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry, idx) => (
                <tr key={idx}>
                  <td>{inquiry.date}</td>
                  <td>{inquiry.message}</td>
                  <td>{inquiry.email}</td>
                  <td>{inquiry.contactNo}</td>
                  <td>
                    <Button variant="outline-secondary" size="sm">
                      📄
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
        

</>
    );
  }
  
  export default ContactUs;
  