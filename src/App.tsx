import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <body>
      <nav>
        <div className="navbar bg-primary">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl text-primary-content">daisyUI</a>
          </div>
          <div className="flex-none gap-2">
            <SignedOut>
              <div className="btn btn-accent mr-2">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
      <div>

        <div className="mt-12 w-screen items-center justify-center flex">
          <SignedIn>
            <h1 className="text-5xl">You are signed in</h1>
          </SignedIn>
          <SignedOut>
            <h1 className="text-5xl">You are Not signed in</h1>
          </SignedOut>
        </div>
      </div >
    </body >
  )
}