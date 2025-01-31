import './Header.css'
function Header() {

    return (
     <div className='Header-container'>
        <ul className='Header-list'>
            <li className='header-icon'><i class="bi bi-house-door"></i></li>
            <li className='header-icon'><i class="bi bi-folder"></i></li>
            <li className='header-icon'><i class="bi bi-suitcase-lg"></i></li>
            <li className='header-icon'><i class="bi bi-wrench-adjustable"></i></li>
            <li className='header-icon'><i class="bi bi-pencil-square"></i></li>
        </ul>
     </div>
    )
  }
  
  export default Header
  