import Image from "next/image";

const Profile = () => {
  return (
    <div className="md:px-12 md:py-8 px-5 py-6 border border-zinc-600 rounded-3xl bg-polygon bg-center md:m-0 my-4 mx-5">
      <div className="relative">
        <h1 className="text-2xl font-bold text-white mb-5">About Me</h1>
        <div className="md:w-96 w-40 h-[3px] block bg-purple-600 absolute top-[50%] left-[8rem] rounded-full"></div>
      </div>
      <div className="flex items-center justify-center gap-y-4 md:flex-nowrap flex-wrap">
        <div className="w-7/12 flex justify-center">
          <Image
            className="rounded-full"
            src="/image/profil.jpg"
            width={350}
            height={400}
            alt="Profile"
          />
        </div>
        <div className="md:w-7/12 text-amber-50">
          <p className="md:text-xl text-lg text-justify">
            &nbsp; &nbsp; Saya seorang mahasiswa yang menekuni bidang Teknik
            Informatika dengan fokus pada pengembangan Frontend dan Backend.
            Saya memiliki tekad yang kuat untuk terus belajar dan mengasah
            keterampilan saya demi mencapai kesempurnaan melalui perjalanan
            pendidikan saya, saya terus mengasah keterampilan dan kreativitas
            dalam bidang ini. Selamat datang di dunia saya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
