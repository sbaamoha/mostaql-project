export default function Banner() {
  return (
    <div className="relative flex flex-1 flex-col gap-5 p-6 bg-primary text-white rounded-xl">
      <h2 className="py-6 text-xl">مؤسسة بن محمد للإستشارات القانونية </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-6">
        <div className="flex items-center gap-2">
          <img src="/mainpage1.svg" alt="logo" />
          <p>رقم السجل التجاري: 5457 4543 97</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/mainpage2.svg" alt="logo" />
          <p>إسم المفوض: محمد محمد حسن</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/mainpage3.svg" alt="logo" />
          <p>+996 45 2980 777</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/mainpage4.svg" alt="logo" />
          <p>mohamedm@gmail.com</p>
        </div>
      </div>
      <button className=" mr-auto items-center gap-2 bg-white text-primary p-3 rounded-xl cursor-pointer hover:opacity-75 transition-opacity">
        طلب تمويل
        <img src="/mainpage5.svg" alt="arrow left" />
      </button>
    </div>
  );
}
