import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function test() {
  const { data: session, status } = useSession();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      setCargando(true);
      return;
    }

    if (!session) {
    } else {
      setCargando(false);
    }
  }, [status, session]);

  return (
    <>
      {cargando ? (
        <div>Cargando..</div>
      ) : (
        <>
          {session ? (
            <div>{session?.user?.id}</div>
          ) : (
            <div>No está loggeado</div>
          )}
        </>
      )}
    </>
  );
}

export default test;
