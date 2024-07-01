import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-green-100 place-content-center ">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
        
      <div className="flex flex-col text-5xl">
          <span className="font-thin">Best Design of</span>
          <span className="font-bold">Fashion Collections</span>
        </div>
        <p className="w-70">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-cyan-400 uppercase">Discover</button>
      </div>

      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="Hero bacground" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default Hero