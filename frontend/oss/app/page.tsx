'use client';
import { useState, useEffect } from "react";
import Home from "@/home/home";
import Splash from "@/splash/Splash";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <Splash /> : <Home />}
    </>
  );
}

