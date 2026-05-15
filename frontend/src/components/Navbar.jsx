import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav className='navbar'>

      <h2>🦺 OJOS DIGITALES</h2>

      <div>

        <Link to='/'>Inicio</Link>

        <Link to='/detector'>Detector IA</Link>

      </div>

    </nav>
  )
}

export default Navbar