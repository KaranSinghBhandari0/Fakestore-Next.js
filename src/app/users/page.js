import { Suspense } from "react";
import UserCard from "@/components/UserCard";
import Loader from "@/components/Loader";
import { getAllUsers } from "@/controllers/usersController";

// Tell Vercel to render on-demand instead of at build time
export const dynamic = 'force-dynamic';

// Server Component - Fetches Data
async function UsersList() {
  const users = await getAllUsers();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}

// Page Component with Suspense
export default function UsersPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        FakeStore <span className="text-orange-500">Users</span>
      </h1>
      <Suspense fallback={<Loader />}>
        <UsersList />
      </Suspense>
    </div>
  );
}
