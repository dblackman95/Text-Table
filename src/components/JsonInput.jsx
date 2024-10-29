import Button from 'react-bootstrap/Button';

const JsonInput = ({getTextTable, setModalShow}) => {


    return (
        <>
            <div className="table-input">
                <p>Enter your JSON table following the <span className="link" onClick={() => setModalShow(true)}>pattern</span> below.</p>
                <textarea id="table-json"></textarea>
            </div>
            <div className="table-button">
                <Button onClick={() => getTextTable()}>Get text table</Button>
            </div>
        </>
    );
}

export default JsonInput;