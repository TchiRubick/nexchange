"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, type FC, type ReactNode } from "react";

type AosProviderProps = {
  children: ReactNode
}

export const AosProvider: FC<AosProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return children;
}
