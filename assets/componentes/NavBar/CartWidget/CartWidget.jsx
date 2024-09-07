import './CartWidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
function CartWidget({ items }) {

    return (
        <>
            <div className='CartWidget'>
                <AiOutlineShoppingCart size={20} />
                <span>{items}</span>
            </div>
        </>
    )
}

export default CartWidget