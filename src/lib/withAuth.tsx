import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Componente de alto orden que protege un componente de usuarios no autenticados
 * @param Component
 * @returns
 */
export default function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    
    // Obtener la sesión del usuario
    const { data: session, status } = useSession();

    // Verificar si hay un usuario autenticado
    const isUser = !!session?.user;

    useEffect(() => {
      if (status === "loading") return; // Cuando la sesión está cargando, no hacer nada
      if (!isUser) router.push("/login"); // Si no hay usuario, redirigir a la página de inicio de sesión
    }, [isUser, router, status]);

    if (isUser) {
      return <Component {...props} />;
    }

    // Si no hay usuario, no renderizar el componente
    // Esto es para evitar que el componente se renderice antes de que se redirija a la página de inicio de sesión
    return null;
  };
}
