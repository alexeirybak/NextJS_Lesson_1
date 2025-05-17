import { clerkClient } from "@clerk/nextjs/server";
import { setRole, removeRole } from "./actions";

export default async function AdminPage() {
  const client = await clerkClient();

  const users = (await client.users.getUserList()).data;

  console.log(users);

  return (
    <>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className={`flex items-center justify-between gap-4 p-4 ${
              users.indexOf(user) % 2 === 0
                ? "bg-gray-50 dark:bg-gray-800"
                : "bg-white dark:bg-gray-900"
            }`}
          >
            <div className="flex gap-8">
              <div className="dark:text-gray-200">
                {user.firstName} {user.lastName}
              </div>
               
              <div className="dark:text-gray-200">
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </div>
               
              <div className="dark:text-gray-200">
                {user.publicMetadata.role as string}
              </div>
            </div>
             
            <div className="flex gap-2">
              <form action={setRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Сделать администратором
                </button>
              </form>
               
              <form action={setRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="moderator" name="role" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Сделать модератором
                </button>
              </form>
               
              <form action={removeRole} className="inline">
                <input type="hidden" value={user.id} name="id" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Удалить роль
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </>
  );
}
