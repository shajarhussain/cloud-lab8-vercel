const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME || "Malik Shajar Hussain";

export default function Home() {
  const completedLabs = ["Docker", "LocalStack", "Terraform", "Vercel"];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "90%",
          maxWidth: "760px",
          padding: "40px",
          borderRadius: "18px",
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Lab 8 — Vercel Deployment
        </h1>

        <p style={{ fontSize: "20px", margin: "8px 0" }}>
          Name: {studentName}
        </p>

        <p style={{ fontSize: "20px", margin: "8px 0" }}>
          Enrollment: 01-131232-043
        </p>

        <p style={{ fontSize: "18px", marginTop: "24px", color: "#555" }}>
          Frontend deployment using Next.js, Vercel, Serverless Functions,
          Edge Runtime, and Preview Deployments.
        </p>

        <div style={{ marginTop: "28px", textAlign: "left" }}>
          <h2 style={{ fontSize: "24px" }}>Completed Cloud Labs</h2>

          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            {completedLabs.map((lab) => (
              <li key={lab}>{lab}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}