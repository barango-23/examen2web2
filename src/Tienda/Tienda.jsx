import'./Tienda.css'
export function Tienda() {

  let productos =[
    {
      nombre: "Camisa estampada Chencho",
      descripcion: "Camisa con la cara estampada de chencho con tela de algodon libre de absorbcion",
      fotos: ["https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/camisa.png?alt=media&token=7f0d5261-059e-43ea-8d86-22cb9fd026eb"],
      precio: 45000,
      popularidad: 4.5,
      id: 1
    },
    {
      nombre: "Sueter Xl Chencho x Maldy",
      descripcion: "Cami buso con cara de los agrupadores chencho y maldy autografiada por ellos, calidad 1.1 tela fria",
      fotos: ["https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/camibusp.jfif?alt=media&token=608b1598-4ced-4931-bb5e-51a7a6e5b300"],
      precio: 20000,
      popularidad: 4.5,
      id: 2
    },
    {
      nombre: "Buso CHENCHO",
      descripcion: "Conjunto  super comodo del artista urbano chencho ",
      fotos: ["https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/sudadera-plan-b-crosstown-nvy.jpg?alt=media&token=18d2ba12-2db2-4876-9065-b5335a3a3af5"],
      precio: 35000,
      popularidad: 4.5,
      id: 3

    },
    {
      nombre: "Buso tela fria de la agrupacion Chencho X Maldy",
      descripcion: "Buso tela fria super ligera,con comodidad garantizada talla Xl calidad 1.1",
      fotos: ["https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/buzo.jpg?alt=media&token=a357113b-03d9-4691-bb30-6cb4ff46d631"],
      precio: 12000,
      popularidad: 4.5,
      id: 4
    }
  ]
  return (
    <>
      <section className="row row-cols-2 row-cols-md-8 g-3">
        {




          productos.map(function (tienda) {
            return (



              <div key={tienda.id}>


                <div className="col">
                  <div className="card h-60">

                    <h3 className="text-center fw-bold">{tienda.nombre}</h3>
                    <img src={tienda.fotos} alt="foto" className="img-fluid w-100 h-100" />
                    <h3 className="text-center fw-bold text-warning">Descripcion: {tienda.descripcion}</h3>
                    <h3 className="text-center fw-bold">{tienda.popularidad}</h3>
                    <h3 className="text-center fw-bold text-success">Precio: {tienda.precio}</h3>

                  </div>




                </div>

              </div>




            )
          })
        }
      </section>
    </>
  )
}
