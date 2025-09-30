type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-cyan-400">
      {children}
    </div>
  );
}
