import React, {useContext, useState} from "react";
import '../Styles/Components/itemOfList.css'
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import MyContext from "../MyContext";

function ItemOfList({el, index}){
    const {delNote} = useContext(MyContext)
    const [modalState, setModalState] = useState(false)
    return(
        <div>
            <div className={'item'}>
            {index + 1 + ':'+ el.text}
            <Button style={{marginLeft: '30px'}} onClick={() => setModalState(!modalState)}><DeleteOutlined /></Button>
            </div>
            {modalState && (
                <div className={'modalItem'}>
                    <div className={'backgroundOfModal'} onClick={() => setModalState(!modalState)}/>
                    <div className={'textInModalItem'}>Вы действительно хотите удалить запись: <div>{ el.text }?</div>
                        <div className={'btnInModalItem'}>
                            <div/>
                            <div>
                                <Button type={'primary'} onClick={() => delNote(el.id)}>Да</Button>
                                <Button onClick={() => setModalState(!modalState)} style={{marginLeft: '7px'}}>Нет</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemOfList
