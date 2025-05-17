import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="p-4 flex justify-center items-center">
      <UserProfile path="/user-profile" />
    </div>
  );
}
