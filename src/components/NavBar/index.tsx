// components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
