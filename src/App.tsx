import MyButton from './components/Buttons';
import MySection from './components/MySection';
import MyMapping from "./components/Mapping";
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const enabled: boolean = false;

  return (
    <Container className="App my-4">
      <MySection className="bg-light p-4 rounded">
        <Row className="mb-3">
          <Col>
            <MyButton.Primary>Log in</MyButton.Primary>
          </Col>
          <Col>
            <MyButton.Info>Register</MyButton.Info>
          </Col>
          <Col>
            <MyButton.Secondary dis={!enabled}>Profile</MyButton.Secondary>
          </Col>
        </Row>
        <MyMapping />
      </MySection>
    </Container>
  );
}

export default App;
