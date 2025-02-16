import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ILLUSITE</p>
    </footer>
  );
}
