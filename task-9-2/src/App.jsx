import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, checkToDo, unCheckToDo, deleteToDo } from './store/toDoListSlice';
import { increment, decrement } from './store/counterSlice';
import { useState } from 'react';
// modal import:
import MyModal from './store/Modal';
import WarningModal from './store/WarningModal';
import InfoModal from './store/InfoModal.jsx';

function App() {
    let toDoListData = useSelector((state) => state.toDoList); // grab the toDoList Store and put it into a variable for use in the app

    let count = useSelector((state) => state.count); //grab the count from the store and put it in a var
    const dispatch = useDispatch();
    const [addNoteInput, setAddNoteInput] = useState(''); // state for input of the input box
    const [editId, setEditId] = useState('');

    function handleSetEditId(id) {
        setEditId(id);
    }

    function handleSetAddNoteInput(e) {
        setAddNoteInput(e.target.value);
    }

    // modal functions:
    // ======================================
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // warning modal functions:
    // ======================================
    const [showWarning, setShowWarning] = useState(false);
    const handleWarningClose = () => setShowWarning(false);
    const handleWarningShow = () => setShowWarning(true);

    // info modal functions:
    // ======================================
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClose = () => setShowInfo(false);
    const handleInfoShow = () => setShowInfo(true);

    //dispatch addNote function
    // ======================================
    function dispatchAddNote() {
        // if the input is empty, alert the user
        if (addNoteInput.trim() === '') {
            handleWarningShow();
            return;
        }
        dispatch(increment());
        dispatch(addToDo({ text: addNoteInput, id: Date.now() }));
    }

    return (
        <div className="App">
            <div className="heading">
                <div className="input-section">
                    <h1>To Do's:</h1>
                    <button className="info-icon" onClick={handleInfoShow}>
                        ℹ️
                    </button>{' '}
                    <div className="input-and-button">
                        <input id="addNoteInput" type="text" value={addNoteInput} onChange={handleSetAddNoteInput} />
                        <button className="add-note-container" onClick={dispatchAddNote}>
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
            <div className="toDoList">
                <ul>
                    {toDoListData.map((item, key) => (
                        <li className="noteItem" key={key}>
                            <input
                                type="checkbox"
                                id={key}
                                name={key}
                                checked={item.completed} // set the initial value to the status of the "completed" boolean inside the redux state slice (toDoList)
                                onChange={(e) => {
                                    e.target.checked //if the boolean of the checked input is true? then dispatch the check reducer else dispatch the uncheck reducer
                                        ? dispatch(checkToDo({ id: item.id })) // then dispatch the check reducer
                                        : dispatch(unCheckToDo({ id: item.id })); // else dispatch the uncheck reducer
                                }}
                            />
                            <label
                                htmlFor={key}
                                style={{ textDecoration: item.completed ? 'line-through' : 'none' }} // Add strikethrough when item is completed
                            >
                                {item.text}
                            </label>
                            {/* if clicked grab the id of the item being clicked and show the modal  */}
                            <button
                                onClick={() => {
                                    handleSetEditId(item.id);
                                    handleShow();
                                }}
                            >
                                Edit
                            </button>
                            {/* manually pass the state of bootstrap modal with useState*/}
                            <MyModal handleShow={handleShow} handleClose={handleClose} show={show} id={editId} />

                            <button
                                onClick={() => {
                                    dispatch(decrement());
                                    dispatch(deleteToDo({ id: item.id }));
                                }}
                            >
                                DELETE
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="totalItems">Total To Do's: {count.value}</p>
            </div>
            {/* warning modal ======================================*/}
            <WarningModal show={showWarning} handleClose={handleWarningClose} />
            {/* info modal =========================================*/}
            <InfoModal show={showInfo} handleClose={handleInfoClose} />{' '}
        </div>
    );
}

export default App;
