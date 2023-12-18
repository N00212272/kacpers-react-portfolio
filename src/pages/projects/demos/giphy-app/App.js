import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row , Col} from "react-bootstrap";
import './assets/app.css';
import GiphyViewer from "./components/GiphyViewer";

const App = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <GiphyViewer></GiphyViewer>
        </Col>
      </Row>
    </Container>
  );
} 
  


export default App;
