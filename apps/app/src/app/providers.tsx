"use client";

import { theme } from "@chatwoot-admin/app/styles/theme";
import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

export type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
