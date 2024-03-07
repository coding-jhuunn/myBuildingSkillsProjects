import { useEffect, useState } from "react";

const BASE_URL = "https://meowfacts.herokuapp.com/";

type catFacts = {
  data: string;
};

function App() {
  const [facts, setFacts] = useState<catFacts | null>();

  const [time, setTime] = useState(new Date());

  const item = facts?.data;
  async function FetchData() {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(BASE_URL, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((data) => {
        setFacts(data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => abortController.abort();
  }

  useEffect(() => {
    FetchData();
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, [time]);
  return (
    <>
      <div className="container  bg-dark-green  flex flex-col w-80 min-h-96 max-h-full p-5 rounded-lg shadow-2xl">
        <div className="facts font-mono leading-tight bg-light-brown flex justify-center items-center min-h-64 p-5 mb-7 rounded-lg shadow-lg">
          <h1 className="text-justify">{item}</h1>
        </div>
        <div className="title flex justify-center items-center content-center text-lg ">
          <p className="text-center font-semibold ">
            Getting Cats Facts from an
            <a
              href="https://alexwohlbruck.github.io/cat-facts/docs/"
              className="hover:underline"
            >
              {" "}
              API
            </a>
          </p>
        </div>
        <div className="credits   flex flex-col justify-center items-center text-sm mt-2">
          <p>React TS & Tailwind CSS API Project</p>
          <p>
            {" "}
            <a
              className="text-white italic hover:underline "
              href="https://github.com/coding-jhuunn/myFetchApiProj"
            >
              coding-jhuunn
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
