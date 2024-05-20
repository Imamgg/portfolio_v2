

const Fieldform = () => {
  return (
    <div className="lg:w-[50%] w-[90%] mr-44 z-50 flex flex-col justify-center lg:mt-0 mt-10 px-5 ">
      <h2
        data-aos="fade-right"
        data-aos-duration="900"
        className="lg:text-2xl font-bold mb-4 text-sm"
      >
        Have something to discuss? Send me a message and let's talk.
      </h2>
      <form data-aos="fade-up" data-aos-duration="800" className="space-y-4" method="get">
        <div>
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-[330px] lg:w-full p-3 bg-slate-950 border border-gray-700 rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-white font-bold mb-2" htmlFor="from">
            From
          </label>
          <input
            type="text"
            id="from"
            className="w-[330px] lg:w-full p-3 bg-slate-950 border border-gray-700 rounded"
            placeholder="From"
          />
        </div>
        <div>
          <label className="block text-white mb-2 font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-[330px] lg:w-full bg-slate-950 border border-gray-700 rounded"
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[150px] lg:w-full p-3 bg-main hover:bg-indigo-950 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Fieldform;