import React, { useState } from 'react'
import Header from '../Header/Header'
import DisplayList from './DisplayList'
import mockTodoData from './mockData'
import TodoForm from './TodoForm'

export default function MainTodoList() {
    let [listData, setListData] = useState([...mockTodoData()])
    const handleUpdateList = (val) => {
        console.log(val)
        val["status"] = false
        setListData([...listData, val])
    }
    const handleToggle=(i)=>{
        listData[i].status=true
        setListData([...listData])
    }
const handleDeleteTask=(i)=>{
    listData=listData.filter((_,index)=>i!==index)
    setListData([...listData])
}
const deleteCompletedTask=()=>{
    listData=listData?.filter((item,_)=>!item?.status)
    setListData([...listData])
}
    return (
        <div>
            <Header currentScreen={"Todo"} />
            <TodoForm handleUpdateList={handleUpdateList} />
            {Boolean(listData?.length )&& <DisplayList listData={listData} handleToggle={handleToggle} handleDeleteTask={handleDeleteTask} deleteCompletedTask={deleteCompletedTask}/>}
        </div>
    )
}
