import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.2)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⌚</span>
              <span
                className="text-[#E8C96A] text-xl font-light tracking-wide"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                Time&Time
              </span>
            </div>
            <p
              className="text-[#C9A84C] text-sm leading-relaxed"
              style={{ fontFamily: 'DM Sans' }}
            >
              Premium luxury watches and electronics for the discerning timekeeper.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[#E8C96A] font-medium uppercase tracking-widest text-xs"
              style={{ fontFamily: 'Cinzel' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {['Watches', 'Smart Watches', 'Wall Clocks', 'Electronics'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#F5F0E8] text-sm hover:text-[#E8C96A] transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[#E8C96A] font-medium uppercase tracking-widest text-xs"
              style={{ fontFamily: 'Cinzel' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {['Repairs & Maintenance', 'Warranty Support', 'Custom Orders', 'Gift Wrapping'].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-[#F5F0E8] text-sm hover:text-[#E8C96A] transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[#E8C96A] font-medium uppercase tracking-widest text-xs"
              style={{ fontFamily: 'Cinzel' }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <p
                className="text-[#F5F0E8] text-sm"
                style={{ fontFamily: 'DM Sans' }}
              >
                Rawalpindi, Pakistan
              </p>
              <p
                className="text-[#F5F0E8] text-sm"
                style={{ fontFamily: 'DM Sans' }}
              >
                +92 (0) XXX XXXXXXX
              </p>
              <p
                className="text-[#F5F0E8] text-sm"
                style={{ fontFamily: 'DM Sans' }}
              >
                hello@timeandtime.pk
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(201,168,76,0.2)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#C9A84C] text-xs"
            style={{ fontFamily: 'DM Sans' }}
          >
            © 2024 Time&Time. All rights reserved.
          </p>
          <p
            className="text-[#E8C96A] text-xs font-light"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Crafted for timekeepers
          </p>
        </div>
      </div>
    </footer>
  );
}
