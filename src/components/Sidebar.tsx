import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, Scissors, Users, UserRound, Settings, LogOut, X, BarChart3 } from 'lucide-react';
import { View } from '../types';
import { COLORS, ROUTES } from '../lib/constants';

interface SidebarProps {
  currentView: View;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, isOpen, setIsOpen }) => {
  const navItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments' as View, label: 'Appointments', icon: Calendar },
    { id: 'services' as View, label: 'Services', icon: Scissors },
    { id: 'staff' as View, label: 'Stylists', icon: Users },
    { id: 'clients' as View, label: 'Clients', icon: UserRound },
    { id: 'reports' as View, label: 'Reports', icon: BarChart3 },
    { id: 'settings' as View, label: 'Settings', icon: Settings },
  ] as const;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        className="fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-slate-200 z-50 flex flex-col"
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: COLORS.primary }}>
              <Scissors size={18} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
              L'\\u00c9clat Salon
            </span>
          </div>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const path = ROUTES[item.id];
            const isActive = currentView === item.id;
            
            return (
              <NavLink
                key={item.id}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
                style={{ 
                  backgroundColor: isActive ? COLORS.primary : 'transparent',
                }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;