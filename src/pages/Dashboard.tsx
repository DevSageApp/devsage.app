import Button from "../components/ui/Button";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        const email = prompt("Enter your email for a magic link:") || "";
        if (email) await supabase.auth.signInWithOtp({ email });
      }
      const { data } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      setProjects(data || []);
    })();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1 className="text-4xl font-extrabold tracking-tight text-indigo-600">
  DevSage <span className="text-zinc-800">Dashboard</span>
</h1>
      <Button
        onClick={async () => {
          const name = prompt("Project name?");
          if (!name) return;
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) return;
          await supabase.from("projects").insert({ user_id: user.id, name });
          const { data } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });
          setProjects(data || []);
        }}
      >
        New Project
      </Button>
      <ul>{projects.map((p) => <li key={p.id}>{p.name}</li>)}</ul>
    </div>
  );
}
