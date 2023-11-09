'use client'; // React 'use client' directive
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx'; // import clsx for conditional styling
import Link from 'next/link';  //import nextjs Link component
import { usePathname } from 'next/navigation'; // import usePathname to use url path in code

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // get pathname from usePathname;
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // Replace <a> with <Link> to use nextjs Links
          <Link
            key={link.name}
            href={link.href}
            // use clsx to conditionally color link blue if it matches the current pathname
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            { 'bg-sky-100 text-blue-600' : pathname===link.href})}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
