import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    firstName: 'Anish',
    lastName: 'Parkhi',
    email: 'anishparkhi03@gmail.com',
    phone: '9607406484',
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
