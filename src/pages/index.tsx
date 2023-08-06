import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "~/components/Button"
import Logos from "~/components/Logos"
import { MobileMenu } from "~/components/MobileMenu"

import {
  ArrowDownIcon,
  CloseMenuIcon,
  MenuIcon,
} from "~/components/icons/Icons"

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true)

  const handleResize = (event: Event): void => {
    const target = event.target as Window
    if (target.innerWidth <= 768) return
    setToggleMenu(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A Frontend Mentor Challenge with Create T3 App"
        />
        <link rel="icon" href="favicon.png" />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <main className="h-[100dvh] min-h-[800px]">
        <nav className=" flex h-20 items-center justify-between px-8 py-6">
          <div className=" flex items-center space-x-16">
            <Image
              width={84}
              height={27}
              src="assets/logo.svg"
              alt="logo"
              className=""
            />
            <ul className="  hidden items-center space-x-6 md:flex">
              <li className="flex items-center space-x-2">
                <label>Features</label>
                <ArrowDownIcon />
              </li>
              <li className="flex items-center space-x-2">
                <label>Careers</label>
                <ArrowDownIcon />
              </li>
              <li>About</li>
            </ul>
          </div>
          <ul className=" hidden items-center space-x-8 md:flex">
            <li className="hidden md:block">Login</li>
            <li className="hidden md:block">
              <Button text={"Register"} />
            </li>
          </ul>
          <div
            className="cursor-pointer transition-all  hover:scale-110 md:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </div>
          <div
            className={`
            ${
              toggleMenu
                ? "pointer-events-auto opacity-70"
                : "pointer-events-none opacity-0"
            }
            fixed left-0 top-0 z-10 h-[100dvh] w-[100vw] bg-AlmostBlack transition-all duration-300
                `}
            onClick={() => setToggleMenu(false)}
          />
          <div
            className={`
              ${toggleMenu ? "translate-x-0" : " translate-x-[100%]"}
              fixed right-0 top-0 z-20 h-[100dvh] min-h-[500px] w-[75vw] max-w-[250px] overflow-y-scroll bg-AlmostWhite p-4 text-MediumGray transition-transform duration-300`}
          >
            <div className="flex h-16 w-full items-start justify-end p-2">
              <div
                className="cursor-pointer transition-all hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <CloseMenuIcon />
              </div>
            </div>
            <MobileMenu />
          </div>
        </nav>
        <section className="mx-auto min-h-[700px] max-w-[375px]">
          <div className="min-h-[284px] bg-mobile bg-cover bg-no-repeat md:bg-desktop" />
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* because of the line break difference of mobile and desktop, we use two separate elements */}
            <h1 className="text-4xl font-bold md:hidden">Make remote work</h1>
            <div className="hidden md:block ">
              <h1 className="text-5xl font-bold transition-all md:text-6xl  xl:text-7xl ">
                Make
              </h1>
              <h1 className=" text-5xl font-bold transition-all md:text-6xl  xl:text-7xl ">
                remote work
              </h1>
            </div>
            <article className="px-4 text-center text-MediumGray">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </article>
            <Button text={"Learn More"} />
            <Logos />
          </div>
        </section>
      </main>
    </>
  )
}
