import { PopUp } from "./PopUp";
import "bulma/css/bulma.min.css";
import icon from "../icon/more_vert_24px.svg";
import { useEffect, useState } from "react";
import { data } from "../api/data";
import { Pagination } from "./Pagination/";
import { useDispatch } from "react-redux";
import * as usersAction from "../store/slice";
import { useAppSelector } from "../store/hooks";
import { Modal } from "../components/Modal";

export const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const { users } = useAppSelector((state) => state.users);

  const dispatch = useDispatch();

  const handlerClick = () => {
    setIsOpen((value) => !value);
  };

  useEffect(() => {
    dispatch(usersAction.actions.set(data));
  });

  const sortResult = users
    .slice(0)
    .sort(
      (a, b) =>
        a.createAt.localeCompare(b.createAt) || a.time.localeCompare(b.time)
    );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortResult.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>Назва</th>
            <th>URL</th>
            <th>Автор</th>
            <th>Створено</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <>
              <tr>
                <th>
                  <span
                    onClick={handlerClick}
                    className="js-modal-trigger"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={icon} alt="dot" />
                  </span>
                </th>
                <td>{user.name}</td>
                <td>{user.url}</td>
                <td>{user.author}</td>
                <td>
                  {user.createAt}
                  <br />
                  {user.time}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Pagination
        userPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />

      {isOpen && (
        <PopUp setIsOpen={setIsOpen} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};
