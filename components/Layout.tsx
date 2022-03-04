import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainNavigation />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
