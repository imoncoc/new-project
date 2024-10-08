import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60376.jpg?t=st=1724558731~exp=1724562331~hmac=d30e67f2d61027f3602699bacb0ebecf49fc4090862583c67e56b55963494300&w=1480')`,
        // height: "calc(100vh - 100px)",
        backgroundAttachment: "fixed",
        height: "80vh",
      }}
    >
      <div className="container mx-auto  h-full text-white text-center flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
            style={{
              textShadow:
                "1px 1px 2px #26BAA4, 0 0 1em #26BAA4, 0 0 0.2em #26BAA4",
            }}
          >
            Sports Facility Platform
          </h1>
          <p
            className="text-xl px-8 sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              // textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)"
              textShadow: "1px 1px 2px white, 0 0 1em #6173FF, 0 0 0.2em white",
            }}
          >
            Book your favorite sports pitch for any game. Play your way, your
            time, with easy bookings and flexible timings.
          </p>

          <div>
            <button
              onClick={() => navigate("/facility-listing")}
              className="custom-secondary-button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
