import { FC, useState } from "react";
import styles from '../../styles/Home.module.css';

export default function Header () {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
}