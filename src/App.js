import { useState, useEffect } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import TableInputExampleModal from "./components/TableInputExampleModal";
import ErrorModal from "./components/ErrorModal";
import getTable from "./code/getTable";
import JsonInput from "./components/JsonInput";

function App() {

  const [modalShow, setModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);
  const [error, setError] = useState(null);

  const getTextTable = () => {
    let table_def = document.getElementById("table-json").value;
    try {
      let table = getTable(table_def);
      let table_display = document.getElementById("table-display");
      table_display.innerHTML = "<pre>" + table + "</pre>";
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    if (error) {
      setErrorModalShow(true);
    }
  }, [error, errorModalShow]);

  return (
    <div className="App">
      <h1>Text Table</h1>
      <JsonInput getTextTable={getTextTable} setModalShow={setModalShow}/>
      <div id="table-display" className="table-display code">
        This is where your text table will appear.
      </div>
      <TableInputExampleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ErrorModal
        show={errorModalShow}
        onHide={() => {setErrorModalShow(false); setError(null)}}
        error={error}
      />
    </div>
  );
}

export default App;
