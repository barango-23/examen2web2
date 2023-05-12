import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import { Fans } from "../Fans/Fans"
import { Menu } from "../Shared/Menu/Menu"//traimos el menu del home para definirlo como ruta
import { Tienda } from "../Tienda/Tienda"
import { Footer } from "../Footer/Footer"
import { Carga } from "../Hook/Carga"
//importamos el router y demas carpetas//
export function Rutas(){
    return(
       <>
       <Menu/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members"element={<Members/>}/>
      <Route path="/tienda"element={<Tienda/>}/>
      <Route path="/fans"element={<Fans/>}/>
      <Route path="/hooks"element={<Carga/>}/>
   </Routes>
   
       </>

   //aprendimos a renderizar o abrir una ruta fija se usa route path="/nombre"
    )
}