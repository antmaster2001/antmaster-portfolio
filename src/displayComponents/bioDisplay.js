import Image from "next/image"
import {GoodHeader} from "../index"

const BioDisplay = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="text-left mr-8">
          <h1 className="text-white text-2xl">Gijs Bakker</h1>
          <p className="text-white">Full-Stack programmer</p>
        </div>
        <div>
          <Image src="/pf.jpg" width="100" height="100" className="rounded-full" />
        </div>
      </div>
      <GoodHeader title='My Profile' />
      <p>Hello! my name is Gijs</p>
      <GoodHeader title='Bio' />
      <p>Hello! my name is Gijs</p>
    </div>
  )
}

export default BioDisplay;
