import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import './dolphin-css/App.css'
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 transition-colors duration-500"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    >
      <h1 className="text-4xl font-bold text-center glow pulse">🐬 DolphinCSS Login</h1>

      <button
        onClick={toggleTheme}
        className="primary.filled px-5 py-2 rounded-xl font-semibold transition-all duration-300"
        style={{
          background: "var(--gradient-primary)",
          color: "var(--color-surface)",
        }}
      >
        Toggle {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-8 rounded-2xl w-full max-w-sm border shadow-lg transition-all duration-500"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          boxShadow: "0 0 25px var(--color-shadow)",
        }}
      >
        {/* Email Field */}
        <div className="floatinglabel input-icon-left primary glow ">
          <Mail />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="floatinglabel-input "
          />
          <label className="floatinglabel-label">Email Address</label>
        </div>

        {/* Password Field */}
        <div className="floatinglabel input-icon-left primary relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="floatinglabel-input"
          />
          <label className="floatinglabel-label">Password</label>
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-(--color-text-muted)"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="primary filled p-3"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
