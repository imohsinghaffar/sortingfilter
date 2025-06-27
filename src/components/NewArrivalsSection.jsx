
import { newArrivals } from "../../data"
import Card from "./products/Card"
const NewArrivalsSection = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10  min-h-screen">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends and freshest products just added to our collection
          </p>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {newArrivals.map(
      ({ images, price, id, title, description, category: { name } }, index) => (
        <Card
          key={index}
          category={name}
          images={images}
          price={price}
          title={title}
          description={description}
          id={id}
        />
      )
    )}
  </div>
  </div>
  </section>
  )
}

export default NewArrivalsSection
