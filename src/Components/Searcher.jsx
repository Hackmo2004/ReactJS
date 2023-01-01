import React, {useContext, useState} from "react";
import '../Styles/Components/searcher.css'
import {Button, Input} from "antd";
import MyContext from "../MyContext";
import {EyeFilled, EyeOutlined} from "@ant-design/icons";

function Searcher({funcToInput, eyeStateFunc}){
    const [inputValue,setInputValue] = useState('')
    const {addNote} = useContext(MyContext)
    const [eyeState,setEyeState] = useState(true)

    return(
        <div className={'searcherMain'}>
            {eyeState ? <EyeOutlined onClick={() => {setEyeState(!eyeState); eyeStateFunc(true)}}
                                     style={{marginRight: '7px'}} /> :
                <EyeFilled onClick={() => {setEyeState(!eyeState); eyeStateFunc(false)}}
                           style={{marginRight: '7px'}}/>}


         <Input value={inputValue} onChange={event => {
             setInputValue(event.target.value)
             funcToInput(event.target.value)}
         }/>
         <Button style={{marginLeft: '10px'}} onClick={() => {addNote(inputValue); setInputValue('')}} type={'primary'}>Add</Button>
        </div>
    )
}

export default Searcher