import '../Members/Members.css'

export function Members() {
  let integrantes = [

    {
      nombre: "Orlando Javier Valle Vega",
      Nombre_Artistico: "Chencho Corleone",
      Rol: "Cantante",
      Foto: "https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/chencho.jpg?alt=media&token=29b118f0-71cf-495d-bab7-03cedd3fb78e",
      nacimiento: "19 de febrero de 1979",
      dato: "El cantante nació en Guayama, Puerto Rico. En su adolescencia jugaba baloncesto y de joven fue peluquero junto a su primo. Una vez se alcanzó la fama como músico empezó a formarse como administrador de empresas. En la actualidad, cuenta con una especialización en mercadeo. También es padre al igual que Maldy.",
      id: 1,
    },
    {
      nombre: "Edwin Vasquez Vega",
      Nombre_Artistico: "Maldy",
      Rol: "Cantante",
      Foto: "https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/maldy3.jpg?alt=media&token=04b88575-c3d6-4b33-9461-1561aebc318a",
      nacimiento: "29 de julio de 1982 ",
      dato: "El cantante nacio en guayama, puerto rico el 14 de marzo de 1982. A finales de los '90 creó junto a Chencho el dúo de reggaetón Chencho y Maldy, que luego cambiaría su nombre a Plan B.",
      id: 2,
    }
  ];
  //crear blanco y negro
  function quehagocuandosedeelevento(evento){
   (evento.target.classList.add("blancoynegro"))
   
  }
  //remover el color negro si quito el mouse
  function quehagocuandosedeelotroevento(evento){
    (evento.target.classList.remove("blancoynegro"))
  }
  //hacerle zoom al evento
  function hacerlezoomalevento(evento){
    (evento.target.classList.zoom("blancoynegro"))
  }
 
  return (
    <>
      {integrantes.map(function (integrante) {
        return (
          <div key={integrante.id}>
            <div className="row bg-dark text-white">
              <div className="col-12 col-md-6 card bg-dark">
                <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                <img
                  src={integrante.Foto}
                  alt="foto"
                  className="img-fluid w-100 h-100"
               onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento} onMouseOverCapture={hacerlezoomalevento} />
                <h3 className="text-center fw-bold text-info">
                  Nombre Artistico:{integrante.Nombre_Artistico}
                <h3 className="text-center fw-bold">Rol:{integrante.Rol}</h3>
                </h3>
                <h3 className="text-center fw-bold ">
                  {integrante.nacimiento}
                </h3>
            </div>
            <div className="col-md-6">

              <h3 className="Titulo">Datos del Artista</h3>
                <p className="dato">{integrante.dato}</p>
              </div>


            </div>
            <div className="col-12 col-md-6">
            </div>
          </div>
        );
      })}
    </>
  );
}
