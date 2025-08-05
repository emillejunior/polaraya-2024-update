"use client"

import { useState, useEffect } from "react"

interface SuspiciousIP {
  id: string
  ipAddress: string
  count: number
  lastSeen: string
}

export function SuspiciousIPList() {
  const [suspiciousIPs, setSuspiciousIPs] = useState<SuspiciousIP[]>([])

  useEffect(() => {
    async function fetchSuspiciousIPs() {
      const response = await fetch("/api/suspicious-ips")
      const data = await response.json()
      setSuspiciousIPs(data.suspiciousIPs)
    }

    fetchSuspiciousIPs()
    const interval = setInterval(fetchSuspiciousIPs, 60000) // Refresh every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Suspicious IPs</h2>
      {suspiciousIPs.length === 0 ? (
        <p>No suspicious IPs detected.</p>
      ) : (
        <ul className="space-y-2">
          {suspiciousIPs.map((ip) => (
            <li key={ip.id} className="bg-red-100 p-4 rounded">
              <p>
                <strong>IP:</strong> {ip.ipAddress}
              </p>
              <p>
                <strong>Visit Count:</strong> {ip.count}
              </p>
              <p>
                <strong>Last Seen:</strong>{" "}
                {new Date(ip.lastSeen).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
