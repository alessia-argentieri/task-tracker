import { FC } from "react";
import Button from "./Button";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  const onClick = () => console.log("click");
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add task" color="steelblue" onClick={onClick} />
    </header>
  );
};

export default Header;
