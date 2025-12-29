import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            padding: "20px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>Ner-Digital</strong>
          <NavBar />
        </header>

        <main style={{ padding: "40px" }}>{children}</main>

        <footer style={{ padding: "20px", borderTop: "1px solid #eee" }}>
          © {new Date().getFullYear()} Ner-Digital
        </footer>
      </body>
    </html>
  );
}
