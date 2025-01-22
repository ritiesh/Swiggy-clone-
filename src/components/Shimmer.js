const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10).fill(" ").map((e, index) => (
        <div key={index} className="w-48 bg-gray-300 m-6 rounded-2xl h-72"></div>
      ))}
    </div>
  )
}
export default Shimmer