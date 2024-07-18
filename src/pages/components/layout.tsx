import React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Container from "./container";

interface Props {
    children: ReactNode;
  }

export default function Layout({ children }: Props) {
    return (
      <html lang="pt-BR">
        <body className="min-h-screen bg-background font-sans antialiased bg-zinc-100">
          <Header />
          <Container className="py-4">
            <main>
              {children}
            </main>
          </Container>
        </body>
      </html>
    );
  }