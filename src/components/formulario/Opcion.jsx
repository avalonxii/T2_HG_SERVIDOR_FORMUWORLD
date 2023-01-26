import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Opcion() {
  return (
    <InputGroup className="mb-4">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
    </InputGroup>
  );
}
