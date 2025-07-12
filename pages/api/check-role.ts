import type { NextApiRequest, NextApiResponse } from 'next';

const GUILD_ID = process.env.DISCORD_GUILD_ID;
const ADMIN_ROLE_ID = process.env.DISCORD_ADMIN_ROLE_ID;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "Missing userId" });

  try {
    const response = await fetch(`https://discord.com/api/guilds/${GUILD_ID}/members/${userId}`, {
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`,
      },
    });
    if (!response.ok) return res.status(403).json({ error: "Cannot fetch user" });

    const data = await response.json();
    const hasRole = data.roles.includes(ADMIN_ROLE_ID);
    return res.status(200).json({ hasRole });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
