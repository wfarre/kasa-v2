import { Link } from "react-router-dom";
import "./ErrorMessage.scss";

interface Props {
  status: number;
  errorText: string;
}

const ErrorMessage = (props: Props) => {
  return (
    <ul className="error">
      <li className="error__title">
        <h1 className="title">{props.status}</h1>
      </li>
      <li className="error__text">{props.errorText}</li>
      <li className="error__link">
        <Link className="link" to={"/"}>
          Retourner à la page d'acceuil
        </Link>
      </li>
    </ul>
  );
};

export default ErrorMessage;
