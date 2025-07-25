'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal">Get in touch</DialogTitle>
          <DialogDescription className="text-xl text-gray-600">
            Send me a message and I&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}