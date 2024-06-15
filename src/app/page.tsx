import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((i) => (
        <div key={i.id} className="w-48 flex flex-col">
          <Image src={i.url}
            alt="image"
            style={{ objectFit: "contain" }}
            width={480}
            height={480}
          />
          <div>{i.name}</div>
        </div>
      ))}
    </div>
  )
}


export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}


