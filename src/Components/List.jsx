import React, {useContext} from "react";
import '../Styles/Components/list.css'
import MyContext from "../MyContext";
import ItemOfList from "./ItemOfList";


function List({input, eyeState}){
    const {notes} = useContext(MyContext)
    return(
        <div className={'list'}>
            {eyeState ? notes.filter(el => el.text.indexOf(input) !== -1).map((el,i) => {return <ItemOfList el={el} index={i} key={el.id}/>})
                :
            notes.map((el, i) => {return <ItemOfList el={el} key={el.id} index={i}/>})}
        </div>
    )
}

export default List