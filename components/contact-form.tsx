'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
  plan?: string;
  onSuccess?: () => void;
}

export function ContactForm({ plan, onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add the plan to the data if provided
    if (plan) {
      data.plan = plan;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          onSuccess?.();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input 
          name="name" 
          type="text" 
          placeholder="Your name" 
          required 
          className="w-full border border-[#D5D5D5] rounded-lg px-4 py-3 text-xl font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2" 
        />
      </div>
      <div>
        <input 
          name="email" 
          type="email" 
          placeholder="Your email" 
          required 
          className="w-full border border-[#D5D5D5] rounded-lg px-4 py-3 text-xl font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2" 
        />
      </div>
      <div>
        <textarea 
          name="message" 
          placeholder="Your message" 
          required 
          rows={4}
          className="w-full border border-[#D5D5D5] rounded-lg px-4 py-3 text-xl font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 resize-none" 
        />
      </div>
      <Button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'sent' && (
        <p className="text-green-600 text-center text-xl">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center text-xl">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
