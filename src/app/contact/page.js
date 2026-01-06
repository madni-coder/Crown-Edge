import { redirect } from "next/navigation";

export default function ContactRedirect() {
    // Server-side redirect to the home page with a section query
    redirect('/?section=contact');
}
