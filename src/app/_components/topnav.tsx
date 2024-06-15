"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/uploadthing";

export function TopNav() {
    const router = useRouter()

    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border border-b">
            <div>Gallery</div>

            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        endpoint="imageUpload"
                        onClientUploadComplete={() => {
                            router.refresh();
                        }}
                    />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}