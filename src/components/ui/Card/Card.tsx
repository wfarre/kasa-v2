import "./Card.scss";

interface Props {
  cover: string;
  title: string;
}

const Card = (props: Props) => {
  return (
    <article className="card">
      <img src={props.cover} alt="" />
      <h2 className="card__title">{props.title}</h2>
    </article>
  );
};

export default Card;
