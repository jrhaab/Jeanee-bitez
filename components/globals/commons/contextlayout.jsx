"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "@/store/app.context";
import HotToasterWrapper from "./hotToasterWrapper";
import SonnerToasterWrapper from "./sonnerToasterWrapper";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function AppContextWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppContextProvider>
        <Suspense>
          <HotToasterWrapper />
          <SonnerToasterWrapper />
          {children}
          <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
        </Suspense>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
