import Link from 'next/link';

export default function Navigation() {
  const sections = [
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Academia', href: '/academia' }
  ];

  return (
    <nav className="mt-10 mb-auto">
      <ul className="space-y-4">
        {sections.map((section, idx) => (
          <li key={idx}>
            <Link
              href={section.href}
              className="movable-link text-lg"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
