
import { createContext, ReactNode, useContext, useState } from 'react';

type checkMenuContextType = {
  whatIsOpen: string;
  setMenuSelected: (opt : string) => void;
  // logout: () => void;
};

type Props = {
  children: ReactNode;
};

const checkMenuContextDefaultValues: checkMenuContextType = {
  whatIsOpen: "home",
  setMenuSelected: (opt : string) => {},
};


const DasboardAppContext = createContext<checkMenuContextType>(checkMenuContextDefaultValues);



export function DasboardAppProvider({ children }: Props) {
  const [whatIsOpen, setWhatIsOpen] = useState<string>("home");

  const setMenuSelected = (opt : string) => {
    setWhatIsOpen(opt);
  };


  const value = {
    whatIsOpen,
    setMenuSelected,
  }

  return (
    <>
      <DasboardAppContext.Provider value={value}>
        {children}
      </DasboardAppContext.Provider>
    </>
  );
}


export function useDasboardMenu() {
  return useContext(DasboardAppContext);
}