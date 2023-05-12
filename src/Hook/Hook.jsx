import { useState,useEffect } from "react"
export function Hook(){
    //antes del retorno configuramos nuestras variables de estado
    const[contador,setContador]=useState(0)

    //Programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])

    //funcion para decir que hacer cuando le den click al button
    function incrementarCuenta(){
        setContador(contador+1)
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-warning"onClick={incrementarCuenta}>Click</button >
                    <h2>La cuenta va en : {contador} </h2>
                </div>
            </div>
        </div>
        
        
        </>
    )
}