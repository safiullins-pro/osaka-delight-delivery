-- Fix search path for update_orders_updated_at function
DROP TRIGGER IF EXISTS update_orders_updated_at ON public.orders;
DROP FUNCTION IF EXISTS public.update_orders_updated_at();

CREATE OR REPLACE FUNCTION public.update_orders_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_orders_updated_at();