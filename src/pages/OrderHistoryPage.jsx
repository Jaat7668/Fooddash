import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, ChevronRight, RotateCcw } from 'lucide-react';

const OrderHistoryPage = () => {
    const orders = [
        { id: 'ORD-7721', date: '2024-03-20', total: 45.50, status: 'Delivered', items: 3 },
        { id: 'ORD-8822', date: '2024-03-15', total: 22.90, status: 'Delivered', items: 1 },
        { id: 'ORD-9933', date: '2024-03-10', total: 67.20, status: 'Cancelled', items: 4 },
    ];

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 space-y-10">
            <div className="space-y-2">
                <h1 className="text-4xl font-black text-gray-900 italic">Order <span className="text-brand-orange underline decoration-wavy">History</span></h1>
                <p className="text-gray-500 font-medium">Manage and reorder your favorite meals</p>
            </div>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div key={order.id} className="group relative overflow-hidden rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl hover:shadow-gray-200/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex items-center space-x-6">
                                <div className={`rounded-2xl p-4 ${order.status === 'Delivered' ? 'bg-brand-green/10 text-brand-green' : 'bg-red-50 text-red-500'}`}>
                                    <Package className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-xl font-bold text-gray-900">Order #{order.id}</h3>
                                        <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-brand-green/10 text-brand-green' : 'bg-red-50 text-red-500'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4 mt-1 text-sm font-bold text-gray-400">
                                        <span className="flex items-center space-x-1"><Clock className="h-4 w-4" /> <span>{order.date}</span></span>
                                        <span>•</span>
                                        <span>{order.items} Items</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-4 sm:pt-0">
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Total Paid</p>
                                    <p className="text-2xl font-black text-gray-900">${order.total.toFixed(2)}</p>
                                </div>
                                <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white transition-transform hover:scale-110 active:scale-90 group-hover:bg-brand-orange">
                                    <RotateCcw className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute right-0 top-0 h-full w-1 bg-brand-orange transition-transform translate-x-full group-hover:translate-x-0"></div>
                    </div>
                ))}
            </div>

            <div className="rounded-[40px] bg-gray-900 p-10 text-center text-white">
                <h3 className="text-2xl font-black italic mb-4">Hungry <span className="text-brand-orange">Again?</span></h3>
                <p className="text-gray-400 font-medium mb-8 max-w-md mx-auto">Click below to explore our latest offers and fresh arrivals!</p>
                <Link to="/menu" className="inline-flex items-center space-x-3 rounded-2xl bg-white px-8 py-4 text-gray-900 font-black uppercase tracking-widest transition-all hover:bg-brand-orange hover:text-white active:scale-95">
                    <span>Go to Menu</span>
                    <ChevronRight className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

export default OrderHistoryPage;
