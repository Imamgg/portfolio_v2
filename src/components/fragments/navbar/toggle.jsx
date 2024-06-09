import { FaRegMoon, FaSun } from "react-icons/fa6";

const Toggle = ({ isDarkMode, setIsDarkMode, children }) => {
  return (
    <div className="flex cursor-pointer gap-7">
      {children}
      {isDarkMode ? (
        <FaSun
          size={24}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      ) : (
        <FaRegMoon
          size={24}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      )}
    </div>
  );
};

export default Toggle;
