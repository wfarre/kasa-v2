import "./Hero.scss";

interface Props {
  title?: string;
  bgImg: string;
}

const Hero = (props: Props) => {
  return (
    <header className="hero">
      <img src={props.bgImg} alt="" className="bg-img" />
      <h1 className="title">{props.title}</h1>
    </header>
  );
};

export default Hero;
