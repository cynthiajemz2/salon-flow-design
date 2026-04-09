import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Phone, MoreHorizontal, Plus } from 'lucide-react';
import { COLORS, MOCK_STAFF } from '../lib/constants';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Staff: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Stylists & Team</h1>
          <p className="text-slate-500">Manage your talented professionals and their schedules.</p>
        </div>
        <Button style={{ backgroundColor: COLORS.primary }} className="text-white gap-2">
          <Plus size={18} />
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_STAFF.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-all text-center">
              <div className="flex justify-end">
                <button className="text-slate-400"><MoreHorizontal size={20} /></button>
              </div>
              
              <div className="relative mx-auto w-24 h-24 mb-4">
                <Avatar className="w-24 h-24 border-4 border-slate-50 shadow-inner">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-white shadow-sm border border-slate-100 rounded-full px-1.5 py-0.5 flex items-center gap-1">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-[10px] font-bold text-slate-700">{member.rating}</span>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
              <p className="text-sm text-slate-500 font-medium">{member.role}</p>

              <div className="flex items-center justify-center gap-2 mt-6">
                <Button size="icon" variant="outline" className="rounded-full w-9 h-9">
                  <MessageSquare size={16} className="text-slate-600" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full w-9 h-9">
                  <Phone size={16} className="text-slate-600" />
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  Schedule
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for staff activity or hiring */}
      <Card className="bg-slate-50 border-dashed border-2 border-slate-200 p-12 text-center">
        <div className="max-w-xs mx-auto space-y-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Plus size={32} className="text-slate-400" />
          </div>
          <h4 className="font-bold text-slate-700">Join the Team</h4>
          <p className="text-sm text-slate-500">Grow your salon by adding more talented professionals to your roster.</p>
          <Button variant="outline" size="sm">Create Vacancy</Button>
        </div>
      </Card>
    </div>
  );
};

export default Staff;