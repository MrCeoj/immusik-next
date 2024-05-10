"use client";

import { signOut, useSession } from "next-auth/react";
import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/16/solid";

export default function BarraNavegacionAdmin() {

  return (
    <div className="w-screen flex items-center fixed top-0 z-50 rounded-lg mt-1 px-1 text-white">
      <ArrowLeftStartOnRectangleIcon
        onClick={() => signOut()}
        className="w-10 m-1 ml-auto cursor-pointer"
      />
    </div>
  );
}
