-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  help_type TEXT,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  services TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter table for email subscriptions
CREATE TABLE public.newsletter (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (since these are public forms, allow anonymous access)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anonymous inserts (public forms)
CREATE POLICY "Allow anonymous contact submissions" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow anonymous newsletter signups" 
ON public.newsletter 
FOR INSERT 
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at);
CREATE INDEX idx_newsletter_created_at ON public.newsletter(created_at);
CREATE INDEX idx_newsletter_email ON public.newsletter(email);