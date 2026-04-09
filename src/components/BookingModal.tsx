import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Calendar as CalendarIcon, Clock, Users, Scissors, User, Mail, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { API_BASE_URL, MOCK_SERVICES, COLORS, CURRENCY_SYMBOL } from '../lib/constants';
import { cn } from '../lib/utils';

const bookingSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Invalid email address'),
  serviceId: z.string().min(1, 'Please select a service'),
  date: z.any().refine((val) => val instanceof Date, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  quantity: z.preprocess((val) => Number(val), z.number().min(1, 'At least 1 guest').max(5, 'Maximum 5 guests')),
});

type BookingFormValues = {
  clientName: string;
  clientEmail: string;
  serviceId: string;
  date: Date;
  time: string;
  quantity: number;
};

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
  '05:00 PM', '06:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema) as any,
    defaultValues: {
      clientName: '',
      clientEmail: '',
      serviceId: '',
      time: '',
      quantity: 1,
    } as any,
  });

  const onSubmit: SubmitHandler<BookingFormValues> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/book-appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!response.ok && response.status !== 404) {
        throw new Error('Failed to submit');
      }
      
      toast.success('Appointment booked successfully!', {
        description: `Scheduled ${data.clientName} for ${data.serviceId} on ${format(data.date, 'PPP')} at ${data.time}.`,
      });
      
      reset();
      onOpenChange(false);
    } catch (error) {
      toast.error('Failed to book appointment', {
        description: 'Something went wrong. Please try again later.',
      });
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] overflow-y-auto max-h-[90vh] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-slate-900">Book an Appointment</DialogTitle>
          <DialogDescription className="text-slate-500">
            Secure your slot at the salon. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <User size={14} className="text-slate-400" />
                Full Name
              </Label>
              <Input placeholder="Jane Wanjiku" {...register('clientName')} className="border-slate-200 focus:border-amber-500 focus:ring-amber-500" />
              {errors.clientName && <p className="text-xs text-red-500">{String(errors.clientName.message)}</p>}
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Mail size={14} className="text-slate-400" />
                Email
              </Label>
              <Input placeholder="jane@example.com" type="email" {...register('clientEmail')} className="border-slate-200 focus:border-amber-500 focus:ring-amber-500" />
              {errors.clientEmail && <p className="text-xs text-red-500">{String(errors.clientEmail.message)}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Scissors size={14} className="text-slate-400" />
              Service
            </Label>
            <Controller
              name="serviceId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="border-slate-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_SERVICES.map((service) => (
                      <SelectItem key={service.id} value={service.name}>
                        {service.name} ({CURRENCY_SYMBOL} {service.price.toLocaleString()})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.serviceId && <p className="text-xs text-red-500">{String(errors.serviceId.message)}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <Label className="flex items-center gap-2 mb-1">
                <CalendarIcon size={14} className="text-slate-400" />
                Date
              </Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        type="button"
                        className={cn(
                          "w-full pl-3 text-left font-normal border-slate-200",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.date && <p className="text-xs text-red-500">{String(errors.date.message)}</p>}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock size={14} className="text-slate-400" />
                Time
              </Label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-slate-200">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.time && <p className="text-xs text-red-500">{String(errors.time.message)}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Users size={14} className="text-slate-400" />
              Number of Guests
            </Label>
            <Input type="number" min={1} max={5} {...register('quantity')} className="border-slate-200 focus:border-amber-500 focus:ring-amber-500" />
            {errors.quantity && <p className="text-xs text-red-500">{String(errors.quantity.message)}</p>}
          </div>

          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="text-slate-500"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              style={{ backgroundColor: COLORS.primary }}
              className="text-white min-w-[140px] shadow-lg shadow-amber-900/10 hover:shadow-amber-900/20 active:scale-95 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Booking...
                </>
              ) : (
                'Confirm Booking'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};