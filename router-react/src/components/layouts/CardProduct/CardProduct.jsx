import React from 'react'
import { useNavigate } from 'react-router'
import { useCart } from "../../CartContext";
import { toast } from 'react-toastify'

const CardProducts = (props) => {
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleClick = () => {
        navigate(`/product/${encodeURIComponent(props.item.Name)}`)
    }

    const handleBagClick = (e) => {
        e.stopPropagation();
        addToCart(props.item)
        toast.success(`Added ${props.item.Name} to cart!`, {
            position: "top-right",
            autoClose: 2000,
        })
    }

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleClick}>
    <img src={props.item.image} className="card-img-top" alt="..." />
    <div className="card-body d-flex flex-column" style={{ position: 'relative', height: '100%' }}>
        <h5 className='fw-bold'>{props.item.Price} THB</h5>
        <h5 className="card-title">{props.item.Name}</h5>
        <p className="card-text">{props.item.Description}</p>
        <div className="mt-auto d-flex justify-content-end">
            <button 
                className="btn btn-success"
                onClick={handleBagClick}
            >
                Buy
            </button>
        </div>
    </div>
</div>

    )
}

export default CardProducts