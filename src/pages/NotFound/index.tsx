import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] bg-surface">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-ink mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-muted mb-4">页面未找到</h2>
        <p className="text-muted/70 mb-8">抱歉，您访问的页面不存在。</p>
        <Link to="/" className="text-brand-primary hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
