export function Contact() {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Contact</h1>
      <p>Have a question or want to get in touch? Send us a message below.</p>
      <form style={{ display: "grid", gap: "12px", maxWidth: "400px" }}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" style={{ width: "100%", padding: "8px" }} />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" style={{ width: "100%", padding: "8px" }} />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Your message" rows="5" style={{ width: "100%", padding: "8px" }} />
        </label>
        <button type="submit" style={{ padding: "10px 16px", background: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}