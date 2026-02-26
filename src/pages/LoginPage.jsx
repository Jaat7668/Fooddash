import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/');
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="w-full max-w-md space-y-8 rounded-[40px] bg-white p-10 shadow-xl shadow-gray-200/50">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black text-gray-900 italic tracking-tight">Welcome <span className="text-brand-orange">Back!</span></h2>
                    <p className="text-gray-500 font-medium text-sm">Sign in to continue your food journey</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-2xl bg-gray-50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 outline-none ring-1 ring-gray-200 transition-all focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
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
                                    className="w-full rounded-2xl bg-gray-50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 outline-none ring-1 ring-gray-200 transition-all focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm font-bold text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm font-bold text-brand-orange hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="group relative flex w-full items-center justify-center rounded-2xl bg-gray-900 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 active:scale-95"
                    >
                        <span>Sign In</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="text-center">
                        <p className="text-sm font-bold text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-brand-orange hover:underline">Create Account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
