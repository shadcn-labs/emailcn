export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-svh overflow-hidden bg-background">{children}</main>
  );
}
