import { createContext } from "react";
import { Pet } from "../../types/Pets";
import { User } from "../../types/User";


export type AuthContextType = {
  user: User | null;
  pet: Pet | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}


export const AuthContext = createContext<AuthContextType>(null!);