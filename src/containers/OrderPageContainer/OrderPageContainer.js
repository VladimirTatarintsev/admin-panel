import { Template } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { templateActionCreator } from "../../actionCreators/template";
import { getTemplateWithPseudo } from "../../selectors/template";

export const TemplateContainer = () => {
  const data = useSelector(getTemplateWithPseudo);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(templateActionCreator(value));
  };
  // ...
  return <Template onChange={handleChange}>{data}</Template>;
};
