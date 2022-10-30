import React from 'react'
import styles from "./todolist.module.css"
export default function DisplayList({listData,handleToggle,deleteCompletedTask,handleDeleteTask}) {
    const handleChange=(status,i)=>{
        if(status)
        {
            typeof handleToggle==="function"&&handleDeleteTask(i)
        }
        else{
            typeof handleToggle==="function"&&handleToggle(i)
        }
    }
  return (
    <div className={styles.container}>
      <h2>Display List</h2>
      <div className={styles.displayTaskContainer}>
        <div className={styles.rowHead}>
            <div>Title</div>
            <div>Description</div>
            <div>Status</div>
            <div>Action</div>
        </div>
        {
            listData?.map((item,i)=>
            <div key={i}>
                <div>{item.title}</div>
                <div>{item.desc}</div>
                <div>{item.status?"Completed":"Pending"}</div>
              <div>  <button onClick={()=>handleChange(item?.status,i)}>{item?.status?"Delete":"Mark as Completed"}</button></div>
                
            </div>
            )
        }
      </div>
      <div style={{margin:"4rem 0"}}>
        <button onClick={deleteCompletedTask}>Delete All Completed Task</button>
      </div>
    </div>
  )
}
