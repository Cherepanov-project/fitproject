import settingsIcon from "@/common/images/layoutUser/userbarIcons/SeetingsIcon.svg"
import goalsIcon from "@/common/images/layoutUser/userbarIcons/goals.svg"
import dietIcon from "@/common/images/layoutUser/userbarIcons/diet.svg"
import exerciesIcons from "@/common/images/layoutUser/userbarIcons/exercises.svg"

export interface ISideBarProps {
  avatar: StaticImageData
  userName: string
  lastDate?: Date | number
  includeSeconds: boolean
}

export enum RightSideBarTitles {
  Diet = "Diet",
  Settings = "Settings",
  Goals = "Goals",
  Exercises = "Exercises",
}

export enum RightSideBarIcons {
  Diet = dietIcon.src,
  Goals = goalsIcon.src,
  Settings = settingsIcon.src,
  Exercises = exerciesIcons.src,
}

export enum RightSideBarRoutes {
  Diet = "/user/listOfDishes",
  Goals = "/user/statistics",
  Settings = "/user/statistics",
  Exercises = "/user/workoutList",
}

export interface IRightSideBarItem {
  text: RightSideBarTitles
  src: RightSideBarIcons
  route: RightSideBarRoutes
}
