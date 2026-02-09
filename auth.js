import { supabase } from './supabase.js'

export async function protegerPagina() {
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    window.location.href = 'login.html'
  }
}

export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}
