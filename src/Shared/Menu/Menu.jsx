import'./Menu.css'
import {Link } from "react-router-dom"
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><strong>Plan B</strong></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">inicio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/members">Integrantes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/tienda">Tienda</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/fans">Fans</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/hooks">Hook</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}