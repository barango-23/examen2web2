import { useState, useEffect } from "react"

export function Carga(){
    const[estaCargando,setestaCargando]=useState(true)
    const[tiempo,setTiempo]=useState(0)

    useEffect(function(){
        if(tiempo>0){
            setestaCargando(false)
        }else{
            setestaCargando(true)
        }
        setestaCargando(false)
    },[tiempo])

setTimeout(function(){
    setTiempo(1)
},5000)
    
if(estaCargando){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Estamos cargando..</h3>
                    <img src="https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/gif.webp?alt=media&token=e8514470-565b-4f39-a15a-6941a5984078" alt="" className="img-fluid mx-auto d-block" />
                </div>
            </div>
        </div>
        </>
    )
}else{
    return(
        <>
        <h4>Ya Cargamos BIENVENIDO..</h4>
        </>
    )
}
}