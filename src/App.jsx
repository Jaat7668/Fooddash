import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/menu" element={<MenuPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/checkout" element={<CheckoutPage />} />
                                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                                <Route path="/order-history" element={<OrderHistoryPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
