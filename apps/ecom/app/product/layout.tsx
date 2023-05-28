export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <div> Product Layout comes here</div>
        {children}
      </body>
    </html>
  );
}
