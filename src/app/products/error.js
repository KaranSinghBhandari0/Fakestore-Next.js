"use client";

import ErrorFallback from "@/components/ErrorFallback";

export default function Error({ error, reset }) {
  return <ErrorFallback error={error} resetError={reset} />;
}
