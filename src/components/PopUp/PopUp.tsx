import "./PopUp.css";
import "bulma/css/bulma.min.css";
import edit from "../../icon/mode_24px.svg";
import remove from "../../icon/delete_24px.svg";
import save from "../../icon/save.svg"

interface Props {
  setIsOpen: (value: boolean) => void;
  setIsOpenModal: (value: boolean) => void;
}

export const PopUp: React.FC<Props> = ({ setIsOpen, setIsOpenModal }) => {
  return (
    <>
      <div className="wrapper">
        <button
          className="button js-modal-trigger"
          onClick={() => (setIsOpenModal(true), setIsOpen(false))}
        >
          <span className="icon">
            <img src={edit} alt="edit" />
          </span>
          <span className="button-text">Редагувати</span>
        </button>
        <button className="button">
          <span className="icon">
            <img src={save} alt="edit" />
          </span>
          <span className="button-text">Зберегти як файл</span>
        </button>
        <button className="button">
          <span className="icon">
            <img src={remove} alt="edit" />
          </span>
          <span className="button-text">Видалити</span>
        </button>
      </div>
    </>
  );
};
