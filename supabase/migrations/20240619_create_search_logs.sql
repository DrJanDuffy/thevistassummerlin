-- Create the table for logging search queries
CREATE TABLE public.search_logs (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    query_text text NULL,
    parsed_filters jsonb NULL,
    user_session_id text NULL,
    CONSTRAINT search_logs_pkey PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.search_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for access
-- This policy allows all users to insert into the logs.
-- You might want to restrict this further in a production environment.
CREATE POLICY "Allow insert for all users" ON public.search_logs FOR INSERT WITH CHECK (true);

-- This policy allows users with the 'service_role' (e.g., your server) to read all logs.
-- Regular users will not be able to read the logs.
CREATE POLICY "Allow service_role to read all logs" ON public.search_logs FOR SELECT USING (auth.role() = 'service_role'); 