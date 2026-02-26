import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            navigate('/order-confirmation');
        }, 2000);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-black text-gray-900 italic mb-12 flex items-center gap-4">
                <span>Finalize</span>
                <span className="h-1 flex-1 bg-gray-100 rounded-full"></span>
                <span className="text-brand-orange underline decoration-wavy">Checkout</span>
            </h1>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Form */}
                <form onSubmit={handlePlaceOrder} className="space-y-8">
                    {/* Address */}
                    <section className="space-y-6">
                        <div className="flex items-center space-x-3 text-gray-900">
                            <div className="rounded-xl bg-gray-100 p-2"><MapPin className="h-5 w-5" /></div>
                            <h2 className="text-xl font-black tracking-tight uppercase italic underline decoration-brand-orange/30">Shipping Address</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input type="text" placeholder="First Name" required className="rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                            <input type="text" placeholder="Last Name" required className="rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                            <input type="text" placeholder="Street Address" required className="sm:col-span-2 rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                            <input type="text" placeholder="City" required className="rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                            <input type="text" placeholder="ZIP Code" required className="rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                        </div>
                    </section>

                    {/* Payment */}
                    <section className="space-y-6">
                        <div className="flex items-center space-x-3 text-gray-900">
                            <div className="rounded-xl bg-gray-100 p-2"><CreditCard className="h-5 w-5" /></div>
                            <h2 className="text-xl font-black tracking-tight uppercase italic underline decoration-brand-orange/30">Payment Method</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {['Credit Card', 'PayPal', 'Cash'].map((method) => (
                                <label key={method} className="relative flex cursor-pointer items-center justify-center rounded-2xl bg-white p-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 has-[:checked]:bg-gray-900 has-[:checked]:text-white">
                                    <input type="radio" name="payment" value={method} className="peer sr-only" defaultChecked={method === 'Credit Card'} />
                                    <span>{method}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex w-full items-center justify-center space-x-3 rounded-[32px] bg-gray-900 py-6 text-lg font-black uppercase tracking-widest text-white transition-all hover:bg-brand-orange hover:shadow-2xl hover:shadow-brand-orange/30 active:scale-[0.98] disabled:opacity-70"
                    >
                        {isProcessing ? (
                            <div className="h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
                        ) : (
                            <>
                                <span>Place Your Order</span>
                                <ArrowRight className="h-6 w-6" />
                            </>
                        )}
                    </button>
                </form>

                {/* Order Preview */}
                <div className="hidden lg:block">
                    <div className="rounded-[40px] bg-white p-10 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                        <h3 className="text-2xl font-black italic mb-8">Order <span className="text-brand-orange underline decoration-brand-orange/20">Preview</span></h3>
                        <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-gray-900 truncate">{item.name}</p>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.quantity} x ${item.price}</p>
                                    </div>
                                    <p className="font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 pt-6 border-t border-gray-100">
                            <div className="flex justify-between text-sm font-bold text-gray-500">
                                <span>Total Items</span>
                                <span>{cart.length}</span>
                            </div>
                            <div className="flex justify-between text-2xl font-black text-gray-900">
                                <span>Payable Amount</span>
                                <span className="text-brand-orange">${(totalPrice * 1.1).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
