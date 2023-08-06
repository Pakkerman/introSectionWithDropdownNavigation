import { useEffect, useState } from "react"
import { ArrowUpIcon } from "./icons/Icons"
import { SubItem } from "./SubItem"
import Link from "next/link"

type MenuLabelProps = {
  label: string
}

const MenuLabel = ({ label }: MenuLabelProps) => {
  return (
    <div className="cursor-pointer py-2">
      <h1>{label}</h1>
    </div>
  )
}

type SubMenuProps = {
  label: string
  subItems?: Array<string>
}

export const MenuItem = ({ label, subItems = [] }: SubMenuProps) => {
  const [open, setOpen] = useState(true)

  const handleResize = (event: Event): void => {
    const target = event.target as Window
    if (target.innerWidth <= 768) return
    setOpen(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (subItems.length === 0)
    return (
      <Link href="#">
        <MenuLabel label={label} />
      </Link>
    )

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center space-x-2"
      >
        <MenuLabel label={label} />
        <div className={`${open ? "rotate-0" : "rotate-180"} transition-all`}>
          <ArrowUpIcon />
        </div>
      </div>
      <div
        className={`
        ${open ? "" : "h-0"}
          overflow-hidden transition-all duration-300`}
      >
        <div className=" w-full flex-col space-y-4 p-6 transition-all duration-300 ">
          {subItems.map((item, idx) => (
            <SubItem key={idx} label={item} />
          ))}
        </div>
      </div>
    </>
  )
}
