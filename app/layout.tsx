// Import global style
import '@/app/ui/global.css';
//Import fonts from fonts.ts
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Added inter font to Body Element */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
