import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Calendar, Wallet, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { COLORS, IMAGES, MOCK_APPOINTMENTS, ROUTES, CURRENCY_SYMBOL } from '../lib/constants';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Dashboard: React.FC = () => {
  const stats = [
    { label: "Today's Revenue", value: `${CURRENCY_SYMBOL} 128,000`, icon: Wallet, trend: '+12%', color: 'bg-emerald-50 text-emerald-600' },
    { label: "Appointments", value: '24', icon: Calendar, trend: '+4', color: 'bg-blue-50 text-blue-600' },
    { label: "New Clients", value: '8', icon: Users, trend: '+2', color: 'bg-purple-50 text-purple-600' },
    { label: "Growth Rate", value: '18%', icon: TrendingUp, trend: '+3%', color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-slate-900">Welcome back, Admin</h1>
        <p className="text-slate-500 text-lg">Here's what's happening at L'Éclat Salon today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    {stat.trend} <ArrowUpRight size={12} />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2 border-none shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 px-6 py-5">
            <CardTitle className="text-lg font-serif">Today's Schedule</CardTitle>
            <Link 
              to={ROUTES.appointments} 
              className="text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-1 rounded-md hover:bg-slate-50 transition-colors"
            >
              View All
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Time</th>
                    <th className="px-6 py-3">Stylist</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_APPOINTMENTS.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-900">{app.client}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{app.service}</td>
                      <td className="px-6 py-4 text-slate-600">{app.time}</td>
                      <td className="px-6 py-4 text-slate-600">{app.stylist}</td>
                      <td className="px-6 py-4">
                        <Badge 
                          variant={app.status === 'confirmed' ? 'default' : app.status === 'pending' ? 'secondary' : 'destructive'}
                          className="capitalize"
                        >
                          {app.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:bg-slate-100 rounded-md">
                          <MoreHorizontal size={18} className="text-slate-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Interior Highlight */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm overflow-hidden relative group">
            <img 
              src={IMAGES.interior} 
              alt="Salon Interior" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h4 className="font-serif text-xl font-bold">L'Éclat Flagship</h4>
              <p className="text-sm text-white/80">Nairobi, Kenya</p>
            </div>
          </Card>
          
          <Card className="border-none shadow-sm bg-slate-900 text-white p-6">
            <h4 className="font-serif text-lg font-bold mb-2">Inventory Alert</h4>
            <p className="text-slate-400 text-sm mb-4">3 products are currently low on stock and need restocking soon.</p>
            <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none">
              Manage Inventory
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;