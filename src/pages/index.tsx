import Head from "next/head"
import Image from "next/image"
import { Button } from "~/components/Button"
import Logos from "~/components/Logos"

export default function Home() {
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
                <Image
                  width={10}
                  height={6}
                  src="/assets/icon-arrow-down.svg"
                  alt="arrow"
                  aria-hidden={true}
                />
              </li>
              <li className="flex items-center space-x-2">
                <label>Careers</label>
                <Image
                  width={10}
                  height={6}
                  src="/assets/icon-arrow-down.svg"
                  alt="arrow"
                  aria-hidden={true}
                />
              </li>
              <li>About</li>
            </ul>
          </div>
          <ul className=" hidden items-center space-x-8 md:flex">
            <li className="hidden md:block">
              <li className="hidden md:block">Login</li>
            </li>
            <Button text={"Register"} />
          </ul>
          <Image
            width={32}
            height={18}
            src="assets/icon-menu.svg"
            alt="logo"
            className="md:hidden"
          />
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
