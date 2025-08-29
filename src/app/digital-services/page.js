"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ServiceRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/digital-services/website");
  }, []);

  return null;
}
