import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Ta3allam</Link>
        <div className="space-x-4">
          <Link href="/courses">Courses</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/instructor">Instructor</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}