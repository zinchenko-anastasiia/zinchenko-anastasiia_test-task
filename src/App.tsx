import React, { useEffect } from "react";
import { Table } from "./components/Table";
import { useDispatch } from "react-redux";
import * as usersAction from "./store/slice";
import { useAppSelector } from "./store/hooks";
import { data } from "./api/data";

function App() {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction.actions.set(data));
  });
  
  return <Table users={users} />;
}

export default App;
