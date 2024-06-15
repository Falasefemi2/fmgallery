import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6223cf91-03ff-4e29-88ba-b409ff7701ee-passar.PNG",
  "https://utfs.io/f/a843f1ff-5625-4c89-a919-82df496b0846-cm3pi8.PNG",
  "https://utfs.io/f/d0a1bdc6-9871-4cae-b519-d9807a8b15dd-6zu4o1.PNG",
  "https://utfs.io/f/140c6733-4df4-409d-b151-1f6bb2dba4ab-wthooa.PNG",
  "https://utfs.io/f/640ce2c7-9a89-42d5-9aee-7ca2adc9cf4a-197j2.PNG",
  "https://utfs.io/f/6155181c-abff-4496-be2d-01378ef0d085-vu33ci.PNG",
  "https://utfs.io/f/a14bce21-dfb2-4f86-ac2d-5d7c23493c9a-1g1h1.PNG"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
