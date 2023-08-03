import Head from "next/head"

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
      <main className="">
        Features Company Careers About Login Register Make remote work Get your
        team in sync, no matter your location. Streamline processes, create team
        rituals, and watch productivity soar. Learn more
      </main>
    </>
  )
}
