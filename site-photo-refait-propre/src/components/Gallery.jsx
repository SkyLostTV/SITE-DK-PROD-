export default function Gallery() {
  const photos = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg"
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          className="rounded-2xl shadow-md object-cover w-full h-48 hover:scale-105 transition"
        />
      ))}
    </div>
  )
}
