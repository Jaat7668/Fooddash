import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 pb-8 text-gray-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2 text-white">
                            <span className="text-2xl font-bold">
                                Food<span className="text-brand-orange">Dash</span>
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed">
                            Delivering happiness to your doorstep with the freshest pizzas, crispiest breads, and coolest drinks.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 font-bold text-white">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carrers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-6 font-bold text-white">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 font-bold text-white">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-3">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4" />
                                <span>support@fooddash.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-800 pt-8 text-center text-xs">
                    <p>© {new Date().getFullYear()} FoodDash. Designed with ❤️ for Pizza Lovers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
