import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Scissors, Globe, CreditCard, ChevronRight } from 'lucide-react';
import { COLORS } from '../lib/constants';

const Settings: React.FC = () => {
  const sections = [
    {
      title: 'Account Settings',
      items: [
        { icon: User, label: 'Profile Information', description: 'Update your personal details and salon role.' },
        { icon: Bell, label: 'Notifications', description: 'Manage how you receive alerts and updates.' },
        { icon: Shield, label: 'Security & Privacy', description: 'Change your password and manage sessions.' },
      ]
    },
    {
      title: 'Salon Management',
      items: [
        { icon: Scissors, label: 'Business Profile', description: 'Modify your salon name, logo, and address.' },
        { icon: Globe, label: 'Online Booking', description: 'Configure your public booking page settings.' },
        { icon: CreditCard, label: 'Billing & Plans', description: 'View invoices and manage your subscription.' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-serif font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account and salon preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {sections.map((section, idx) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-2">
              {section.title}
            </h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {section.items.map((item, index) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-4 p-4 text-left hover:bg-slate-50 transition-colors ${
                    index !== section.items.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900">{item.label}</h3>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="pt-4">
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-rose-900">Danger Zone</h3>
          <p className="text-xs text-rose-700 mt-1 mb-4">Proceed with caution. These actions are irreversible.</p>
          <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold hover:bg-rose-700 transition-colors">
            Deactivate Salon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;