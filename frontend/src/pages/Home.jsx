import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const stats = [
        { label: 'Status', value: 'Active', color: 'bg-green-500', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Role', value: 'User', color: 'bg-indigo-500', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { label: 'Security', value: 'High', color: 'bg-purple-500', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    ];

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <nav className="border-b border-white/5 bg-dark-900/50 backdrop-blur-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight">Auth<span className="text-indigo-400">Boilerplate</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-sm font-medium text-white">{user?.email}</span>
                                <span className="text-xs text-gray-400">Logged in</span>
                            </div>
                            <Button variant="secondary" onClick={handleLogout} className="!w-auto !py-2 !px-4 !text-xs !rounded-lg">
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
                {/* Welcome Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-gray-400">Welcome to your secure personal area.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <Card key={index} className="glass-hover flex items-center p-6 !rounded-xl">
                            <div className={`w-12 h-12 rounded-xl ${stat.color}/20 flex items-center justify-center mr-4`}>
                                <svg className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Info) */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card title="Account Details" className="h-full">
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email Address</p>
                                        <p className="font-medium">{user?.email}</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Verified</span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <p className="text-sm text-gray-400 mb-1">User ID</p>
                                    <p className="font-mono text-sm text-gray-300">{user?.id || '7f8c9d0a-1b2e-4b3c-9d8e-7f8c9d0a1b2e'}</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <h4 className="text-sm font-medium text-gray-300 mb-4">Recent Activity</h4>
                                <div className="space-y-4">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                            <p className="text-sm text-gray-400 flex-grow">Successful login detected</p>
                                            <span className="text-xs text-gray-500">Just now</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column (Actions) */}
                    <div className="space-y-8">
                        <Card title="Quick Actions">
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white">Edit Profile</span>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>

                                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </div>
                                        <span className="text-sm text-gray-300 group-hover:text-white">Change Password</span>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </Card>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2">Upgrade Plan</h3>
                                <p className="text-indigo-100 text-sm mb-4">Unlock premium features and analytics.</p>
                                <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">
                                    View Plans
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
