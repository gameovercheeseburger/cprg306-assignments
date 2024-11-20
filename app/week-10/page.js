"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);

  return (
    <div>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <p><a href="/week-10/shopping-list">Go to Shopping List</a></p>
        </div>
      )}
    </div>
  );
}
