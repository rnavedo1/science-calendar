export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div>
        Johns Hopkins Medicine &copy; {new Date().getFullYear()} All rights
        reserved.
      </div>
    </footer>
  );
}
