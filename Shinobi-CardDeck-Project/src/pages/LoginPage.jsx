import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock validation
    if (formData.email && formData.password.length >= 6) {
      console.log('Access Granted, Shinobi:', formData.email);
      navigate('/'); // Redirect to home after "login"
    } else {
      setError('Invalid credentials or password too short (min 6 chars).');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">
            Shinobi <span className="text-orange-600">Access</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">Enter your credentials to manage your squad.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-xs p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-500 transition-all"
              placeholder="naruto@konoha.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Secret Scroll (Password)
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-500 transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            Authorize Entry
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">
            Lost your scroll? <span className="text-orange-500 cursor-pointer hover:underline">Contact the Hokage.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;