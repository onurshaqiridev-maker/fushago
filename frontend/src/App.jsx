// The landing page: the only screen in this first version.
// Text comes from docs/business.md and docs/brand-book.md.

function App() {
  return (
    <main className="landing">
      <header className="logo">
        <img src="/logo-icon.svg" alt="" width="56" height="56" />
        <span className="wordmark">
          Fusha<span className="go">Go</span>
        </span>
      </header>

      <section className="hero">
        <p className="badge">Së shpejti · Coming soon</p>
        <h1>Fusha jote, në një klik.</h1>
        <p className="tagline-en">Your pitch, one tap away.</p>
        <p className="pitch">
          Book a 5-a-side football pitch near you in 30 seconds, with no phone
          calls and no lost slots.
        </p>
      </section>

      <footer className="footer">
        Prishtinë · Prizren · Tetovë · Shkup
      </footer>
    </main>
  );
}

export default App;
