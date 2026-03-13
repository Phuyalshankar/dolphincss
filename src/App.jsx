// App.jsx - Modal Test with Global Classes
import React, { useState, useEffect } from 'react';
import './dolphin-css/App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dolphin');
  const [currentMode, setCurrentMode] = useState('light');
  const [activeOverlay, setActiveOverlay] = useState(null);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('basic');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dolphin';
    const savedMode = localStorage.getItem('mode') || 'light';
    
    setTheme(savedTheme);
    setMode(savedMode);
  }, []);

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const setMode = (mode) => {
    document.documentElement.dataset.themeMode = mode;
    setCurrentMode(mode);
    localStorage.setItem('mode', mode);
  };

  const testOverlay = (type) => {
    setActiveOverlay(type);
    setTimeout(() => setActiveOverlay(null), 2000);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-8" 
         style={{ 
           backgroundColor: 'var(--color-surface-alt)',
           color: 'var(--color-text)'
         }}>
      
      {/* Theme Controls */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span style={{ color: 'var(--color-primary)' }}>DolphinCSS</span> Test
          </h1>
          
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('dolphin')}
              className="px-3 py-1 rounded"
              style={{
                backgroundColor: currentTheme === 'dolphin' ? 'var(--color-primary)' : 'var(--color-surface)',
                color: currentTheme === 'dolphin' ? 'white' : 'var(--color-text)',
                border: '1px solid var(--color-border)'
              }}
            >
              Dolphin
            </button>
            <button
              onClick={() => setTheme('danphe')}
              className="px-3 py-1 rounded"
              style={{
                backgroundColor: currentTheme === 'danphe' ? 'var(--color-primary)' : 'var(--color-surface)',
                color: currentTheme === 'danphe' ? 'white' : 'var(--color-text)',
                border: '1px solid var(--color-border)'
              }}
            >
              Danphe
            </button>
            <button
              onClick={() => setMode(currentMode === 'light' ? 'dark' : 'light')}
              className="px-3 py-1 rounded"
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)'
              }}
            >
              {currentMode === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          <div className="flex gap-4">
            <span>Theme: <strong style={{ color: 'var(--color-primary)' }}>{currentTheme}</strong></span>
            <span>Mode: <strong>{currentMode}</strong></span>
          </div>
        </div>
      </div>

      {/* ===== MODAL TEST SECTION ===== */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          🎯 Modal Test - Global Classes
        </h2>

        {/* Modal Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button 
            onClick={() => openModal('basic')}
            className="filled primary btn-lg"
          >
            Basic Modal
          </button>
          
          <button 
            onClick={() => openModal('success')}
            className="filled success btn-lg"
          >
            Success Modal
          </button>
          
          <button 
            onClick={() => openModal('warning')}
            className="filled warning btn-lg"
          >
            Warning Modal
          </button>
          
          <button 
            onClick={() => openModal('danger')}
            className="filled danger btn-lg"
          >
            Danger Modal
          </button>
          
          <button 
            onClick={() => openModal('outlined')}
            className="outlined primary btn-lg"
          >
            Outlined Modal
          </button>
          
          <button 
            onClick={() => openModal('gradient')}
            className="gradient primary btn-lg"
          >
            Gradient Modal
          </button>
          
          <button 
            onClick={() => openModal('glass')}
            className="glass btn-lg"
            style={{ color: 'var(--color-text)' }}
          >
            Glass Modal
          </button>
          
          <button 
            onClick={() => openModal('glow')}
            className="filled info btn-lg glow"
          >
            Glow Modal
          </button>
        </div>

        {/* Modal Examples Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Size Examples */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="font-bold mb-2">Sizes</h3>
            <div className="space-y-2">
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-surface-alt)' }}>modal-panel.sm → small</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-surface-alt)' }}>modal-panel.md → medium</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-surface-alt)' }}>modal-panel.lg → large</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-surface-alt)' }}>modal-panel.xl → extra large</div>
            </div>
          </div>

          {/* Color Examples */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="font-bold mb-2">Colors</h3>
            <div className="space-y-2">
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>primary</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-success)', color: 'white' }}>success</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-warning)', color: 'white' }}>warning</div>
              <div className="p-2 rounded" style={{ backgroundColor: 'var(--color-danger)', color: 'white' }}>danger</div>
            </div>
          </div>

          {/* Variants Examples */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="font-bold mb-2">Variants</h3>
            <div className="space-y-2">
              <div className="p-2 rounded border-2 border-primary">outlined.primary</div>
              <div className="p-2 rounded gradient primary text-white">gradient.primary</div>
              <div className="p-2 rounded glass">glass</div>
              <div className="p-2 rounded glow" style={{ boxShadow: 'var(--glow-primary)' }}>glow</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OVERLAY TEST SECTION ===== (Same as before) */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          🎨 Overlay Test
        </h2>

        {/* Simple Overlay Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Basic Overlay on Div */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('basic')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-border)'
              }}
            >
              <div className="text-3xl mb-2">📦</div>
              <div className="font-bold">Basic Overlay</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Click me</div>
              
              {activeOverlay === 'basic' && (
                <div className="overlay overlay-5 overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 2. Primary Color Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('primary')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-primary)'
              }}
            >
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-bold">Primary Overlay</div>
              <div className="text-sm" style={{ color: 'var(--color-primary)' }}>var(--color-primary)</div>
              
              {activeOverlay === 'primary' && (
                <div className="overlay overlay-primary-5 overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 3. Success Overlay with Blur */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('success')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-success)'
              }}
            >
              <div className="text-3xl mb-2">✅</div>
              <div className="font-bold">Success + Blur</div>
              <div className="text-sm" style={{ color: 'var(--color-success)' }}>with blur-lg</div>
              
              {activeOverlay === 'success' && (
                <div className="overlay overlay-success-5 overlay-blur-lg overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 4. Warning Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('warning')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-warning)'
              }}
            >
              <div className="text-3xl mb-2">⚠️</div>
              <div className="font-bold">Warning (30%)</div>
              <div className="text-sm" style={{ color: 'var(--color-warning)' }}>overlay-3</div>
              
              {activeOverlay === 'warning' && (
                <div className="overlay overlay-warning-3 overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 5. Danger Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('danger')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-danger)'
              }}
            >
              <div className="text-3xl mb-2">❌</div>
              <div className="font-bold">Danger (70%)</div>
              <div className="text-sm" style={{ color: 'var(--color-danger)' }}>overlay-7</div>
              
              {activeOverlay === 'danger' && (
                <div className="overlay overlay-danger-7 overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 6. Glass Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('glass')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                background: 'url("https://picsum.photos/200/200") center/cover',
                border: '2px solid var(--color-border)'
              }}
            >
              <div className="relative z-10">
                <div className="text-3xl mb-2">🥂</div>
                <div className="font-bold text-white">Glass Overlay</div>
                <div className="text-sm text-white/80">backdrop blur</div>
              </div>
              
              {activeOverlay === 'glass' && (
                <div className="overlay overlay-glass overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 7. Gradient Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('gradient')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-border)'
              }}
            >
              <div className="text-3xl mb-2">🌈</div>
              <div className="font-bold">Gradient Overlay</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>with opacity 0.4</div>
              
              {activeOverlay === 'gradient' && (
                <div className="overlay gradient primary overlay-4 overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 8. Combined Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('combined')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-info)'
              }}
            >
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold">Combined</div>
              <div className="text-sm" style={{ color: 'var(--color-info)' }}>primary + blur + 50%</div>
              
              {activeOverlay === 'combined' && (
                <div className="overlay overlay-primary-5 overlay-blur-xl overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>

          {/* 9. Pattern Overlay */}
          <div className="relative group">
            <div 
              onClick={() => testOverlay('pattern')}
              className="p-8 rounded-lg text-center cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-border)'
              }}
            >
              <div className="text-3xl mb-2">🔷</div>
              <div className="font-bold">Pattern Overlay</div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>dots pattern</div>
              
              {activeOverlay === 'pattern' && (
                <div className="overlay overlay-pattern-dots overlay-primary overlay-absolute inset-0 rounded-lg"></div>
              )}
            </div>
          </div>
        </div>

        {/* Active Overlay Indicator */}
        {activeOverlay && (
          <div className="mt-8 p-4 rounded-lg text-center animate-pulse"
               style={{
                 backgroundColor: 'var(--color-surface)',
                 border: '2px solid var(--color-primary)'
               }}>
            <p className="font-bold" style={{ color: 'var(--color-primary)' }}>
              ✨ Active Overlay: {activeOverlay} (disappears in 2 seconds)
            </p>
          </div>
        )}
      </div>

      {/* ===== MODAL ===== */}
      {isModalOpen && (
        <div className="modal-container">
          {/* Global overlay */}
          <div className="overlay overlay-dark overlay-fixed inset-0" onClick={closeModal}></div>
          
          <div className="modal-wrapper">
            <div className={`
              modal-panel 
              ${modalType === 'basic' ? 'md' : ''}
              ${modalType === 'success' ? 'md success filled' : ''}
              ${modalType === 'warning' ? 'md warning filled' : ''}
              ${modalType === 'danger' ? 'md danger filled' : ''}
              ${modalType === 'outlined' ? 'md outlined primary' : ''}
              ${modalType === 'gradient' ? 'md gradient primary' : ''}
              ${modalType === 'glass' ? 'md glass' : ''}
              ${modalType === 'glow' ? 'md info filled glow' : ''}
            `}>
              
              <div className="modal-header">
                <h3>
                  {modalType === 'basic' && '🐬 Basic Modal'}
                  {modalType === 'success' && '✅ Success Modal'}
                  {modalType === 'warning' && '⚠️ Warning Modal'}
                  {modalType === 'danger' && '❌ Danger Modal'}
                  {modalType === 'outlined' && '🎨 Outlined Modal'}
                  {modalType === 'gradient' && '🌈 Gradient Modal'}
                  {modalType === 'glass' && '🥂 Glass Modal'}
                  {modalType === 'glow' && '✨ Glow Modal'}
                </h3>
                <button onClick={closeModal}>✕</button>
              </div>

              <div className="modal-body">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">
                    {modalType === 'basic' && '🐬'}
                    {modalType === 'success' && '✅'}
                    {modalType === 'warning' && '⚠️'}
                    {modalType === 'danger' && '❌'}
                    {modalType === 'outlined' && '🎨'}
                    {modalType === 'gradient' && '🌈'}
                    {modalType === 'glass' && '🥂'}
                    {modalType === 'glow' && '✨'}
                  </div>
                  <h4 className="font-semibold">This is a {modalType} modal</h4>
                  <p className="text-sm mt-2">
                    Using global classes: 
                    <code className="ml-2 px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                      {modalType === 'basic' && 'md'}
                      {modalType === 'success' && 'md success filled'}
                      {modalType === 'warning' && 'md warning filled'}
                      {modalType === 'danger' && 'md danger filled'}
                      {modalType === 'outlined' && 'md outlined primary'}
                      {modalType === 'gradient' && 'md gradient primary'}
                      {modalType === 'glass' && 'md glass'}
                      {modalType === 'glow' && 'md info filled glow'}
                    </code>
                  </p>
                </div>

                <div className="space-y-2">
                  <p><strong>Theme:</strong> {currentTheme}</p>
                  <p><strong>Mode:</strong> {currentMode}</p>
                  <p><strong>Size:</strong> md (448px)</p>
                </div>
              </div>

              <div className="modal-footer">
                <button className="outlined secondary btn-sm" onClick={closeModal}>
                  Cancel
                </button>
                <button className={`filled ${modalType === 'danger' ? 'danger' : 'primary'} btn-sm`}>
                  Confirm
                </button>
            
              </div>
            </div>
          </div>
        </div>
      )}
     // Basic - class भित्र सबै
<div 
  className="background primary filled lg circle glow"
  style={{"--bg-primary": "url('/images/profile.jpg')"}}
/>

// Hero Section
<div 
  className="background danphe filled full screen cover center gradient-primary"
  style={{"--bg-danphe": "url('/images/hero.jpg')"}}
>
  <div className="relative z-10 text-white p-8">
    <h1 className="text-4xl">Welcome</h1>
  </div>
</div>

// Card
<div 
  className="background secondary rounded-lg lg cover center glow"
  style={{"--bg-secondary": "url('/images/card.jpg')"}}
>
  <div className="p-6 text-white bg-black/50 h-full flex-col-center">
    <h3>Card Title</h3>
    <button className="primary filled mt-4">Click</button>
  </div>
</div>

// Avatar
<div 
  className="background primary circle sm glow glow-pulse"
  style={{"--bg-primary": "url('/images/avatar.jpg')"}}
/>

// Glass Card
<div 
  className="background glass rounded-xl lg cover center"
  style={{"--bg-image": "url('/images/glass-bg.jpg')"}}
>
  <div className="p-6 text-white">
    <h3>Glass Effect</h3>
  </div>
</div>

// Loading State
<div 
  className="background primary filled lg rounded-lg loading"
  style={{"--bg-primary": "url('/images/loading.jpg')"}}
/>

// Pattern Background
<div className="background pattern-dots primary filled full screen">
  <div className="container py-16">
    <h1>Pattern Background</h1>
  </div>
</div>

// Multiple Effects Combine
<div 
  className="background primary circle lg glow glow-pulse gradient-primary overlay-dark-50"
  style={{"--bg-primary": "url('/images/complex.jpg')"}}
>
  <div className="relative z-10 text-white flex-center h-full">
    Hover Me
  </div>
</div>
    </div>
  );
}

export default App;