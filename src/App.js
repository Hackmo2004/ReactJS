import React, {useState} from "react";
import MainComponent from "./Pages/MainComponent";
import {Route, Routes} from "react-router-dom";
import MyContext from "./MyContext";
import './Styles/app.css'
import {Button} from "antd";

function App() {
    const [notes,setNotes] = useState([
        {id: 0, text: 'note1'},
        {id: 1, text: 'note2'}
    ])

    const [stateModal, setStateModal] = useState(false)

    function addNote(textInNote){
        if(textInNote !== '') {
            const temp = {id: Date.now(), text: textInNote}
            setNotes([...notes, temp])
        }
       else{
           setStateModal(true)
        }
    }
    function delNote(item){
        setNotes(notes.filter(el => el.id !== item))
    }
  return (
      <MyContext.Provider value={{notes, addNote, delNote}}>
       <div>
         <Routes>
           <Route path={'/'} element={<MainComponent />}/>
         </Routes>
       </div>
          {stateModal && (
              <div className={'modal'}>
              <div className={'backgroundOfModal'} onClick={() => setStateModal(false)}/>
              <div className={'modalText'}><div style={{fontSize: '20px'}}>Не все указано</div>
                  <Button type={'primary'} onClick={() => setStateModal(false)}>Ok</Button>
              </div>
          </div>)}
      </MyContext.Provider>
  );
}

export default App;
