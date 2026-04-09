import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, UserPlus, Mail, Phone, MoreHorizontal } from 'lucide-react';
import { MOCK_APPOINTMENTS } from '../lib/constants';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const Clients: React.FC = () => {
  // Extract unique clients from mock data
  const clients = Array.from(new Set(MOCK_APPOINTMENTS.map(a => a.client))).map((name, i) => ({
    id: `c-${i}`,
    name,
    email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
    phone: '+1 (555) 000-0000',
    lastVisit: '2 weeks ago',
    appointments: 12
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Clients</h1>
          <p className="text-slate-500">Keep track of your customers and their history.</p>
        </div>
        <Button className="bg-slate-900 text-white gap-2">
          <UserPlus size={18} />
          Add Client
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input placeholder="Search by name, email or phone..." className="pl-10 bg-white" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <Avatar className="w-12 h-12 border-2 border-slate-50 shadow-sm">
                  <AvatarFallback className="bg-slate-100 text-slate-600 font-bold">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <button className="text-slate-400"><MoreHorizontal size={20} /></button>
              </div>

              <h3 className="font-bold text-slate-900 text-lg">{client.name}</h3>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Mail size={14} />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Phone size={14} />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-50">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Total Visits</p>
                  <p className="text-sm font-bold text-slate-900">{client.appointments}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Last Visit</p>
                  <p className="text-sm font-bold text-slate-900">{client.lastVisit}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;