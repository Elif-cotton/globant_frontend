import "./NavButton.module.css";
import { Link } from "react-router-dom";
import styles from "./NavButton.module.css"; 

interface NavButtonProps {
  text: string;
  to: string;
}

function NavButton({ text, to }: NavButtonProps) {
  return <Link className={styles.navButton} to={to}>{text}</Link>;
}

export default NavButton;


/*function NavButton(props) {
  return <a href="#" className="nav-button">
    {props.text}
  </a>

}
export default NavButton;*/