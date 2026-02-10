const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Login to PhishGuard</h2>
        <input type="email" placeholder="Email" className="w-full border p-3 rounded mb-4" />
        <input type="password" placeholder="Password" className="w-full border p-3 rounded mb-6" />
        <button 
          onClick={() => { setIsLoggedIn(true); navigate('/'); }}
          className="w-full bg-blue-700 text-white py-3 rounded-md font-bold"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">Don't have an account? <span className="text-blue-600 cursor-pointer">Register</span></p>
      </div>
    </div>
  );
};