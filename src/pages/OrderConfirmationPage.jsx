import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Truck, Package, Mail } from 'lucide-react';

const OrderConfirmationPage = () => {
    const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 bg-gray-50">
            <div className="w-full max-w-2xl text-center space-y-10 rounded-[48px] bg-white p-12 shadow-2xl shadow-gray-200/50">
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <div className="absolute inset-0 animate-ping rounded-full bg-brand-green/20"></div>
                    <CheckCircle className="relative h-20 w-20" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-gray-900 italic leading-tight">
                        Order <span className="text-brand-orange">Confirmed!</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">Thank you for ordering with us. Your food is being prepared!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-3xl bg-gray-50 p-6 space-y-2 border border-gray-100">
                        <Package className="h-6 w-6 text-brand-orange mx-auto" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order ID</p>
                        <p className="font-black text-gray-900">#{orderId}</p>
                    </div>
                    <div className="rounded-3xl bg-gray-50 p-6 space-y-2 border border-gray-100">
                        <Truck className="h-6 w-6 text-brand-orange mx-auto" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Delivery</p>
                        <p className="font-black text-gray-900">25-35 Mins</p>
                    </div>
                    <div className="rounded-3xl bg-gray-50 p-6 space-y-2 border border-gray-100">
                        <Mail className="h-6 w-6 text-brand-orange mx-auto" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Receipt</p>
                        <p className="font-black text-gray-900 italic">Sent to mail</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Link to="/" className="w-full sm:w-auto rounded-2xl bg-gray-900 px-8 py-4 font-black uppercase tracking-widest text-white transition-all hover:bg-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 active:scale-95">
                        Back to Home
                    </Link>
                    <Link to="/menu" className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 font-black uppercase tracking-widest text-gray-900 ring-1 ring-gray-100 transition-all hover:bg-gray-50 active:scale-95">
                        Order More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
