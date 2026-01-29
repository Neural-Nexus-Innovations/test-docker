export default async function Home() {
  // We use the Docker service name 'express-api' for internal communication
  const res = await fetch('http://express-api:8003/api/data', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Next.js + Express Docker Test</h1>
      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Server Time:</strong> {data.timestamp}</p>
      </div>
    </main>
  );
}