import { OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div>
        <OrganizationSwitcher />
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  )
}
