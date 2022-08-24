import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title={"Your own store of nifty NFTs. Start Selling & Growing"}
        description={
          "Buy, store, collect NFT, excange & earn crypto. Join 11+ million people using proNef Marketplace."
        }
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
      <SectionWrapper
        title={"Smart User Interface Marketplace"}
        description={
          "Experience a buttery UI of proNef NFTs Marketplace. Smooth constant colors of a fluent UI design."
        }
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title={"Deployments"}
        description={
          "ProNef is build using Expo which runs natively on all users' devices. you can easily get your app into people's hands"
        }
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title={"Creative ways to showcase the store"}
        description={
          "The app contains two screens. The first screen  lists all NFTs and the second screen show the details of the a specific NFT"
        }
        mockupImg={assets.mockup}
        banner={"banner02"}
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="font-bold">RDev</span>
        </p>
      </div>
    </>
  );
};

export default App;
