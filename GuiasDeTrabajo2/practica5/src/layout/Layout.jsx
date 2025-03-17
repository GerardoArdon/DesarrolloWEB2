import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../store/useAppStore";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto container py-16">
        <Outlet />
      </main>
      <Modal />
    </>
  );
}
