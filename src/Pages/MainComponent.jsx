import React, {useState} from "react";
import '../Styles/Pages/MainComponent.css'
import Searcher from "../Components/Searcher";
import List from "../Components/List";

function MainComponent(){
    const [input, setInput] = useState('')
    const [eye, setEye] = useState(false)
    function getInput(value){
        setInput(value)
    }
    function getEyeState(state){
        setEye(state)
    }
    return(
        <div className={'mainComponent'}>
         <div className={'box'}>
             <Searcher funcToInput={getInput} eyeStateFunc={getEyeState}/>
             <List input={input} eyeState={eye}/>
         </div>
        </div>
    )
}

export default MainComponent