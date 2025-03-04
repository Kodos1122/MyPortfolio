import React from 'react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Main content here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;