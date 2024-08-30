import * as React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const myArray: string[] = ["First", "Second", "Third"];

const myObject: any = {
    first: 1,
    second: 'two',
    third: 3
}

const MyMapping: React.FC = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <h2 className="mb-3">Array:</h2>
                    <ListGroup>
                        {myArray.map((item, index) => (
                            <ListGroup.Item key={index}>
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <h2 className="mb-3">Object:</h2>
                    <ListGroup>
                        {Object.keys(myObject).map((key) => (
                            <ListGroup.Item key={key}>
                                <strong>{key}:</strong> {myObject[key]}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default MyMapping;
