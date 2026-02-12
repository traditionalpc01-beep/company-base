import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { viewTransitionNavigate } from '../lib/viewTransition';

interface VTLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  onClick?: () => void;
}

const VTLink: React.FC<VTLinkProps> = ({ to, children, className = '', style, title, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (to.startsWith('http')) {
      onClick?.();
      return;
    }
    e.preventDefault();
    viewTransitionNavigate(to, navigate);
    onClick?.();
  };

  if (to.startsWith('http')) {
    return (
      <a 
        href={to} 
        className={className} 
        style={style}
        title={title} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={to} 
      className={className} 
      style={style}
      title={title} 
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default VTLink;
