import'./Fans.css'
export function Fans() {

    return (
        <>
            <section className='formulario '>


                <div className='login-form  '>
                    <h1>Entrar</h1>
                    <form action="">
                        <p>Usuario</p>
                        <input type="text" name="" id="" />
                        <p>Correo electronico</p>
                        <input type="email" name="email" id="" />
                        <a href=""><input type="submit" value="Enviar" className='btn btn-light bnn' /></a>

                    </form>
                </div>
            </section>

            <section className='formfan'>
                <div className="row">
                    <div className="col-md-12 ">

                        <form action="">
                            <div className="ask">
                                <h3>¿En que año comenzaron Plan B?</h3>
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Año 1999</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2015</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2003</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Año 2020</label> <br />
                            </div>

                            <div className="ask">
                                <h3>¿Cual fue la primera cancion de chencho y maldy juntos?</h3>
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Candy</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />Voy subiendo </label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />es un secreto </label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> </label> <br />
                            </div>

                            <div className="ask">
                                <h3>¿Con cual de estos artistas a hecho colaboracion plan b?</h3>
                                <label htmlFor=""><input type="checkbox" name="" id="" />Daddy yankee</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />Dalmata </label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />ñejo </label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Todas las anteriores</label> <br />
                            </div>

                            <div className="ask">
                                <h3>¿En que año dejo de sonar plan b?</h3>
                                <label htmlFor=""><input type="checkbox" name="" id="" /> 2015</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> 2022</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> 2018</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> 2006</label> <br />
                            </div>

                            <div className="ask">
                                <h3>¿Cual es la cancion mas escuchada de plan b ?</h3>
                                <label htmlFor=""><input type="checkbox" name="" id="" />Fanatica de lo sensual</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />Candy </label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" /> Mi vecinita</label> <br />
                                <label htmlFor=""><input type="checkbox" name="" id="" />Choca</label> <br />
                            </div>


                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}