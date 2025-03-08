const Hero = () => {
    return (
      <section className="relative text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,spa')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg inline-block">
          <h1 className="text-4xl font-bold text-white">Discover Serenity</h1>
          <p className="text-white mt-2">Explore wellness destinations for a peaceful mind & soul.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Now
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  