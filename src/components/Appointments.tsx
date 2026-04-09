import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Calendar as CalendarIcon, Filter, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { COLORS, MOCK_APPOINTMENTS } from '../lib/constants';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { BookingModal } from './BookingModal';
import { cn } from '../lib/utils';

const Appointments: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Appointments</h1>
          <p className="text-slate-500">Manage and schedule your client bookings.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex gap-2">
            <CalendarIcon size={18} />
            Week View
          </Button>
          <Button 
            style={{ backgroundColor: COLORS.primary }} 
            className="text-white gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
            onClick={() => setIsBookingModalOpen(true)}
          >
            <Plus size={18} />
            Book Now
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input placeholder="Search client or stylist..." className="pl-10 border-slate-200 focus:ring-amber-500 focus:border-amber-500" />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none gap-2">
            <Filter size={18} />
            Filter
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon"><ChevronLeft size={20} /></Button>
            <span className="px-3 font-medium text-slate-700 whitespace-nowrap">Oct 24, 2023</span>
            <Button variant="ghost" size="icon"><ChevronRight size={20} /></Button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {MOCK_APPOINTMENTS.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="p-4 sm:p-6 border-none shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-amber-600 transition-all"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-600 font-bold shrink-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider leading-none">Oct</span>
                    <span className="text-lg leading-tight">24</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{app.client}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                      <span className="font-semibold text-slate-700">{app.time}</span>
                      <span>&bull;</span>
                      <span>{app.service}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-semibold text-slate-900">{app.stylist}</p>
                    <p className="text-xs text-slate-500">Master Stylist</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">${app.price}</p>
                    <Badge 
                      className={cn(
                        "mt-1 capitalize",
                        app.status === 'confirmed' ? "bg-green-50 text-green-700 hover:bg-green-50 border-green-200" :
                        app.status === 'pending' ? "bg-amber-50 text-amber-700 hover:bg-amber-50 border-amber-200" :
                        "bg-red-50 text-red-700 hover:bg-red-50 border-red-200"
                      )}
                      variant="outline"
                    >
                      {app.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal 
        open={isBookingModalOpen} 
        onOpenChange={setIsBookingModalOpen} 
      />
    </div>
  );
};

export default Appointments;