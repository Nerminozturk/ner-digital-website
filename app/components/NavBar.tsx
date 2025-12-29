import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/how-it-works">How It Works</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
