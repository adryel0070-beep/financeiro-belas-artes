import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://fkoduheicwxofrfbkeuo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrb2R1aGVpY3d4b2ZyZmJrZXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIyMjUsImV4cCI6MjA4NTg5ODIyNX0.FXpQt_A0qfxVtEIk1SjgJWVfJIUPAftr_wBs1Gg1KvU'
)
