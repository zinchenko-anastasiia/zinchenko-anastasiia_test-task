import "bulma/css/bulma.min.css";
import "./EditForm.css";
import { useState } from "react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

export const EditForm = () => {
  const [name, setName] = useState("");
  const [nameAndLastname, setNameAndLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");
  const [contry, setContry] = useState("ua");
  const [language, setLanguage] = useState("");
  const [field, setField] = useState("");
  const [textField, setTextField] = useState("");

  const IsFullTextInput =
    name.trim().length > 0 &&
    nameAndLastname.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    group.trim().length > 0 &&
    contry.trim().length > 0 &&
    language.trim().length > 0 &&
    field.trim().length > 0 &&
    textField.trim().length > 0;

  const clear = () => {
    setName("");
    setNameAndLastname("");
    setEmail("");
    setPhone("");
    setGroup("");
    setLanguage("");
    setField("");
    setTextField("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clear();
  };

  const contryPhoneCode = [
    { id: 1, contry: "UA", code: "38" },
    { id: 2, contry: "US", code: "1" },
    { id: 3, contry: "PL", code: "48" },
  ];

  const contryCode = contryPhoneCode.find(
    (phone) => phone.contry === contry
  )?.code;

  const handleInput = (event: any) => {
    if (!contryCode) {
      throw new Error("Invalid number!");
    }
    const formattedPhoneNumber = formatPhoneNumber(event.target.value, contryCode);

    setPhone(formattedPhoneNumber);
  };

  return (
    <>
      <form className="modal-card-body" action="" onSubmit={handleSubmit}>
        <div className="wrappers">
          <div className="field">
            <label className="label">Назва</label>
            <div className="control">
              <input
                className="input inputCustom"
                type="text"
                placeholder="Статус посилки"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field">
              <label className="label">Ім’я та прізвище</label>
              <div className="control">
                <input
                  className="input inputCustom"
                  type="text"
                  placeholder="Через пробіл"
                  value={nameAndLastname}
                  onChange={(event) => setNameAndLastname(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="wrappers">
          <div className="field">
            <label className="label">Номер телефону</label>
            <div className="field has-addons">
              <p className="control">
                <span className="select">
                  <select
                    className="selectContry"
                    value={contry}
                    onChange={(event) => setContry(event.target.value)}
                  >
                    {contryPhoneCode.map((data) => (
                      <option>{data.contry}</option>
                    ))}
                  </select>
                </span>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="1 (999) 999-9999"
                  pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                  value={phone}
                  onChange={(event) => handleInput(event)}
                />
              </p>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input inputCustom"
                  type="email"
                  placeholder="e.g. alex@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="wrappers">
          <div className="field">
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="label">Група користувачів</label>
                  <div className="select is-fullwidth selectCustom">
                    <select
                      value={group}
                      onChange={(event) => setGroup(event.target.value)}
                    >
                      <option>Оберіть групу</option>
                      <option>Адміністратор</option>
                      <option>Хостес</option>
                      <option>Кур'єр</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body is-horizontal">
              <div className="field is-narrow">
                <div className="control">
                  <div className="field-label">
                    <label className="label">Мова</label>
                  </div>
                  <div className="select is-fullwidth selectCustom">
                    <select
                      value={language}
                      onChange={(event) => setLanguage(event.target.value)}
                    >
                      <option>Оберіть мову</option>
                      <option>Українська</option>
                      <option>Англійська</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrappers">
          <div className="field">
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <label className="label">Додати нове поле</label>
                  <div className="select is-fullwidth selectCustom">
                    <select
                      value={field}
                      onChange={(event) => setField(event.target.value)}
                    >
                      <option>Текст</option>
                      <option>Текст</option>
                      <option>Текст</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field">
              <label className="label">Значення поля</label>
              <div className="control">
                <input
                  className="input inputCustom"
                  type="text"
                  placeholder="Введіть значення"
                  value={textField}
                  onChange={(event) => setTextField(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="modal-footer">
          <button
            className="button is-info is-outlinedmt-2 button-small"
            type="submit"
            disabled={!IsFullTextInput}
          >
            Додати користувача
          </button>
        </footer>
      </form>
    </>
  );
};
