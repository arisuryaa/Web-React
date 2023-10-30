import React from "react";

const Ktp = () => {
  return (
    <div className="w-full h-screen bg-[#272727] flex justify-center items-center">
      <div className="w-2/3 border-2 border-white rounded-md ">
        <h1 className="mt-3 text-4xl font-semibold text-center text-white">KARTU TANDA PROGRAMER</h1>
        <div className="flex items-start justify-between">
          <div className="flex w-1/2 px-5 my-16 font-medium text-white">
            <div className="">
              <p className="mb-2">Nama</p>
              <p className="mb-2">Umur</p>
              <p className="mb-2">Agama</p>
              <p className="mb-2">Hobby</p>
              <p className="mb-2">Kewarganegaraan</p>
            </div>
            <div className="">
              <p className="mb-2"> : Dewa</p>
              <p className="mb-2"> : 17</p>
              <p className="mb-2"> : Hindu</p>
              <p className="mb-2"> : FIFA & Nongkrong</p>
              <p className="mb-2"> : Javascript</p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-1/2 px-5 my-12">
            <img src="../public/img/Pic.jpeg" alt="" className="w-auto rounded-md h-36 " />
            <img src="../public/img/ttd.png" alt="" className="w-auto px-5 mt-2 h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ktp;
