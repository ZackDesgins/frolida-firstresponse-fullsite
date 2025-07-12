import axios from "axios";

export async function checkAdmin(userId: string): Promise<boolean> {
  try {
    const res = await axios.get(
      `https://discord.com/api/guilds/${process.env.DISCORD_GUILD_ID}/members/${userId}`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );
    const roles = res.data.roles;
    return roles.includes(process.env.DISCORD_ADMIN_ROLE_ID!);
  } catch (error) {
    console.error("Role check failed:", error);
    return false;
  }
}
