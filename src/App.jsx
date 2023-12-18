import {
  FaUser,
  FaPhone,
  FaCheckCircle,
  FaGraduationCap,
  FaLanguage,
  FaBriefcase,
} from "react-icons/fa";
import Title from "./Title";

function App() {
  const contact = [
    { title: "Name", content: "Lê Huy Hoàng" },
    { title: "Phone", content: "0241 520 18 88" },
    { title: "Email", content: "hhoangle2323@gmail.com" },
    { title: "Website", content: "https://my-cv-2323.netlify.app" },
  ];

  const eduHistory = [
    {
      year: "2020",
      content: `Studying Software Technology at HaNoi University of Mining and Geology -GPA: 3.36`,
    },
    {
      year: "2022",
      content: "Studying Web Development",
    },
    {
      year: "2020",
      content:
        "This text is a text that is of no use and is used in the filling of blanks Do not tire yourself in the readers in this text is useless, did you understand or not? , You seem to insist on reading, so do what you want",
    },
  ];

  const expHistory = [
    {
      year: "2020",
      content:
        "This text is a text that is of no use and is used in the filling of blanks Do not tire yourself in the readers in this text is useless, did you understand or not? , You seem to insist on reading, so do what you want",
    },
    {
      year: "2020",
      content:
        "This text is a text that is of no use and is used in the filling of blanks Do not tire yourself in the readers in this text is useless, did you understand or not? , You seem to insist on reading, so do what you want",
    },
  ];

  const languages = [
    { name: "english", proficiency: "w-[70%]" },
    { name: "chinese", proficiency: "w-[3%]" },
  ];

  const skills = [
    { name: "HTML5", proficiency: "w-[86%]" },
    { name: "CSS3", proficiency: "w-[65%]" },
    { name: "JavaScript", proficiency: "w-[78%]" },
    { name: "ReactJS", proficiency: "w-[68%]" },
    { name: "NodeJS", proficiency: "w-[20%]" },
    { name: "TailwindCSS", proficiency: "w-[50%]" },
    { name: "ExpressJS", proficiency: "w-[23%]" },
    { name: "MongoDB", proficiency: "w-[15%]" },
    { name: "MySQL", proficiency: "w-[46%]" },
    { name: "Git", proficiency: "w-[70%]" },
  ];

  return (
    <div className="relative mx-auto my-5 h-[1082px] w-[800px] overflow-hidden shadow-[0_0_33px_-4px_rgba(0,0,0,1)] ">
      <header className="absolute top-0 h-[220px] w-full bg-transparent">
        <div className="absolute left-[-34px] top-[-74px] z-[3] h-[261px] w-[859px] -rotate-[5deg] bg-[#212b37] "></div>
        <div className="absolute -left-[34px] -top-[56px] z-[2] h-[252px] w-[859px] -rotate-[3deg] bg-[#ff1f2f] "></div>
        <div className="absolute left-[-34px] top-[-43px] z-[1] h-[252px] w-[859px] -rotate-[2deg] bg-[#ce142b] "></div>
        <div className="absolute right-[50px] top-[24px] z-[4] w-[350px] overflow-hidden bg-transparent">
          <h3 className="pb-[5px] font-open-sans text-[45px] font-bold uppercase text-white">
            Lê Huy Hoàng
          </h3>
          <p className="font-open-sans text-[15px] uppercase tracking-[3px] text-white">
            Web designer & developer
          </p>
        </div>
        <div className="absolute left-[67px] top-[14px] z-[4] h-[230px] w-[230px] overflow-hidden rounded-full bg-[#ff1f2f] ">
          <div className="absolute left-[10px] top-[10px] h-[210px] w-[210px] overflow-hidden rounded-full bg-white ">
            <div className="absolute left-[10px] top-[10px] h-[190px] w-[190px] scale-125 overflow-hidden rounded-full bg-myself bg-cover bg-no-repeat "></div>
          </div>
        </div>
      </header>
      <section className="top-[186px] flex h-full w-full justify-center overflow-hidden bg-transparent">
        <aside className="flex h-full w-1/2 flex-col overflow-hidden bg-[#eaebed] pt-[280px]">
          <div className="h-[255px] ">
            <div className="mb-4 w-full overflow-hidden bg-transparent ">
              <Title icon={<FaUser />} border="end" title="Profile" />
            </div>
            <p className="px-[26px] font-montserrat text-[13px] leading-6 text-text">
              This text is a text that is of no use and is used in the filling
              of blanks Do not tire yourself in the readers in this text is
              useless, did you understand or not? , You seem to insist on
              reading, so do what you want This text is a text that is of no use
              and is used in the filling of blanks Do not tire yourself in the
              readers in this text is useless, did you understand or not? , You
              seem to insist on reading, so do what you want
            </p>
          </div>
          <div className="mb-[3px] mt-4 h-[196px] w-full font-open-sans">
            <Title border="end" icon={<FaPhone />} title="Contact" />
            <ul className="mt-4 px-[26px] text-[15px]">
              {contact.map((item, index) => {
                if (index === contact.length - 1) {
                  return (
                    <li className="flex justify-between" key={index}>
                      <span className="font-bold uppercase">{item.title}</span>
                      <p className="w-[260px]">
                        <a
                          href={item.content}
                          target="_blank"
                          className="hover:text-[#ff1f2f]"
                        >
                          {item.content}
                        </a>
                      </p>
                    </li>
                  );
                }
                return (
                  <li className="flex justify-between pb-4" key={index}>
                    <span className="font-bold uppercase">{item.title}</span>
                    <p className="w-[260px]">{item.content}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-4 w-full overflow-hidden">
            <Title border="end" icon={<FaCheckCircle />} title="Skills" />
            <div className="mt-4 h-[264px] w-full overflow-y-scroll px-[26px] text-[15px] ">
              {skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-4 font-open-sans"
                  >
                    <p className=" font-bold">{item.name}</p>
                    <div
                      className={`h-2 w-[216px] overflow-hidden rounded-full bg-[#ff1f2f]`}
                    >
                      <div
                        className={` h-full ${item.proficiency} bg-[#b3172f]`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
        <article className="flex h-full w-1/2 flex-col overflow-hidden bg-white px-[26px] pt-[280px]">
          <div className="mb-[18px] overflow-hidden border-b border-[#e6e6e6] pb-2.5">
            <Title title="education" iconIsOut icon={<FaGraduationCap />} />
            <div className="mt-[15px] h-[216px]  w-full hover:overflow-y-scroll">
              {eduHistory.map((item, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <p className="font-open-sans text-[14px] font-bold">
                      {item.year}
                    </p>
                    <h3 className=" font-open-sans text-[15px] font-bold uppercase">
                      Starting
                    </h3>
                    <p className="font-montserrat text-[10px]">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-[18px] overflow-hidden border-b border-[#e6e6e6] pb-2.5">
            <Title title="experience" iconIsOut icon={<FaBriefcase />} />
            <div className="mt-[15px] h-[216px]  w-full hover:overflow-y-scroll">
              {expHistory.map((item, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <p className="font-open-sans text-[14px] font-bold">
                      {item.year}
                    </p>
                    <h3 className=" font-open-sans text-[15px] font-bold uppercase">
                      Starting
                    </h3>
                    <p className="font-montserrat text-[10px]">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <Title title="languages" iconIsOut icon={<FaLanguage />} />
            <div className="mt-[15px] h-full w-full overflow-y-scroll">
              {languages.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-4 font-open-sans"
                  >
                    <p className="font-bold uppercase">{item.name}</p>
                    <div
                      className={`h-2 w-[216px] overflow-hidden rounded-full bg-[#ff1f2f]`}
                    >
                      <div
                        className={` h-full ${item.proficiency} bg-[#b3172f]`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
