import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error('The Monitor render error:', error);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="tm-full-screen tm-flex-col tm-flex-center" style={{ padding: '2rem', textAlign: 'center', gap: '1rem' }}>
          <h2 className="tm-title-xl">The Monitor — Fehler</h2>
          <p className="tm-text-sm tm-opacity-70">{this.state.error.message}</p>
          <button
            type="button"
            className="tm-btn-secondary"
            onClick={() => this.setState({ error: null })}
          >
            Erneut versuchen
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
