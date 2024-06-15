import { db } from "~/server/db";

export const dynamic = "force-dynamic"


export default async function HomePage() {
  const image = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {image.map((i, index) => (
          <div key={i.id + "-" + index} className="w-48 flex flex-col">
            <img src={i.url} alt="image" />
            <div>{i.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
