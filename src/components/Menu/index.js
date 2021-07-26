import {MenuContainer} from "./style";
import Logo from "../../assets/logo.png"

export default function Menu() {
  return (
    <MenuContainer>
      <header>
        <img src={Logo} alt="logo" />
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>
        <div>
          <button className="btn-white">button </button>
          <button>button &#129046;
          </button></div>
      </header>
    </MenuContainer>
  );
}