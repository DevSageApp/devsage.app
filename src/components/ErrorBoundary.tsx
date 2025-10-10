import React from 'react';

export class ErrorBoundary extends React.Component<{children: React.ReactNode},{error?: Error}> {
  constructor(props:any){ super(props); this.state={}; }
  static getDerivedStateFromError(error: Error){ return { error }; }
  render(){
    if (this.state.error) {
      return (
        <div style={{padding:24}}>
          <h2>Something went wrong.</h2>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
