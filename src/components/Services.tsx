import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, Clock, Tag, MoreVertical } from 'lucide-react';
import { COLORS, MOCK_SERVICES, CURRENCY_SYMBOL } from '../lib/constants';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Services: React.FC = () => {
  const categories = ['All', 'Hair', 'Color', 'Nails', 'Spa', 'Makeup'];
  const [activeTab, setActiveTab] = React.useState('All');

  const filteredServices = activeTab === 'All' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Services</h1>
          <p className="text-slate-500">Configure your menu of treatments and pricing.</p>
        </div>
        <Button style={{ backgroundColor: COLORS.primary }} className="text-white gap-2">
          <Plus size={18} />
          Add Service
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === cat 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input placeholder="Search services..." className="pl-10 bg-white" />
        </div>
        <Button variant="outline" size="icon">
          <Filter size={18} />
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div 
                className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: COLORS.primary, borderRadius: '50%' }}
              />
              
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 mt-2">{service.name}</h3>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="flex items-center gap-6 mt-6 relative z-10">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock size={16} />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Tag size={16} />
                  <span className="text-sm font-bold text-slate-900">{CURRENCY_SYMBOL} {service.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                <Button variant="ghost" size="sm" className="flex-1 text-red-500 hover:text-red-600 hover:bg-red-50">Disable</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;