import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock, User, Loader2, ArrowRight } from "lucide-react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );
      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-md p-10 rounded-[2.5rem] bg-card border border-border">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">
            Admin Access
          </h1>
          <p className="text-muted-foreground">
            Manage your universe from here.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              required
              type="text"
              placeholder="Username"
              className="w-full h-14 pl-14 pr-6 rounded-2xl bg-muted/50 border border-border focus:border-primary outline-none transition-all"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full h-14 pl-14 pr-6 rounded-2xl bg-muted/50 border border-border focus:border-primary outline-none transition-all"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            disabled={loading}
            className="w-full h-16 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
            {!loading && <ArrowRight size={20} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
