import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        404
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px", opacity: 0.8 }}>
        Página não encontrada
      </p>

      <Image
        src="/404.gif"
        alt="Página não encontrada"
        width={300}
        height={300}
        style={{
          marginBottom: "30px",
          objectFit: "contain",
        }}
      />

      <p style={{ marginBottom: "30px", opacity: 0.7 }}>
        Ops! Parece que você se perdeu 👀
      </p>

      <Link
        href="/"
        style={{
          padding: "12px 24px",
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        Voltar para a home
      </Link>
    </div>
  );
}
