import { useContext, useEffect } from "react"
import { CategoryContext } from "../../Context/ChageCategory.context"


export default function Navbar() {

    const {category , setCategory} = useContext(CategoryContext);
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-secondary-subtle">
  <div className="container-fluid">
    <a className="badge bg-black fs-4 text-decoration-none" >News Mag</a>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white" />
    </button>
    <div className="collapse navbar-collapse px-md-4" id="navbarNav">
      <ul className="navbar-nav  mt-2 mt-md-0">
        <li className="nav-item">
          <a className="nav-link text-black" onClick={()=>setCategory('all')} style={{cursor : "pointer"}} >All News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" onClick={()=>setCategory('sports')} style={{cursor : "pointer"}} >Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" onClick={()=>setCategory('health')} style={{cursor : "pointer"}} >Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" onClick={()=>setCategory('business')} style={{cursor : "pointer"}} >Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" onClick={()=>setCategory('technology')} style={{cursor : "pointer"}} >Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
   </>
  )
}
