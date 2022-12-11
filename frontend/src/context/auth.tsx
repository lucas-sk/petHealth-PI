import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { AwaitContext } from "react-router/dist/lib/context";
import { http, httpAuth } from "../utils/http"

export const AuthContext: any = createContext({});

export const AuthProvider: any = ({ children }: any) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser: any = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {

        setUser(storageUser);
      }
    };

    loadingStoreData();

  }, [])


  const signIn = async (email: any, password: any) => {

    const response = await httpAuth.post("/auth", {

      email,
      password,
    });

    if (response.data.error) {

      alert(response.data.error);
    } else {
      setUser(response.data.user);
      httpAuth.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      localStorage.setItem("@Auth:token", response.data.token);
      localStorage.setItem("@Auth:user", response.data.user);
    };
  };


  return (

    <AuthContext.Provider value={{
      user,
      signed: !!user,
      signIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
