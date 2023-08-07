import React from "react"
import { Button } from "./Button"
import { Logo } from "./icons/Icons"
import { MenuItem } from "./MenuItem"

export const DesktopNav = () => {
  return (
    <div className="hidden h-full items-center md:flex md:space-x-4 lg:space-x-6">
      <div className="w-24 transition-all lg:w-28">
        <Logo />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-6 transition-all lg:space-x-10">
          <MenuItem
            label={"Features"}
            subItems={["Todo List", "Calendar", "Reminders", "Planning"]}
            mode={"desktop"}
          />
          <MenuItem
            label={"Company"}
            subItems={["History", "Our Team", "Blog"]}
            mode={"desktop"}
          />
          <MenuItem label={"Careers"} mode={"none"} />
          <MenuItem label={"About"} mode={"none"} />
        </div>
        <div className=" hidden items-center  space-x-6 md:flex">
          <MenuItem label={"Login"} mode={"none"} />
          <Button text={"Register"} />
        </div>
      </div>
    </div>
  )
}
