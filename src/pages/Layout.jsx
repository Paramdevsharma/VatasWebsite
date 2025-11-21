

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", url: createPageUrl("Home") },
  { name: "About", url: createPageUrl("About") },
  { name: "Services", url: createPageUrl("Services") },
  { name: "Projects", url: createPageUrl("Projects") },
  { name: "Vision", url: createPageUrl("Vision") },
  { name: "Contact", url: createPageUrl("Contact") },
];

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-dark)]">
      <style>{`
        :root {
          --color-primary-dark: #3B82F6;   /* Blue */
          --color-secondary-gray: #6B7280; /* Muted Gray */
          --color-background: #FFFFFF;     /* White */
          --color-accent-primary: #2563EB;  /* Darker Blue for accents/buttons */
          --color-accent-light: #F9FAFB;   /* Very Light Gray for sections */
          --color-text-dark: #1F2937;       /* Dark Gray for text */
          --color-text-muted: #6B7280;      /* Muted Gray for secondary text */
          --color-border: #E5E7EB;         /* Light border color */
        }
      `}</style>

      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Contact Bar */}
        <div className="bg-[var(--color-primary-dark)] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>647-760-5889</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>vatasinfrastructure@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block text-gray-100">
              Civil Engineering & Digital Solutions for Modern Infrastructure
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-[var(--color-background)] shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center gap-4">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c492baa23201e24e8eaa63/b1d6f271f_image.png" alt="Vatas Engineering Logo" className="h-12 w-auto" />
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text-dark)]">Vatas Engineering</div>
                  <div className="text-sm text-[var(--color-text-muted)] -mt-1">Integrated Engineering for Public Infrastructure</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      location.pathname === item.url
                        ? "text-[var(--color-primary-dark)] border-b-2 border-[var(--color-primary-dark)]"
                        : "text-[var(--color-secondary-gray)] hover:text-[var(--color-primary-dark)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to={createPageUrl("Contact")}>
                  <Button className="bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-primary-dark)] px-6">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden border-t border-[var(--color-border)] py-4">
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      className={`px-4 py-2 text-base font-medium ${
                        location.pathname === item.url
                          ? "text-[var(--color-primary-dark)] bg-[var(--color-accent-light)] rounded-md"
                          : "text-[var(--color-secondary-gray)]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="px-4 pt-2">
                    <Link to={createPageUrl("Contact")}>
                      <Button className="w-full bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-primary-dark)]">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[120px]"></div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--color-primary-dark)] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                 <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c492baa23201e24e8eaa63/b1d6f271f_image.png" alt="Vatas Engineering Logo" className="h-10 w-auto filter invert" />
                <div className="ml-4">
                  <div className="text-xl font-bold">Vatas Engineering</div>
                  <div className="text-gray-100 text-sm">Engineering Excellence for a Sustainable World</div>
                </div>
              </div>
              <p className="text-gray-200 mb-6 max-w-md">
                Vatas Engineering combines civil engineering expertise with custom software development to deliver complete solutions for modern infrastructure challenges.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-200">
                <li><Link to={createPageUrl("About")} className="hover:underline">About Us</Link></li>
                <li><Link to={createPageUrl("Services")} className="hover:underline">Our Services</Link></li>
                <li><Link to={createPageUrl("Projects")} className="hover:underline">Projects</Link></li>
                <li><Link to={createPageUrl("Vision")} className="hover:underline">Our Vision</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>647-760-5889</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>vatasinfrastructure@gmail.com</span>
                </div>
                <div className="pt-2">
                  <p>66 Crown Victoria Dr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Vatas Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

