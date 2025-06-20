-- Create the table for storing adversarial training data
CREATE TABLE public.search_training_data (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    query_text text NOT NULL,
    ai_response jsonb NULL,
    is_correct boolean NOT NULL,
    corrected_response jsonb NULL,
    notes text NULL,
    CONSTRAINT search_training_data_pkey PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.search_training_data ENABLE ROW LEVEL SECURITY;

-- Create policies for access
-- Only service roles (i.e., your server) can access this data.
-- This protects the training data from being publicly accessible.
CREATE POLICY "Allow service_role full access" ON public.search_training_data
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role'); 