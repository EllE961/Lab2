import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch products from backend API
    // For now, using dummy data
    setProducts([
      { _id: 1, name: "Sample Product 1", price: 29.99, description: "A great product" },
      { _id: 2, name: "Sample Product 2", price: 49.99, description: "Another amazing product" }
    ]);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Products</h1>
          <Card>
            <Card.Body>
              <Button variant="primary" className="mb-3">Add New Product</Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>{product.description}</td>
                      <td>
                        <Button variant="warning" size="sm" className="me-2">Edit</Button>
                        <Button variant="danger" size="sm">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products; 