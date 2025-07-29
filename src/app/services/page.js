"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ServiceRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/services/website");
  }, []);

  return null;
}
