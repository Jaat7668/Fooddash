import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register(email, password)) {
            navigate('/');
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 bg-gray-50">
            <div className="w-full max-w-md space-y-8 rounded-[40px] bg-white p-10 shadow-xl">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black text-gray-900 italic">Join <span className="text-brand-orange">FoodDash!</span></h2>
                    <p className="text-gray-500 font-medium text-sm">Create an account to start ordering</p>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-2xl bg-gray-50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 outline-none ring-1 ring-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-2xl bg-gray-50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 outline-none ring-1 ring-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-2xl bg-gray-50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 outline-none ring-1 ring-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group mt-6 relative flex w-full items-center justify-center rounded-2xl bg-gray-900 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-brand-orange hover:shadow-lg active:scale-95"
                    >
                        <span>Create Account</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="text-center pt-4">
                        <p className="text-sm font-bold text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-brand-orange hover:underline">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
