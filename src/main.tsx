import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings  = React.lazy(() => import('./pages/Settings'));

function App(){
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div style={{padding:24}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary><App /></ErrorBoundary>
);