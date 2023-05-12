import'./Footer.css'
export function Footer(){
    return(
        <>
        <section className='Footer'>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                    <h2>Brayan Arango</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/musicbbr-96019.appspot.com/o/logo.png?alt=media&token=90bbf40d-6d57-412b-8479-4d600e9ac693" alt="" className='imgf'/>
                    </div>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 text-center" >
                    <h2>Redes Sociales</h2>
                        <ul>
                            <li><i class="bi bi-instagram"> INSTAGRAM: brm_23</i></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="row">


                    <hr />
                    <div className="col-12 text-center">
                        <p>&copy; 2023 - Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}