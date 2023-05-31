import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <Link to="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: 25 }}>Home</Link>
          <Link to="products" style={{ color: 'blue', textDecoration: 'underline', fontSize: 25 }}>Products</Link>
          <Link to="notes" style={{ color: 'blue', textDecoration: 'underline', fontSize: 25 }}>Reviews</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
