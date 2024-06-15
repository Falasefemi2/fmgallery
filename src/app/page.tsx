import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

async function Images() {
  const image = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {image.map((i, index) => (
        <div key={i.id + "-" + index} className="w-48 flex flex-col">
          <img src={i.url} alt="image" />
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
