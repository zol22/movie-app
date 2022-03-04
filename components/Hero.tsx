import Image from "next/image";

function Hero() {
  return (
    <div className="text-center bg-white pb-10">
      <div className="mx-auto">
        {/*<Image
          src={"/movieNight.png"}
          width={200}
          height={100}
          layout="responsive"
          alt="Image hero cover "
       />*/}
        <h1 className="text-2xl text-gray-700 uppercase font-bold">
          Welcome to movie Database
        </h1>
        <p className="text-gray-500"> Here, you can search movies...</p>
      </div>
    </div>
  );
}

export default Hero;
