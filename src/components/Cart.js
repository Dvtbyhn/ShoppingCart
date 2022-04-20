import React from 'react'

export default function Cart(props) {



    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * -.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice


    return (
        <aside className='block col-1'>
            <h2>Sepet </h2>
            <div>
                {cartItems.length === 0 && <div>Cart Boş</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button onClick={() => onAdd(item)} className="add"> + </button>
                            <button onClick={() => onRemove(item)} className="remove"> - </button>
                        </div>
                        <div>
                            {item.qty} x $ {item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                    
                    <div className='row'>
                        <div className='col-2'>Ürün Fiyatı</div>
                        <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>Vergi</div>
                        <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>Kargo Ücreti</div>
                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'><strong>Toplam Ödeme</strong> </div>
                        <div className='col-1 text-right'><strong> ${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>


                    <div className='row'>
                        <button onClick={() => alert("Ödeme Tamamlandı")}>
                          Ödeme 
                        </button>

                    </div>
                    
                </>
            )}
        </aside>
    )
}
