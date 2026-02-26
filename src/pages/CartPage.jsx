import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4 text-center space-y-6">
                <div className="rounded-full bg-gray-100 p-12">
                    <ShoppingBag className="h-20 w-20 text-gray-300" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-black text-gray-900">Your cart is <span className="text-brand-orange">empty!</span></h2>
                    <p className="text-gray-500 font-medium">Add some delicious items to get started.</p>
                </div>
                <Link to="/menu" className="flex items-center space-x-2 rounded-2xl bg-gray-900 px-8 py-4 font-bold text-white transition-all hover:bg-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 active:scale-95">
                    <ArrowLeft className="h-5 w-5" />
                    <span>Browse Menu</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-black text-gray-900 italic mb-12">Your <span className="text-brand-orange underline decoration-wavy">Cart</span> ({totalItems})</h1>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Items List */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center space-x-6 rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex-1 space-y-1">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-black text-gray-900 leading-tight">{item.name}</h3>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.category}</p>

                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex items-center space-x-4 rounded-xl bg-gray-50 px-3 py-1.5 outline outline-1 outline-gray-100">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-gray-900"><Minus className="h-4 w-4" /></button>
                                        <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-gray-900"><Plus className="h-4 w-4" /></button>
                                    </div>
                                    <p className="text-lg font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 rounded-[40px] bg-gray-900 p-8 text-white shadow-2xl">
                        <h3 className="text-2xl font-black italic mb-8">Order <span className="text-brand-orange">Summary</span></h3>

                        <div className="space-y-4 text-sm font-medium border-b border-white/10 pb-8">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Delivery Fee</span>
                                <span className="text-brand-green font-bold">FREE</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Taxes</span>
                                <span>${(totalPrice * 0.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end pt-8 mb-10">
                            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                            <span className="text-4xl font-black text-brand-orange">${(totalPrice * 1.1).toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => navigate('/checkout')}
                            className="flex w-full items-center justify-center space-x-3 rounded-2xl bg-white py-4 text-gray-900 font-black uppercase tracking-widest transition-all hover:bg-brand-orange hover:text-white active:scale-95"
                        >
                            <span>Checkout Now</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <p className="mt-4 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            Secured by Stripe & PayPal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
