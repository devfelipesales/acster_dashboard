import SideNav from "./(overview)/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto flex-col gap-4 md:h-screen md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
