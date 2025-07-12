import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [serverStatus, setServerStatus] = useState("Loading...");

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("https://api.nexopanel.com/fivem?ip=31.59.214.60&port=30000");
        const data = await res.json();
        setServerStatus(data.online ? "Online" : "Offline");
      } catch (err) {
        setServerStatus("Unavailable");
      }
    }
    fetchStatus();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">Frolida First Response RP</h1>
        <p className="text-gray-300 mt-2">Realism. Dedication. Community.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>
            Frolida First Response RP is a FiveM roleplay community focused on emergency services, realistic scenarios, and a supportive environment for all players.
          </p>
        </div>

        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Frolida State Police</li>
            <li>Frolida Fire Rescue</li>
            <li>Frolida Department of Transportation</li>
            <li>Civilian Operations</li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <p>Become part of our growing community today!</p>
          <Link href="https://discord.gg/your-discord-invite">
            <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-300">Join our Discord</Button>
          </Link>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Live Server Status</h2>
          <p>
            Server is currently: <span className={serverStatus === "Online" ? "text-green-400" : "text-red-400"}>{serverStatus}</span>
          </p>
        </div>

        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Apply to a Department</h2>
          <p>Ready to serve? Apply to one of our departments today.</p>
          <Link href="/apply">
            <Button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-300">Start Application</Button>
          </Link>
        </div>

        <div className="bg-gray-900 border border-yellow-400 p-6 rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">News & Events</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Jul 10:</strong> Framework fully integrated!</li>
            <li><strong>Jul 7:</strong> EUP added for FHP.</li>
            <li><strong>Jul 5:</strong> New patrol cars deployed.</li>
          </ul>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Frolida First Response RP. All rights reserved.
      </footer>
    </main>
  );
}
