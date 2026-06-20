"use client";

import React, { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a1a] px-4 text-center">
          <div className="mb-6 text-6xl">⚡</div>
          <h1 className="mb-2 text-2xl font-bold text-orange-500">
            Something went wrong
          </h1>
          <p className="mb-8 max-w-md text-gray-400">
            The Chrono energy fluctuated. Please try refreshing the page.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-black transition hover:bg-orange-400"
          >
            Reload
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <pre className="mt-8 max-w-xl overflow-auto rounded-lg bg-black/50 p-4 text-left text-xs text-red-400">
              {this.state.error.message}
              {"\n"}
              {this.state.error.stack}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
