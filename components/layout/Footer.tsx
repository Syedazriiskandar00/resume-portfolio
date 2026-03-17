export function Footer() {
  return (
    <footer className="bg-surface-950 py-6 text-center">
      <p className="text-sm text-white/30">
        &copy; {new Date().getFullYear()} Syed Azri. Built with Next.js &
        shipped from Johor.
      </p>
    </footer>
  );
}
