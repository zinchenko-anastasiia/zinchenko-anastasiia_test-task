import classNames from 'classnames';
import { EditForm } from '../../EditForm/EditForm';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
}

export const Modal: React.FC<Props> = ({ isOpenModal, setIsOpenModal }) => {

  return (
    <>
      {isOpenModal && (
        <div
          className={classNames('modal', {
            'is-active': isOpenModal,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpenModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <EditForm />
            </section>
          </div>
        </div>
      )}
    </>
  );
};