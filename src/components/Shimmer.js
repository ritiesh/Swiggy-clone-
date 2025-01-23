const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array(10).fill(" ").map((e, index) => (
        <div key={index} className="w-48 h-72 bg-gray-200 rounded-2xl animate-pulse"></div>
      ))}
    </div>
  )
}
export default Shimmer