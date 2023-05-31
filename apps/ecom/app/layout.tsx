import './styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env;
  const tenant = env.NEXT_PUBLIC_TENANT;
  return (

    <html lang="en" data-theme="{tenant}" >
      <body>{children}</body>
    </html >
  );
}
