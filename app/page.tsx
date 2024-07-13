"use client";
import { useCallback, useEffect, useState } from "react";

interface SupportCard {
  _id: string;
  name: string;
  gettableCardName: string;
  gettableCardText: string;
  supportEvent1: string;
  supportEvent2: string;
  ability1: string;
  ability2: string;
  ability3: string;
  ability4: string;
  ability5: string;
  ability6: string;
  lessonSupport: string;
}

export default function Home() {
  const [data, setData] = useState<SupportCard[]>([]);
  /* 第２引数にdataを入れないこと useEffectを何度も繰り返してしまうため */
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getData");
      const json: SupportCard[] = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  const [displayTestJSON, setDisplayTestJSON] = useState<string>("");
  const buttontestHandler = useCallback(async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
    setDisplayTestJSON(json.message);
    console.log(displayTestJSON);
  }, [displayTestJSON]);

  const [displayJSON, setDisplayJSON] = useState<string>("");
  const buttonclickHandler = useCallback(() => {
    const jsonData = JSON.stringify(data, null, 2);
    setDisplayJSON(jsonData);
  }, [data]);

  return (
    <main>
      <h1 className="text-3xl font-bold mt-8">学マス比較</h1>
      <h1 className="text-2xl mt-4">Data from MongoDB</h1>

      <div className="w-full flex justify-center mt-6">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 max-w-screen-lg bg-gray-200 p-4 rounded shadow-md">
          <div>
            <table>
              <caption>Table Caption</caption>
              <thead>
                <tr>
                  <th>Name1</th>
                  <th>VS</th>
                  <th>Name2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                  <td>Data 6</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Footer 1</td>
                  <td>Footer 2</td>
                  <td>Footer 3</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={buttontestHandler}
          >
            APIテスト
          </button>
          <pre>{displayTestJSON}</pre>
          <div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={buttonclickHandler}
            >
              Display Data
            </button>
            <pre className="mt-4 whitespace-pre-wrap break-all">
              {displayJSON}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
