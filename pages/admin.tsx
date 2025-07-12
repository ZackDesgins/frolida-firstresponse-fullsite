import { getSession } from "next-auth/react";
import { checkAdmin } from "@/utils/checkAdminRole";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Admin News Panel</h1>
      <p>You can add/edit/delete news posts here. (Coming soon)</p>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) return { redirect: { destination: "/api/auth/signin", permanent: false } };

  const isAdmin = await checkAdmin(session.user.id);
  if (!isAdmin) return { redirect: { destination: "/", permanent: false } };

  return { props: {} };
}
