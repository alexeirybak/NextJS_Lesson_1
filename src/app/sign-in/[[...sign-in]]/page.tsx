import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center py-10">
      <SignIn />
    </div>
  );
}
