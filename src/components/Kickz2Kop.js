import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./Kickz2Kop.css"

export const Kickz2Kop = () => {
   
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kickz2Kop_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kickz2Kop_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kickz2Kop_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kickz2Kop_customer") !== null)
      }
   
return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </>
)
}