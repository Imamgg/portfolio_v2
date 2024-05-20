import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WavesContact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <svg
      data-aos="fade-up"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="bottom-0 right-0 left-0 z-10 absolute"
    >
      <path
        fill="#5438f3"
        fill-opacity="1"
        d="M0,32L48,74.7C96,117,192,203,288,240C384,277,480,267,576,266.7C672,267,768,277,864,261.3C960,245,1056,203,1152,208C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default WavesContact;
