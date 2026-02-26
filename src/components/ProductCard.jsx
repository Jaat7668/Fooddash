import React from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, updateQuantity } = useCart();
    const cartItem = cart.find((item) => item.id === product.id);

    return (
        <div className="group overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition-all hover:shadow-xl hover:shadow-gray-200/50">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm">
                    ${product.price}
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green"></span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                    </div>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {product.description || "Freshly prepared with the best ingredients for a perfect taste."}
                </p>

                <div className="pt-4">
                    {cartItem ? (
                        <div className="flex items-center justify-between rounded-2xl bg-gray-100 p-1">
                            <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-gray-900 shadow-sm transition-transform active:scale-90"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-sm font-bold">{cartItem.quantity}</span>
                            <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm transition-transform active:scale-90"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => addToCart(product)}
                            className="flex w-full items-center justify-center space-x-2 rounded-2xl bg-gray-900 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 active:scale-[0.98]"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
