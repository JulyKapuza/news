import { createContext, useState } from 'react';

interface AuthContextType {
  user: "Anna";
  signin: (newUser: any, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: "Anna",
  signin: () => {},
  signout: () => {}
});



type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: any, cb: () => void) => {
    setUser(newUser);
    cb();
  };

  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value: AuthContextType = { user, signin, signout };

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};




