import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center py-10">
      <SignUp />
    </div>
  );
}
