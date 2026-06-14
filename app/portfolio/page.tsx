import { redirect } from "next/navigation";

export default function PortfolioRedirectPage() {
  // TEMPORARILY DISABLED: Legacy portfolio access.
  // TODO: Redirect to /works once the Works feature is re-enabled.
  redirect("/");
}
