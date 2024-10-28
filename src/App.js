import { useEffect, useState, useContext } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import TableInputExampleModal from "./components/TableInputExampleModal";
import getTable from "./code/getTable";

function App() {

  const [modalShow, setModalShow] = useState(false);

  const getTextTable = () => {
    let table_def = document.getElementById("table-json").value;
    let table = getTable(table_def);
    let table_display = document.getElementById("table-display");
    table_display.innerHTML = "<pre>" + table + "</pre>";
  }

  return (
    <div className="App">
      <h1>Text Table</h1>
      <div className="table-input">
        <p>Enter your JSON table following the <span className="link" onClick={() => setModalShow(true)}>pattern</span> below.</p>
        <textarea id="table-json"></textarea>
      </div>
      <div className="table-button">
        <Button onClick={() => getTextTable()}>Get text table</Button>
      </div>
      <div id="table-display" className="table-display code">
        This is where your text table will appear.
      </div>
      <TableInputExampleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
