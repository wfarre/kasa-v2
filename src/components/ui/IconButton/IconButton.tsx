interface Props {
  onClick: () => void;
  icon: string;
  actionDescription: string;
  className: string;
}

const IconButton = (props: Props) => {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <button className={`btn ${props.className}`} onClick={handleClick}>
      <img src={props.icon} alt="" />
      <span hidden>{props.actionDescription}</span>
    </button>
  );
};

export default IconButton;
