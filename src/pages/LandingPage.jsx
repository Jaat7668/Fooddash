import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
    const featuredProducts = PRODUCTS.slice(0, 3);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-16 pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-bold text-brand-orange">
                            <span>🎉</span>
                            <span>20% Off on your first order!</span>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl leading-[1.1]">
                            Order your favorite <span className="text-brand-orange">Food</span> to your doorstep.
                        </h1>
                        <p className="max-w-xl text-lg text-gray-500 leading-relaxed mx-auto lg:mx-0">
                            Craving pizza? Thirsty for a cold drink? We've got you covered with the fastest delivery and freshest ingredients.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link to="/menu" className="flex items-center space-x-2 rounded-2xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-orange hover:shadow-xl hover:shadow-brand-orange/20 active:scale-95">
                                <span>Order Now</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="h-10 w-10 rounded-full border-4 border-white object-cover" alt="User" />
                                ))}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xs font-bold text-gray-900">
                                    +2k
                                </div>
                                <span className="ml-6 text-sm font-bold text-gray-900 underline underline-offset-4 decoration-brand-orange/30 italic whitespace-nowrap">Happy Customers</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <div className="absolute -inset-4 rounded-[40px] bg-brand-orange/5 blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
                            className="relative rounded-[40px] shadow-2xl shadow-gray-200"
                            alt="Delicious Pizza"
                        />
                        {/* Floating Badges */}
                        <div className="absolute -left-8 top-1/4 animate-bounce rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100 hidden sm:block">
                            <div className="flex items-center space-x-3">
                                <div className="rounded-full bg-brand-green/10 p-2 text-brand-green"><Clock className="h-5 w-5" /></div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Delivery</p>
                                    <p className="font-bold text-gray-900">30 Mins</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-8 bottom-1/4 animate-pulse rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100 hidden sm:block">
                            <div className="flex items-center space-x-3">
                                <div className="rounded-full bg-yellow-400/10 p-2 text-yellow-500"><Star className="h-5 w-5 fill-current" /></div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Rating</p>
                                    <p className="font-bold text-gray-900">4.9 (1.2k+)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="mb-12 flex items-end justify-between">
                    <div className="space-y-2 text-center sm:text-left">
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">What's on your mind?</h2>
                        <p className="text-gray-500 font-medium">Explore by categories</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/menu?category=${cat.id}`}
                            className="group flex flex-col items-center justify-center space-y-4 rounded-[32px] bg-white p-8 shadow-sm transition-all hover:bg-brand-orange hover:shadow-xl hover:shadow-brand-orange/20"
                        >
                            <span className="text-4xl transition-transform group-hover:scale-125 group-hover:rotate-12">{cat.icon}</span>
                            <span className="font-bold text-gray-900 group-hover:text-white">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Items */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex items-center justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Our Best Sellers</h2>
                        <p className="text-gray-500 font-medium">Order from our most loved items</p>
                    </div>
                    <Link to="/menu" className="hidden sm:flex items-center space-x-2 font-bold text-brand-orange hover:underline">
                        <span>Explore Menu</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {[
                            { icon: ShieldCheck, title: "Quality Assured", desc: "We use only the freshest and high-quality ingredients." },
                            { icon: Clock, title: "Super Fast Delivery", desc: "Delivery within 30 minutes or it's free." },
                            { icon: Star, title: "Best Offers", desc: "Get exclusive discounts and offers every week." }
                        ].map((item, id) => (
                            <div key={id} className="flex flex-col items-center text-center space-y-4">
                                <div className="rounded-2xl bg-white/10 p-4 text-brand-orange">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
