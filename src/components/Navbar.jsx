import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { totalItems } = useCart();
    const { user } = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo & Location */}
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="rounded-lg bg-brand-orange p-1.5 shadow-lg shadow-brand-orange/20">
                                <ShoppingCart className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                Food<span className="text-brand-orange">Dash</span>
                            </span>
                        </Link>

                        <div className="hidden cursor-pointer items-center space-x-1 text-sm text-gray-500 hover:text-brand-orange md:flex border-l pl-8">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium underline decoration-brand-orange/30 underline-offset-4">Select Location</span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden flex-1 px-8 md:block">
                        <div className="relative max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Search for pizza, drinks, breads..."
                                className="w-full rounded-2xl bg-gray-100 py-2 pl-10 pr-4 text-sm font-medium text-gray-900 outline-none ring-1 ring-transparent transition-all focus:bg-white focus:ring-brand-orange/20"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-6">
                        <Link to="/login" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors">
                            <User className="h-5 w-5" />
                            <span>{user ? user.name : 'Sign In'}</span>
                        </Link>

                        <Link to="/cart" className="group relative flex items-center rounded-2xl bg-gray-900 px-4 py-2 text-white transition-transform hover:scale-105 active:scale-95">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            <span className="text-sm font-bold">Cart</span>
                            {totalItems > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-[10px] font-black italic text-white ring-4 ring-white shadow-lg">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
