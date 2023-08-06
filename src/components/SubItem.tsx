import {
  TodoIcon,
  CalendarIcon,
  RemaindersIcon,
  PlanningIcon,
} from "./icons/Icons"

const ICONS: Record<string, JSX.Element> = {
  "Todo List": <TodoIcon />,
  Calendar: <CalendarIcon />,
  Reminders: <RemaindersIcon />,
  Planning: <PlanningIcon />,
}

type SubItemProps = {
  label: string
}
export const SubItem = ({ label }: SubItemProps) => {
  return (
    <div className="flex space-x-2">
      {ICONS[label]}
      <p>{label}</p>
    </div>
  )
}
