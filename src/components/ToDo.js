import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from 'react-router-dom';

function ToDo({id, text}) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
    };

    
  return (
  <li>
    <Link to={`/${id}`}>
    {text} <button onClick={onClick}>DEL</button>
    </Link>
  </li>
  );
}

export default ToDo;