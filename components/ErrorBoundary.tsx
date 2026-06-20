"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a1a] text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold gradient-text mb-4">
              ERROR
            </h1>
            <h2 className="text-xl font-semibold mb-4">
              The Shadow Realm has destabilized
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              An unexpected error occurred. Our warriors are working to restore
              balance.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
