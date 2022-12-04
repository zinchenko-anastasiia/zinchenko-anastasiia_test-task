import { PopUp } from "../PopUp";
import "bulma/css/bulma.min.css";
import icon from "../../icon/more_vert_24px.svg";
import { useState } from "react";
import { Pagination } from "../Pagination";
import { Modal } from "../Modal";
import { Users } from "../../store/slice";

export const Table: React.FC<Users> = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlerClick = (id: number) => {
    setIsOpen((value) => !value);
    setSelectedId(id);
  };

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
              <tr className="item-with-popup">
                <th>
                  {isOpen && selectedId === user.id && (
                    <PopUp
                      setIsOpen={setIsOpen}
                      setIsOpenModal={setIsOpenModal}
                    />
                  )}
                  <span
                    onClick={() => handlerClick(user.id)}
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
    </>
  );
};
