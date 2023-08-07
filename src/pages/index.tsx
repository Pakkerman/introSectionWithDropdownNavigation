import Head from "next/head"
import { ButtonBlack } from "~/components/Button"
import { DesktopNav } from "~/components/DesktopNav"
import Logos from "~/components/Logos"
import { MobileNav } from "~/components/MobileNav"

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A Frontend Mentor Challenge with Create T3 App"
        />
        <link rel="icon" href="assets/favicon.png" />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <main className="h-[100dvh] min-h-[800px]">
        <nav className="h-20 px-8 py-6">
          <DesktopNav />
          <MobileNav />
        </nav>
        <section className="mx-auto min-h-[700px] max-w-[375px] md:flex md:flex-row-reverse">
          <div className="min-h-[284px] bg-mobile bg-cover bg-no-repeat md:w-[720px] md:max-w-[1280px] md:bg-desktop" />
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
            <ButtonBlack text={"Learn More"} />
            <Logos />
          </div>
        </section>
      </main>
    </>
  )
}
