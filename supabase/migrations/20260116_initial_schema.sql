-- Database schema for Shipto

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('shipper', 'transporter')) DEFAULT 'shipper',
  email TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  min_price DECIMAL(10,2),
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for categories
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create shipments table
CREATE TABLE IF NOT EXISTS public.shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  category_id UUID REFERENCES public.categories(id),
  title TEXT NOT NULL,
  pickup_postcode TEXT NOT NULL,
  delivery_postcode TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for shipments
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;

-- Create quotes table
CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES public.shipments(id) ON DELETE CASCADE NOT NULL,
  transporter_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  notes TEXT,
  status TEXT CHECK (status IN ('pending', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for quotes
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES

-- Profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Categories
CREATE POLICY "Categories are viewable by everyone" ON public.categories
  FOR SELECT USING (true);

-- Shipments
CREATE POLICY "Users can view their own shipments" ON public.shipments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Transporters can view pending shipments" ON public.shipments
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'transporter'
  ));

CREATE POLICY "Users can create their own shipments" ON public.shipments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Quotes
CREATE POLICY "Owners can view quotes for their shipments" ON public.quotes
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE id = quotes.shipment_id AND user_id = auth.uid()
  ));

CREATE POLICY "Transporters can view their own quotes" ON public.quotes
  FOR SELECT USING (auth.uid() = transporter_id);

CREATE POLICY "Transporters can create quotes" ON public.quotes
  FOR INSERT WITH CHECK (EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'transporter'
  ));

-- SEED DATA
INSERT INTO public.categories (name, description, icon, min_price, slug)
VALUES 
  ('Furniture Delivery', 'Sofas, Beds, Tables & Chairs', 'Armchair', 45.00, 'furniture'),
  ('Vehicle Transport', 'Cars, Motorcycles, Boats & Caravans', 'Car', 120.00, 'vehicles'),
  ('Home Moves', '1-5 Bedroom House, Office Removals', 'Home', 250.00, 'removals')
ON CONFLICT (slug) DO NOTHING;
