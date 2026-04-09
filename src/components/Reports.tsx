import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Calendar, Star, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import { COLORS, IMAGES } from '../lib/constants';

const Reports: React.FC = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,450', trend: '+12.5%', isUp: true, icon: DollarSign },
    { label: 'New Clients', value: '48', trend: '+18.2%', isUp: true, icon: Star },
    { label: 'Retention Rate', value: '72%', trend: '-2.4%', isUp: false, icon: TrendingUp },
    { label: 'Avg. Booking', value: '$85.00', trend: '+5.1%', isUp: true, icon: Calendar },
  ];

  const topServices = [
    { name: 'Signature Haircut', bookings: 145, growth: 12 },
    { name: 'Full Head Balayage', bookings: 98, growth: 8 },
    { name: 'Bridal Makeup', bookings: 64, growth: 15 },
    { name: 'Express Facial', bookings: 42, growth: -3 },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Performance Reports</h1>
          <p className="text-slate-500 mt-1">Detailed overview of your salon's business growth.</p>
        </div>
        <button 
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Download size={16} />
          Export Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${COLORS.primary}15`, color: COLORS.primary }}
              >
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Performance */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Service Performance</h2>
          <div className="space-y-6">
            {topServices.map((service, index) => (
              <div key={service.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{service.name}</span>
                  <span className="text-slate-500">{service.bookings} bookings</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(service.bookings / 150) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 relative h-48 rounded-xl overflow-hidden group">
            <img 
              src={IMAGES.reports} 
              alt="Analytics" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <p className="text-white font-medium">Monthly Revenue Trend</p>
              <p className="text-white/80 text-sm">Projected 15% growth for next quarter based on current booking velocity.</p>
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp size={80} strokeWidth={1} />
            </div>
            <h2 className="text-lg font-bold mb-4 relative z-10">AI Insights</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Your "Full Head Balayage" service is seeing a spike on weekends. Consider offering a midweek promotional package to balance the load.
            </p>
            <button className="w-full py-2.5 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors relative z-10">
              View Suggestions
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Top Stylists</h2>
            <div className="space-y-4">
              {[
                { name: 'Sarah J.', rating: 4.9, sales: '$4,200' },
                { name: 'Michael R.', rating: 4.8, sales: '$3,850' },
                { name: 'Emma L.', rating: 5.0, sales: '$3,100' },
              ].map((stylist) => (
                <div key={stylist.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{stylist.name}</p>
                    <div className="flex items-center gap-1 text-xs text-amber-500">
                      <Star size={10} fill="currentColor" />
                      <span>{stylist.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{stylist.sales}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;