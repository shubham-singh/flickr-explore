import Searchbar from "../search/Searchbar";
import { useTheme } from "../theme/ThemeContext";
import { ReactComponent as NightIcon } from "../assets/icons/NightIcon.svg";
import { ReactComponent as DayIcon } from "../assets/icons/DayIcon.svg";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themeSwitcher = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav
      style={{ top: "0" }}
      className="nav nav-classic pt-xs pb-xs"
    >
      <Searchbar />
      <div className="mr-xl pointer hide-m" onClick={themeSwitcher}>
        {theme === "dark" ? <DayIcon /> : <NightIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
