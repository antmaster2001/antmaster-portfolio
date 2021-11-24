import Image from "next/image"

export default function Nav() {
  return (
    <div className="flex justify-between pt-5">
      <a href="/" className="flex">
        <h3 className="text-gray-50 font-bold">GIJS BAKKER</h3>
      </a>
      <div className="flex">
        <a href="#about" className="mx-3">
          <h3 className="text-gray-50 font-bold text-lg"> Over</h3>
        </a>
        <a href="/work" className="mx-3">
          <h3 className="text-gray-50 font-bold text-lg">Projecten</h3>
        </a>
      </div>
    </div>
  )
}
