export const metadata = {
  title: 'Agentic App',
  description: 'Deployed via automated agent'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
