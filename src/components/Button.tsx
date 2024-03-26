import { FC, MouseEventHandler } from "react";

type Props = {
  text: string;
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
};

export default Button;
