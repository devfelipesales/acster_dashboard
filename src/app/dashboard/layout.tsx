import SideNav from "./(overview)/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // h-[calc(100vh - 2rem)] -> O calc -2rem é para evitar barra de rolagem.
    // Nesse caso, 2rem refere-se a soma do padding top e bottom utilizado no Body
    <div className="md:grid-cols-auto-2 h-[calc(100vh - 2rem)] grid gap-4 overflow-hidden">
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
