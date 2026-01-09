import React, { useState, useEffect } from 'react';
import './dolphin-css/App.css'
import { 
  Mail, Search, User, Lock, Eye, EyeOff, Check, X, 
  Moon, Sun, Palette, AlertCircle, Info,
  Phone, CreditCard, MapPin, Calendar, Clock,
  Upload, Camera, Plus, Minus
} from 'lucide-react';

const App = () => {
  // Radio Button States
  const [radioValue, setRadioValue] = useState('left');
  const [horizontalRadioValue, setHorizontalRadioValue] = useState('male');
  
  // Checkbox States
  const [checkboxState, setCheckboxState] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState({
    primary: true,
    secondary: false,
    success: true,
    warning: false,
    danger: false,
    info: true
  });
  
  // Input Field States
  const [floatingLabelText, setFloatingLabelText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchText, setSearchText] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  
  // Select States
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  
  // Toggle States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dolphin');
  const [showPassword, setShowPassword] = useState(false);
  
  // Validation States
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errors, setErrors] = useState({});
  
  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('inputs');

  // Theme and Dark Mode Logic
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-theme-mode', isDarkMode ? 'dark' : 'light');
    
    if (currentTheme === 'dolphin') {
      document.body.className = isDarkMode ? 'deep-ocean-gradient' : 'ocean-gradient';
    } else {
      document.body.className = isDarkMode ? 'himalayan-night-gradient' : 'himalayan-sunrise-gradient';
    }
  }, [isDarkMode, currentTheme]);

  // Validation Functions
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailText(value);
    setIsEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(validatePassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!emailText) newErrors.email = 'Email is required';
    else if (!validateEmail(emailText)) newErrors.email = 'Invalid email format';
    
    if (!password) newErrors.password = 'Password is required';
    else if (!validatePassword(password)) newErrors.password = 'Password must be at least 8 characters';
    
    if (!floatingLabelText) newErrors.floatingLabel = 'This field is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        alert('Form submitted successfully!');
        setIsLoading(false);
      }, 1500);
    }
  };

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'dolphin' ? 'danphe' : 'dolphin');
  };

  const renderRadioGroups = () => {
    return (
      <div className="space-y-6">
        <div className="radio-group">
          <label className="text-sm font-medium color-text-muted mb-2 block">Basic Radio Selection</label>
          <div className="radio-item">
            <input 
              type="radio" 
              id="left" 
              name="alignment" 
              value="left"
              checked={radioValue === 'left'}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <label htmlFor="left" className="radio-label">Left Align</label>
          </div>
          <div className="radio-item">
            <input 
              type="radio" 
              id="center" 
              name="alignment" 
              value="center"
              checked={radioValue === 'center'}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <label htmlFor="center" className="radio-label">Center Align</label>
          </div>
          <div className="radio-item">
            <input 
              type="radio" 
              id="right" 
              name="alignment" 
              value="right"
              checked={radioValue === 'right'}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <label htmlFor="right" className="radio-label">Right Align</label>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium color-text-muted mb-2 block">Gender Selection</label>
          <div className="radio-group horizontal">
            <div className="radio-item">
              <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="male"
                checked={horizontalRadioValue === 'male'}
                onChange={(e) => setHorizontalRadioValue(e.target.value)}
              />
              <label htmlFor="male" className="radio-label">Male</label>
            </div>
            <div className="radio-item">
              <input 
                type="radio" 
                id="female" 
                name="gender" 
                value="female"
                checked={horizontalRadioValue === 'female'}
                onChange={(e) => setHorizontalRadioValue(e.target.value)}
              />
              <label htmlFor="female" className="radio-label">Female</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCheckboxes = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="text-sm font-medium color-text-muted mb-2 block">Color Variants</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="primary"
                checked={checkboxStates.primary}
                onChange={(e) => setCheckboxStates({...checkboxStates, primary: e.target.checked})}
              />
              <span className="color-text">Primary</span>
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="secondary"
                checked={checkboxStates.secondary}
                onChange={(e) => setCheckboxStates({...checkboxStates, secondary: e.target.checked})}
              />
              <span className="color-text">Secondary</span>
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="success"
                checked={checkboxStates.success}
                onChange={(e) => setCheckboxStates({...checkboxStates, success: e.target.checked})}
              />
              <span className="color-text">Success</span>
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="warning"
                checked={checkboxStates.warning}
                onChange={(e) => setCheckboxStates({...checkboxStates, warning: e.target.checked})}
              />
              <span className="color-text">Warning</span>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium color-text-muted mb-2 block">Preferences</label>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={checkboxState}
              onChange={(e) => setCheckboxState(e.target.checked)}
            />
            <span className="color-text">Accept terms and conditions</span>
          </label>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={true}
              onChange={() => {}}
            />
            <span className="color-text">Enable notifications</span>
          </label>
        </div>
      </div>
    );
  };

  const renderSelects = () => {
    const countries = [
      { value: '', label: 'Select Country' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'np', label: 'Nepal' },
      { value: 'in', label: 'India' }
    ];

    const categories = [
      { value: '', label: 'Select Category' },
      { value: 'tech', label: 'Technology' },
      { value: 'design', label: 'Design' },
      { value: 'business', label: 'Business' }
    ];

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium color-text-muted mb-2 block">Country</label>
            <div className="select-wrapper">
              <select 
                className="select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium color-text-muted mb-2 block">Category</label>
            <div className="select-wrapper">
              <select 
                className="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium color-text-muted mb-2 block">Theme Variants</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="select-wrapper">
                <select className="select primary">
                  <option>Primary Theme</option>
                </select>
              </div>
              <p className="text-xs text-center color-text-muted">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="select-wrapper">
                <select className="select success">
                  <option>Success Theme</option>
                </select>
              </div>
              <p className="text-xs text-center color-text-muted">Success</p>
            </div>
            <div className="space-y-2">
              <div className="select-wrapper">
                <select className="select warning">
                  <option>Warning Theme</option>
                </select>
              </div>
              <p className="text-xs text-center color-text-muted">Warning</p>
            </div>
            <div className="space-y-2">
              <div className="select-wrapper">
                <select className="select danger">
                  <option>Danger Theme</option>
                </select>
              </div>
              <p className="text-xs text-center color-text-muted">Danger</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFloatingLabels = () => {
    return (
      <div className="space-y-6">
        {/* Basic Floating Label */}
        <div className="floatinglabel">
          <input
            type="text"
            id="floating-name"
            className="floatinglabel-input"
            placeholder=" "
            value={floatingLabelText}
            onChange={(e) => setFloatingLabelText(e.target.value)}
          />
          <label htmlFor="floating-name" className="floatinglabel-label">Full Name</label>
          {errors.floatingLabel && (
            <div className="text-xs text-[var(--color-danger)] mt-2">
              {errors.floatingLabel}
            </div>
          )}
        </div>

        {/* Floating Label with Left Icon */}
        <div className="floatinglabel input-icon-left relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
          <input
            type="email"
            id="floating-email"
            className="floatinglabel-input pl-10"
            placeholder=" "
            value={emailText}
            onChange={handleEmailChange}
          />
          <label htmlFor="floating-email" className="floatinglabel-label left-10">Email Address</label>
          {!isEmailValid && emailText && (
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-danger)] z-10 pointer-events-none" />
          )}
          {errors.email && (
            <div className="text-xs text-[var(--color-danger)] mt-2">
              {errors.email}
            </div>
          )}
        </div>

        {/* Floating Label with Both Icons */}
        <div className="floatinglabel input-icon-both password-toggle relative">
          <Lock className="icon-left w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
          <input
            type={showPassword ? "text" : "password"}
            id="floating-password"
            className="floatinglabel-input pl-10 pr-10"
            placeholder=" "
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="floating-password" className="floatinglabel-label left-10">Password</label>
          <button 
            type="button"
            className="icon-right absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          {errors.password && (
            <div className="text-xs text-[var(--color-danger)] mt-2">
              {errors.password}
            </div>
          )}
        </div>

        {/* Floating Label with Right Icon */}
        <div className="floatinglabel input-icon-right relative">
          <input
            type="text"
            id="floating-search"
            className="floatinglabel-input pr-10"
            placeholder=" "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <label htmlFor="floating-search" className="floatinglabel-label">Search</label>
          <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
        </div>

        {/* Color Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="floatinglabel primary">
            <input
              type="text"
              id="floating-primary"
              className="floatinglabel-input"
              placeholder=" "
            />
            <label htmlFor="floating-primary" className="floatinglabel-label">Primary Field</label>
          </div>

          <div className="floatinglabel gradient primary">
            <input
              type="text"
              id="floating-gradient"
              className="floatinglabel-input"
              placeholder=" "
            />
            <label htmlFor="floating-gradient" className="floatinglabel-label">Gradient Field</label>
          </div>
        </div>
      </div>
    );
  };

  const renderStandardLabels = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Standard Label */}
          <div className="standardlabel">
            <input
              type="text"
              id="standard-name"
              className="standardlabel-input"
              placeholder=" "
              value={floatingLabelText}
              onChange={(e) => setFloatingLabelText(e.target.value)}
            />
            <label htmlFor="standard-name" className="standardlabel-label">Username</label>
          </div>

          {/* Standard Label with Left Icon */}
          <div className="standardlabel input-icon-left relative">
            <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
            <input
              type="tel"
              id="standard-phone"
              className="standardlabel-input pl-10"
              placeholder=" "
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="standard-phone" className="standardlabel-label left-10">Phone Number</label>
          </div>
        </div>

        {/* Standard Label with Both Icons */}
        <div className="standardlabel input-icon-both relative">
          <CreditCard className="icon-left w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
          <input
            type="text"
            id="standard-card"
            className="standardlabel-input pl-10 pr-10"
            placeholder=" "
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <label htmlFor="standard-card" className="standardlabel-label left-10">Card Number</label>
          <div className="icon-right absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            <Info className="w-5 h-5 cursor-help" />
          </div>
        </div>

        {/* Standard Label with Right Icon */}
        <div className="standardlabel input-icon-right relative">
          <input
            type="text"
            id="standard-address"
            className="standardlabel-input pr-10"
            placeholder=" "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <label htmlFor="standard-address" className="standardlabel-label">Address</label>
          <MapPin className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none" />
        </div>
      </div>
    );
  };

  const renderRegularInputs = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Icon Input */}
          <div className="input-icon-left relative">
            <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-3 py-2 rounded-md bg-[var(--color-surface)]"
              value={floatingLabelText}
              onChange={(e) => setFloatingLabelText(e.target.value)}
            />
          </div>

          {/* Right Icon Input */}
          <div className="input-icon-right relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-3 pr-10 py-2 rounded-md bg-[var(--color-surface)]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Both Icons Input - Password Toggle */}
        <div className="input-icon-both password-toggle relative">
          <Lock className="icon-left w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full pl-10 pr-10 py-2 rounded-md bg-[var(--color-surface)]"
            value={password}
            onChange={handlePasswordChange}
          />
          <button 
            type="button"
            className="icon-right absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Email Input with Validation */}
        <div className="input-icon-left relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            placeholder="Email address"
            className={`w-full pl-10 pr-3 py-2 rounded-md bg-[var(--color-surface)] ${!isEmailValid && emailText ? '!border-[var(--color-danger)]' : ''}`}
            value={emailText}
            onChange={handleEmailChange}
          />
        </div>
      </div>
    );
  };

  const renderAdvancedInputs = () => {
    return (
      <div className="space-y-6">
        {/* File Upload */}
        <div>
          <label className="text-sm font-medium color-text-muted mb-2 block">File Upload</label>
          <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-6 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={() => {}}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 color-text-muted" />
              <p className="color-text">Click to upload or drag and drop</p>
              <p className="text-sm color-text-muted mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
            </label>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium color-text-muted mb-2 block">Date</label>
            <div className="input-icon-left relative">
              <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[var(--color-surface)]"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium color-text-muted mb-2 block">Time</label>
            <div className="input-icon-left relative">
              <Clock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <input
                type="time"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[var(--color-surface)]"
              />
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div>
          <label className="text-sm font-medium color-text-muted mb-2 block">Bio</label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 rounded-lg bg-[var(--color-surface)] resize-none"
            placeholder="Tell us about yourself..."
          />
          <p className="text-xs color-text-muted mt-1 text-right">0/500 characters</p>
        </div>
      </div>
    );
  };

  const renderFormActions = () => {
    return (
      <div className="space-y-6">
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
            isLoading 
              ? 'bg-[var(--color-border)] cursor-not-allowed' 
              : 'bg-[var(--color-primary)] text-white hover:opacity-90 hover:scale-[1.02]'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Check className="w-5 h-5" />
              Submit Form
            </>
          )}
        </button>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => {
              setFloatingLabelText('');
              setEmailText('');
              setPassword('');
              setSearchText('');
              setPhoneNumber('');
              setCardNumber('');
              setErrors({});
            }}
            className="py-2 px-4 rounded-lg border-2 border-[var(--color-border)] hover:bg-[var(--color-border)] transition-colors"
          >
            Clear Form
          </button>
          <button
            type="button"
            onClick={() => setIsLoading(!isLoading)}
            className="py-2 px-4 rounded-lg bg-[var(--color-info)] text-white hover:opacity-90 transition-colors"
          >
            {isLoading ? 'Stop Loading' : 'Test Loading'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-all duration-500 ${currentTheme === 'dolphin' ? 'theme-gradient-dolphin' : 'theme-gradient-danphe'}`}>
      
      {/* Theme Toggle & Container */}
      <div className={`p-4 md:p-8 space-y-8 max-w-7xl mx-auto rounded-xl glass ${isDarkMode ? 'bg-surface-dark' : 'bg-surface'}`}>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-[var(--color-border)] gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold color-text">🎨 Input Components Demo</h1>
            <span className="text-sm theme-color px-3 py-1 rounded-full glass-sm">
              {currentTheme === 'dolphin' ? '🌊 Dolphin' : '🇳🇵 Danphe'} Theme
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg flex items-center gap-2 bg-[var(--color-primary)] text-white shadow-md transition-all duration-300 hover:opacity-90 text-sm"
            >
              <Palette className="w-4 h-4" />
              {currentTheme === 'dolphin' ? '🇳🇵 Danphe' : '🌊 Dolphin'}
            </button>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 rounded-lg flex items-center gap-2 glass border border-[var(--color-border)] color-text transition-all duration-300 hover:bg-[var(--color-border)] text-sm"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 rounded-lg bg-[var(--color-surface)] p-1">
          {['inputs', 'radio', 'checkboxes', 'selects', 'advanced', 'actions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 capitalize ${
                activeTab === tab 
                  ? 'bg-[var(--color-primary)] text-white shadow-md' 
                  : 'hover:bg-[var(--color-border)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="space-y-8">
          {/* Current Tab Title */}
          <h2 className="text-xl md:text-2xl font-bold color-text capitalize">
            {activeTab === 'inputs' && '📝 Text Inputs'}
            {activeTab === 'radio' && '🔘 Radio Buttons'}
            {activeTab === 'checkboxes' && '✅ Checkboxes'}
            {activeTab === 'selects' && '📋 Select Dropdowns'}
            {activeTab === 'advanced' && '⚡ Advanced Inputs'}
            {activeTab === 'actions' && '🎯 Form Actions'}
          </h2>

          {/* Tab Content */}
          <div className="p-6 rounded-xl glass border border-[var(--color-border)]">
            {activeTab === 'inputs' && (
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold mb-4 color-text flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[var(--color-primary)] text-white">
                      1
                    </span>
                    Floating Label Inputs
                  </h3>
                  {renderFloatingLabels()}
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-4 color-text flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[var(--color-secondary)] text-white">
                      2
                    </span>
                    Standard Label Inputs
                  </h3>
                  {renderStandardLabels()}
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-4 color-text flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[var(--color-success)] text-white">
                      3
                    </span>
                    Regular Inputs with Icons
                  </h3>
                  {renderRegularInputs()}
                </section>
              </div>
            )}

            {activeTab === 'radio' && renderRadioGroups()}
            {activeTab === 'checkboxes' && renderCheckboxes()}
            {activeTab === 'selects' && renderSelects()}
            {activeTab === 'advanced' && renderAdvancedInputs()}
            {activeTab === 'actions' && renderFormActions()}
          </div>

          {/* Live Preview */}
          <div className="p-6 rounded-xl glass border border-[var(--color-border)]">
            <h3 className="text-lg font-semibold mb-4 color-text">👁️ Live Preview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium color-text-muted mb-2">Form Data</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="color-text-muted">Name:</span> {floatingLabelText || 'Empty'}</p>
                  <p><span className="color-text-muted">Email:</span> {emailText || 'Empty'}</p>
                  <p><span className="color-text-muted">Password:</span> {password ? '••••••••' : 'Empty'}</p>
                  <p><span className="color-text-muted">Radio Selected:</span> {radioValue}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium color-text-muted mb-2">Validation Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isEmailValid && emailText ? 'bg-[var(--color-success)]' : !emailText ? 'bg-[var(--color-border)]' : 'bg-[var(--color-danger)]'}`}></div>
                    <span>Email: {isEmailValid && emailText ? 'Valid' : !emailText ? 'Not entered' : 'Invalid'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isPasswordValid && password ? 'bg-[var(--color-success)]' : !password ? 'bg-[var(--color-border)]' : 'bg-[var(--color-danger)]'}`}></div>
                    <span>Password: {isPasswordValid && password ? 'Valid' : !password ? 'Not entered' : 'Too short'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${Object.keys(errors).length === 0 ? 'bg-[var(--color-success)]' : 'bg-[var(--color-danger)]'}`}></div>
                    <span>Form Errors: {Object.keys(errors).length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm color-text-muted">
            <div>
              <p>Current Theme: <span className="theme-color font-medium">{currentTheme === 'dolphin' ? '🌊 Dolphin' : '🇳🇵 Danphe'}</span></p>
              <p>Mode: <span className="font-medium">{isDarkMode ? '🌙 Dark' : '☀️ Light'}</span></p>
            </div>
            <div className="md:text-right">
              <p>✅ Simple & Clean Design</p>
              <p>✅ Fixed Icon Positioning</p>
              <p>✅ Working Validation</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;