
const GoodHeader = (params) => {
  return (
    <div className="text-left w-min whitespace-nowrap">
      <h1 className="text-gray-50 font-bold mb-1">{params.title}</h1>
      <div className="h-1 bg-gray-500"></div>
    </div>
  )
}

export default GoodHeader;
