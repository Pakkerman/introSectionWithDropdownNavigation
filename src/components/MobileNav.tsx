import { useEffect, useState } from "react"
import { Logo, MenuIcon } from "./icons/Icons"
import { MobileMenu } from "./MobileMenu"

type BackdropProps = {
  show: boolean
  toggleShow: (state: boolean) => void
}

const Backdrop = ({ show, toggleShow }: BackdropProps) => {
  return (
    <div
      className={` ${
        show
          ? "pointer-events-auto opacity-70"
          : "pointer-events-none opacity-0"
      }
      fixed left-0 top-0 z-10 h-[100dvh] w-[100vw] bg-AlmostBlack transition-all duration-300`}
      onClick={() => toggleShow(false)}
    />
  )
}

export const MobileNav = () => {
  const [show, toggleShow] = useState<boolean>(false)

  const handleResize = (event: Event): void => {
    const target = event.target as Window
    if (target.innerWidth < 768) return
    toggleShow(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="flex h-full w-full items-center justify-between md:hidden">
        <Logo />
        <div
          className="cursor-pointer transition-all hover:scale-110 md:translate-x-[200px]"
          onClick={() => toggleShow(true)}
        >
          <MenuIcon />
        </div>
      </div>
      <Backdrop show={show} toggleShow={toggleShow} />
      <MobileMenu show={show} toggleShow={toggleShow} />
    </>
  )
}
