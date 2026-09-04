import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4">
      <UserButton />
      <OrganizationSwitcher />
    </div>
  )
}
