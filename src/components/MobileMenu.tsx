import { Button } from "./Button"
import { MenuItem } from "./MenuItem"

export const MobileMenu = () => {
  return (
    <>
      <MenuItem
        label={"Features"}
        subItems={["Todo List", "Calendar", "Reminders", "Planning"]}
      />
      <MenuItem label={"Company"} subItems={["History", "Our Team", "Blog"]} />
      <MenuItem label={"Careers"} />
      <MenuItem label={"About"} />
      <ul className="flex h-28 flex-col items-center justify-center space-y-4">
        <li className="">Login</li>
        <li className="">
          <Button text={"Register"} />
        </li>
      </ul>
    </>
  )
}
