import style from "./Checkbox.module.css";

export const Checkbox = () => (
  <div className="checkbox-block">
    <div className="checkbox">
      <input className="checkbox__item" type="checkbox" id="check" />
      <label className="checkbox__label" for="check"></label>
    </div>
    <div className="checkbox">
      <input checked className="checkbox__item" type="checkbox" id="check-2" />
      <label className="checkbox__label" for="check-2"></label>
    </div>
  </div>
);
