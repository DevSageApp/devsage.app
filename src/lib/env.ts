export function requireEnv(keys: string[]) {
  keys.forEach(k => {
    if (!(k in import.meta.env) || !String(import.meta.env[k as keyof ImportMetaEnv])) {
      throw new Error(`Missing required env: ${k}`);
    }
  });
}
requireEnv(['VITE_SUPABASE_URL','VITE_SUPABASE_ANON_KEY']);
