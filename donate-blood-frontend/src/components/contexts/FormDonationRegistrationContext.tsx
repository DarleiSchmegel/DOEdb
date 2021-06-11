import { createContext, ReactNode, useState } from 'react';

import { FormDonationRegistration } from '../formDonationRegistration'

interface FormDonationRegistrationData {
  ShowHideFormDonationRegistrationOpen: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const FormDonationRegistrationContext = createContext({} as FormDonationRegistrationData);

export function FormDonationRegistrationProvider({ 
  children ,
}: ChallengesProviderProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function ShowHideFormDonationRegistrationOpen() {
    if(!isFormOpen){
      setIsFormOpen(true)
    }else{
      setIsFormOpen(false)
    }
  }
  return(
    <FormDonationRegistrationContext.Provider
    value={{
        ShowHideFormDonationRegistrationOpen,
      }}
    >
      {children}

      {isFormOpen && <FormDonationRegistration />}
    </FormDonationRegistrationContext.Provider>
  )
}