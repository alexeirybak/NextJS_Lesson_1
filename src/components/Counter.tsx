"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  //const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  //if (!isLoaded || !userId) return null;
  if (!isLoaded || !isSignedIn) return null;

  //   console.log(isLoaded);
  //   console.log(userId);
  //   console.log(sessionId);
  //   console.log(getToken);

  console.log(isSignedIn);
  console.log(user);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
};
