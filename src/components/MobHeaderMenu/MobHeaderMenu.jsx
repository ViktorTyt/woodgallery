import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Backdrop, CloseMenuBtn } from "./MobHeaderMenu.styled";

export default function MobHeaderMenu({ onMenu, children }) {
  return (
    <Backdrop>
      {children}
      <CloseMenuBtn onClick={onMenu}>Закрити</CloseMenuBtn>
    </Backdrop>
  );
}
