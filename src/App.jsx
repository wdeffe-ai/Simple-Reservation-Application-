import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    setCredentials((current) => ({ ...current, [target.name]: target.value }));
    setError('');
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!credentials.username.trim() || !credentials.password) {
      setError('Enter your username and password to continue.');
      return;
    }

    // Replace this with the authentication service when the API is connected.
    setIsSubmitted(true);
  };

  return (
    <main className="landing-page">
      <section className="hero-panel" aria-labelledby="welcome-heading">
        <div className="brand-mark" aria-hidden="true">SC</div>
        <p className="eyebrow">The private club experience</p>
        <h1 id="welcome-heading">Make time for what matters.</h1>
        <p className="hero-copy">
          Reserve your favorite spaces, discover new experiences, and enjoy
          effortless access to everything the club has to offer.
        </p>
        <div className="hero-rule" />
        <p className="member-note">Exclusive access for club members</p>
      </section>

      <section className="login-panel" aria-labelledby="login-heading">
        <div className="login-card">
          <p className="eyebrow">Member portal</p>
          <h2 id="login-heading">Welcome back</h2>
          <p className="login-intro">Sign in to manage your reservations.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
                aria-invalid={Boolean(error && !credentials.username.trim())}
              />
            </div>

            <div className="field-group">
              <div className="field-label-row">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password" className="text-link">Forgot password?</a>
              </div>
              <div className="password-input">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(error && !credentials.password)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && <p className="form-message error" role="alert">{error}</p>}
            {isSubmitted && (
              <p className="form-message success" role="status">
                Details received. Authentication will be connected here.
              </p>
            )}

            <button type="submit" className="submit-button">Sign in</button>
          </form>

          <p className="signup-prompt">
            Not a member? <a href="#membership" className="text-link">Request membership</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
