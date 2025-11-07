import React, { useState } from "react";
import '../src/dolphin-css/App.css'
export default function App() {
  const [theme, setTheme] = useState("light");
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const [glassVariant, setGlassVariant] = useState("glass-primary");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navItems = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "users", icon: "👥", label: "Users" },
    { id: "reports", icon: "📈", label: "Reports" },
    { id: "settings", icon: "⚙️", label: "Settings" },
    { id: "analytics", icon: "📊", label: "Analytics" },
    { id: "messages", icon: "💬", label: "Messages" }
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Admin Side Navigation */}
      <nav className={`admin-nav motion ${!sidenavOpen ? "collapsed" : ""} ${glassVariant}`}>
        {/* Header */}
        <div className="admin-nav-header">
          <div className="admin-nav-brand">
            <div className="admin-nav-logo">🌊</div>
            <div className="admin-nav-title">DolphinCSS</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="admin-nav-items">
          {navItems.map(item => (
            <a
              key={item.id}
              href="#"
              className={`admin-nav-item motion ${activeItem === item.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.id);
              }}
            >
              <div className="admin-nav-icon">{item.icon}</div>
              <div className="admin-nav-text">{item.label}</div>
              <div className="admin-nav-tooltip">{item.label}</div>
            </a>
          ))}
        </div>

        {/* User Section */}
        <div className="admin-nav-user">
          <div className="admin-nav-avatar">JD</div>
          <div className="admin-nav-user-info">
            <div className="admin-nav-user-name">John Doe</div>
            <div className="admin-nav-user-role">Administrator</div>
          </div>
        </div>

        {/* Glass Variant Selector */}
        <div className="p-4 border-t border-color-border">
          <h3 className="text-color-text text-sm font-semibold mb-2">Glass Style:</h3>
          <div className="flex flex-wrap gap-1">
            {["glass-primary", "glass-success", "glass-warning", "glass-danger", "glass-info"].map(variant => (
              <button
                key={variant}
                className={`px-2 py-1 rounded text-xs border ${
                  glassVariant === variant ? "border-color-primary bg-color-primary text-color-text" : "border-color-border text-color-text-muted"
                }`}
                onClick={() => setGlassVariant(variant)}
              >
                {variant.split("-")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          className="admin-nav-toggle"
          onClick={() => setSidenavOpen(!sidenavOpen)}
        >
          {sidenavOpen ? "←" : "→"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-color-text">Admin Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <button
              className="filled primary md motion hover-pulse"
              onClick={() => setSidenavOpen(!sidenavOpen)}
            >
              {sidenavOpen ? "← Collapse" : "→ Expand"}
            </button>
            
            <button
              className="outlined primary md motion"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Users", value: "12,458", change: "+12%", positive: true },
            { title: "Revenue", value: "$45,678", change: "+8%", positive: true },
            { title: "Orders", value: "2,345", change: "-3%", positive: false },
            { title: "Conversion", value: "4.8%", change: "+2%", positive: true }
          ].map((stat, index) => (
            <div key={index} className="card motion hover-wave">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-color-text-muted text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold text-color-text mt-2">{stat.value}</p>
                </div>
                <div className={`badge sm ${stat.positive ? "success" : "danger"} filled`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Glass Content */}
          <div className="lg:col-span-2">
            <div className={`glass glass-lg motion ${glassVariant}`}>
              <h2 className="text-color-text text-xl font-bold mb-4">Welcome to DolphinCSS</h2>
              <p className="text-color-text-muted mb-4">
                This is a modern admin dashboard built with DolphinCSS. Experience the power of 
                glass morphism, smooth animations, and customizable themes.
              </p>
              
              <div className="flex gap-4 mt-6">
                <button className="filled primary md">Get Started</button>
                <button className="outlined primary md">Learn More</button>
                 <button className="filled primary md">check</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-color-text font-semibold mb-4">Quick Actions</h3>
            
            {[
              { icon: "➕", label: "Add User", variant: "primary" },
              { icon: "📧", label: "Send Email", variant: "success" },
              { icon: "📊", label: "Generate Report", variant: "warning" },
              { icon: "⚙️", label: "Settings", variant: "info" }
            ].map((action, index) => (
              <button
                key={index}
                className={`w-full filled ${action.variant} md motion hover-pulse flex items-center gap-3`}
              >
                <span className="text-lg">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Active Section */}
        <div className="mt-8">
          <div className="card">
            <h3 className="text-color-text font-semibold mb-4">
              Active Section: <span className="text-color-primary capitalize">{activeItem}</span>
            </h3>
            <p className="text-color-text-muted">
              You are currently viewing the {activeItem} section. Use the navigation menu to explore other sections.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}