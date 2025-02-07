import type { Metadata } from "next"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
// import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: "Ozy Hale Manipis | Web Developer",
  description: "Portfolio of Ozy Hale manipis, a passionate web developer specializing in PHP",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
}

