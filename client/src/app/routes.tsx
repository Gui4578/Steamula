import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/pages/Home/HomePage";
import LibraryPage from "@/pages/Library/LibraryPage";
import AuthPage from "@/pages/Auth/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "library", element: <LibraryPage /> },
      { path: "auth", element: <AuthPage /> },
    ],
  },
]);
