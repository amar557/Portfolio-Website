import { createContext, useState } from "react";

const ContexApi = createContext();
function AppData({ children }) {
  const [Isdark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  function handleNavbar() {
    setIsOpen(!isOpen);
  }
  const changeTheme = Isdark
    ? " bg-[#e7e7e7e0] transition-all duration-500 text-secondary"
    : "bg-[#000000e0]  transition-all duration-500 text-[#adadaf]";
  function HandleTheme() {
    return setIsDark(!Isdark);
  }
  return (
    <ContexApi.Provider
      value={{ Isdark, HandleTheme, changeTheme, isOpen, handleNavbar }}
    >
      {children}
    </ContexApi.Provider>
  );
}
export { ContexApi, AppData };
