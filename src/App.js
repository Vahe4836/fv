import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';



function App() {

  const dispatch = useDispatch();

  const current_text = useSelector((state) => {
    return state.currentText.text
  })

  return (
    <>
      <div>
        <h1>Text: {current_text}</h1>
        <input
          type="text"
          value={current_text}
          onChange={(evt) => {
            dispatch({
              type: "change_text",
              payload: {
                text: evt.target.value
              }
            })
          }}
        />
      </div>
    </>
  );
}



export default App;