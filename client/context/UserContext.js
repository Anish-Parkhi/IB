import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    email: 'anishparkhi03@gmail.com',
    name: 'Anish Parkhi',
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
