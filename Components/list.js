import React, { useState } from 'react'
import { render } from 'react-dom';

const list = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  }

  let deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }


  let renderTask = <h2>No Tasks Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex justify-around m-3">
          <h5 className='font-semibold'>{t.title}</h5>
          <h6 className='font-semibold'>{t.desc}</h6>
          <button onClick={() => {
            deleteHandler(i)
          }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Remove
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <form className='flex justify-center items-center' onSubmit={submitHandler}>
        <input
          type='text'
          className='border-black border-2 m-5 px-5 py-2'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}>

        </input>
        <input type='text'
          className='border-black border-2 m-5 px-5 py-2'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        ></input>
        <button className='bg-black text-white py-2 px-4 rounded'>Add Task</button>
      </form>
      <hr></hr>
      <h1 className='text-center m-3 font-bold'>Your Tasks</h1>
      <div className='p-8 mx-8 rounded bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default list