import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const MenuPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'all';

    const [activeCategory, setActiveCategory] = useState(categoryParam);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    useEffect(() => {
        let result = PRODUCTS;

        if (activeCategory !== 'all') {
            result = result.filter(p => p.category === activeCategory);
        }

        if (searchQuery) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(result);
    }, [activeCategory, searchQuery]);

    const handleCategoryChange = (catId) => {
        setActiveCategory(catId);
        setSearchParams(catId === 'all' ? {} : { category: catId });
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 italic">Our <span className="text-brand-orange underline decoration-wavy">Menu</span></h1>
                    <p className="text-gray-500 font-medium">Discover our wide range of deliciousness</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-[24px] bg-white py-3.5 pl-12 pr-4 text-sm font-bold shadow-sm ring-1 ring-gray-200 outline-none transition-all focus:ring-2 focus:ring-brand-orange/20"
                        />
                    </div>
                    <button className="inline-flex items-center justify-center space-x-2 rounded-[24px] bg-white px-6 py-3.5 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span>Filters</span>
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => handleCategoryChange('all')}
                    className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${activeCategory === 'all'
                            ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                            : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50'
                        }`}
                >
                    All Items
                </button>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${activeCategory === cat.id
                                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                                : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {cat.icon} {cat.name}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="rounded-full bg-gray-100 p-8">
                        <Search className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    <button
                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                        className="text-brand-orange font-bold hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuPage;
