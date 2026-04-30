import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen text-text-primary">
      <Header />
      <main className="pb-20">
        <Outlet />
      </main>
    </div>
  );
}
