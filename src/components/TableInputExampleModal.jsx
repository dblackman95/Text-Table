import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TableInputExampleModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          JSON Example
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>The below is an example of the JSON table structure.</h6>
        <p className="code">
          &#123;<br />
          <span className="tab"></span>&quot;header&quot;: &#91;&quot;ID&quot;, &quot;NAME&quot;, &quot;AGE&quot;, &quot;ADDRESS&quot;, &quot;SALARY&quot;&#93;,<br />
          <span className="tab"></span>&quot;records&quot;: &#91;<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;1&quot;, &quot;Ramesh&quot;, &quot;32&quot;, &quot;Ahmedabad&quot;, &quot;2000.00&quot;&#93;,<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;2&quot;, &quot;Khilan&quot;, &quot;25&quot;, &quot;Delhi&quot;, &quot;1500.00&quot;&#93;,<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;3&quot;, &quot;Kaushik&quot;, &quot;23&quot;, &quot;Kota&quot;, &quot;2000.00&quot;&#93;,<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;4&quot;, &quot;Chaitali&quot;, &quot;25&quot;, &quot;Mumbai&quot;, &quot;6500.00&quot;&#93;,<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;5&quot;, &quot;Hardik&quot;, &quot;27&quot;, &quot;Bhopal&quot;, &quot;8500.00&quot;&#93;,<br />
          <span className="tab"></span><span className="tab"></span>&#91;&quot;6&quot;, &quot;Komal&quot;, &quot;22&quot;, &quot;MP&quot;, &quot;4500.00&quot;&#93;<br />
          <span className="tab"></span>&#93;<br />
          &#125;
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TableInputExampleModal;