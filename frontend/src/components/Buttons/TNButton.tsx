import React from "react";
import "../../styles/components/Buttons/tnbuttons.css";

type TNButtonProps = {
  label: string;
  onClick?: () => void;
};

const TNButton: React.FC<TNButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button className="neumorphic-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default TNButton;
