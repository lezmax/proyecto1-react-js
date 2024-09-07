import './navBar.css';
import logo from '../../img';
import CartWidget from './CartWidget/CartWidget';
import { IoIosSearch } from "react-icons/io";
function navBar() {

    return (
        <div className='fixed'>
            <nav>
                <div>
                    <img src={logo} alt="camiones" />
                </div>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                        <span className='active'></span>
                    </li>
                    <li>
                        <a href="#">Tienda</a>
                        <span className='no-active'></span>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                        <span className='no-active'></span>
                    </li>
                    <span className='barra'></span>
                    <div className='icons-navbar'>
                        <IoIosSearch size={20} />
                        <CartWidget items="2" />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default navBar