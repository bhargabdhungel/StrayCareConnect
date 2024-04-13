// import { Button } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";

// const button = createTheme({
//   palette: {
//     primary: {
//       main: "#1D9BF0",
//     },
//     secondary: {
//       main: "#2A91D8",
//     },
//   },
// });

// export default function Landing() {
//   return (
// <div className="w-full h-screen flex flex-col items-center justify-center bg-custom-bg-primary text-custom-text-primary gap-3">
//   <div>
//     <h1 className="text-3xl">This is Landing Page </h1>
//     <h1 className="text-3xl">We should show some content here</h1>
//     <h1 className="text-3xl">Like images of animals or something</h1>
//   </div>
// </div>
//   );
// }
import Button from "../components/Button";

export default function Landing() {
  return (
    <div>
      <header className="bg-white custom-text-secondary py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 flex-grow">
          <a href="/home/sponsor">
            <Button primary>Sponsor</Button>
          </a>
        </div>
        <div className="flex items-center space-x-4 flex-grow">
          <span className="text-2xl font-bold text-custom-text-secondary flex">
            <img
              src="/images/logo4.jpeg"
              alt="kela"
              width="40px"
              className="px-0.5 "
            />
            StrayCare
            <span className="text-2xl font-bold text-custom-text-tertiary ">
              Connect
            </span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login">
            <Button secondary>Login</Button>
          </a>
          <a href="/signup">
            <Button secondary>Signup</Button>
          </a>
        </div>
      </header>
      <img
        src="/images/landingimage.png"
        alt="landingimage"
        className="w-full"
      />
      <section className="homepage__intro bg-custom-bg-primary text-custom-bg-dark-secondary py-12">
        <div className="wrapper text-center">
          <h1 className="text-custom-bg-secondary text-4xl md:text-5xl font-bold mb-4">
            <span className="text-custom-bg-dark-primary">StrayCare</span>{" "}
            Connect
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 font-serif hover:font-normal">
            Helping find a home for every animal.
            <br />
          </h2>
          <p className="mx-auto mb-6 w-3/4 font-semibold">
            StrayCare has played a pivotal role in driving genuine societal
            transformation by popularizing animal adoption and integrating it
            into the mainstream. This initiative has significantly impacted the
            Indian rescue community, aiding thousands of pets in dire need of
            rescue and rehabilitation. However, the journey to ensure the
            safety, dignity, and affection for every pet remains an ongoing and
            substantial endeavor for us all.
          </p>
          <a href="https://github.com/bhargabdhungel/hackfest24">
            <Button secondary>Find out more</Button>
          </a>
        </div>
      </section>
      <div>
        <img
          src="https://d339b5nop2tkmp.cloudfront.net/assets/homepage/homepage_impact_bg_hills-9672a358aa9bda2720446f5f8b5868f2f7e6ae822a6e81c7175f2844e7e7e521.svg"
          alt=""
        />
        <div className="bg-custom-bg-special">
          <br />
          <br />
          <br />

          <div className="flex justify-around" height="30vh">
            <div className="text-center">
              <h1 className="text-custom-bg-dark-primary text-2xl md:text-3xl font-bold mb-4">
                Adopt Pets
              </h1>
              <br />
              <br />
              <a href="/home/adopt">
                <Button darkButton>Boop for info</Button>
              </a>

              <img
                src="https://d339b5nop2tkmp.cloudfront.net/packs/static/assets/images/homepage/group1-d0399b791ea201ed0654.svg"
                width="150px"
                className="relative bottom-20 left-56"
              />
            </div>
            <div className="text-center">
              <h1 className="text-custom-bg-dark-primary text-2xl md:text-3xl font-bold mb-4">
                Food & products
              </h1>
              <h1 className="text-custom-bg-dark-primary text-2xl md:text-3xl font-bold mb-4">
                Donations
              </h1>
              <a href="/home/donate">
                <Button darkButton>Boop for info</Button>
              </a>

              <img
                src="https://d339b5nop2tkmp.cloudfront.net/packs/static/assets/images/homepage/group2-48a4341e048cbf483bbd.svg"
                alt=""
                width="150px"
                className="relative bottom-20 left-72"
              />
            </div>
            <div className="text-center">
              <h1 className="text-custom-bg-dark-primary text-2xl md:text-3xl font-bold mb-4">
                New innovations
              </h1>
              <br />
              <br />
              <a href="/home/sponsor">
                <Button darkButton>Boop for info</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 text-custom-bg-dark-secondary py-12">
        <div className="text-center pb-8">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 font-sans">
            Latest From StrayCare Connect
          </h1>
        </div>
        <div className="flex justify-around px-40">
          <div className="text-center">
            <div
              className="card border border-custom-bg-secondary rounded-3xl"
              style={{ width: "18rem" }}
            >
              <img
                src="/images/catimage.png"
                className="w-full h-auto rounded-3xl"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold text-custom-bg-special">
                  The Heartwarming World of Pet Fostering: A Conversation with
                  Jen
                </h5>
                <p className="card-text text-custom-bg-dark-primary font-medium">
                  Did you know that over 70% of the pets you see listed on
                  PetRescue each day are actually in foster care, not shelters?
                </p>
                <div className="py-2">
                  <Button secondary>Read this Story </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div
              className="card border border-custom-bg-secondary rounded-3xl"
              style={{ width: "18rem" }}
            >
              <img
                src="/images/dogimage.png"
                className="w-full h-auto rounded-3xl"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold text-custom-bg-special">
                  The power of sharing: when the community comes together.
                </h5>
                <p className="card-text text-custom-bg-dark-primary font-medium">
                  We’re all on our own unique journey, and some of us are going
                  through particularly difficult challenges that few others are
                  aware of.
                </p>
                <div className="py-2">
                  <Button secondary>Read this Story </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div
              className="card border border-custom-bg-secondary rounded-3xl"
              style={{ width: "18rem" }}
            >
              <img
                src="/images/dogimage2.png"
                className="w-full h-auto rounded-3xl"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-xl font-semibold text-custom-bg-special">
                  The Heartwarming World of Pet Fostering: A Conversation with
                  Jen
                </h5>
                <p className="card-text text-custom-bg-dark-primary font-medium">
                  Did you know that over 70% of the pets you see listed on
                  PetRescue each day are actually in foster care, not shelters?
                </p>
                <div className="py-2">
                  <Button secondary>Read this Story </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-bg-special flex text-center">
        <div>
          <h1 className="text-center ml-28 p-40 text-custom-white-text-active text-3xl md:text-6xl font-bold font-sans">
            Building A humane
            <div>Community</div>
          </h1>
        </div>
        <div className="py-20">
          <img src="/images/hero.png" alt="" width="300px" />
        </div>
      </div>
      <div className="bg-custom-bg-dark-primary text-custom-bg-primary p-7">
        <div className="mx-40">
          Copyright © 2024 StrayCare Connect All rights reserved
        </div>
      </div>
    </div>
  );
}
