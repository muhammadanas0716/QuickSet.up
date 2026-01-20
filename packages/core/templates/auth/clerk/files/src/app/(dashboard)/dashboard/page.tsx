import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@/components/auth/user-button';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <UserButton />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-2xl font-bold">
            Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}!
          </h2>
          <p className="mt-2 text-muted-foreground">
            You are now signed in. This is your protected dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}
