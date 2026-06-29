// import { redirect } from "next/navigation"

// export default function DashboardRedirect() {
//   redirect("/overview")
// }


import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect("/overview");

  return null;
}