import { FC } from "react";
import Button from "./Button";

type Props = {
  title: string;
  onAdd: () => void;
  showAddForm: boolean;
};

const Header: FC<Props> = ({ title, onAdd, showAddForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAddForm ? "Close" : "Add task"}
        color={showAddForm ? "red" : "steelblue"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
