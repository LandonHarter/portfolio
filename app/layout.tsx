'use client'

import './globals.css'
import Header from "@/app/components/header/header";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Footer from "@/app/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const route = usePathname();

  return (
    <html lang="en">
      <body>
          <Header />
          <AnimatePresence mode="wait">
              <motion.div
                  key={route}
                  initial="initialState"
                  animate="animateState"
                  exit="exitState"
                  variants={{
                      initialState: {
                          opacity: 0,
                      },
                      animateState: {
                          opacity: 1,
                      },
                      exitState: {

                      },
                  }}
                  transition={{
                      delayChildren: 0.2,
                      duration: 0.4,
                  }}
              >
                  {children}
              </motion.div>
          </AnimatePresence>
          <Footer />
      </body>
    </html>
  )
}
