import React from "react";
import { useRouter } from "next/router";

// Cria um novo contexto
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // Fecha a navegação lateral quando a rota mudar
  React.useEffect(() => {
    if (open) {
      router.events.on("routeChangeStart", () => setOpen(false));
    }

    return () => {
      if (open) {
        router.events.off("routeChangeStart", () => setOpen(false));
      }
    };
  }, [open, router]);

  // Fecha a navegação lateral ao clicar fora
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        setOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// Gancho personalizado para consumir todos os valores de contexto { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context);
}
