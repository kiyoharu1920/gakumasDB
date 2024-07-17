"use client";
import React, { ReactElement, useCallback, useEffect, useState } from "react";

interface SupportCard {
  _id: string;
  name: string;
  getCardName: string;
  getCardText: string;
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
  const [displayTestJSON, setDisplayTestJSON] = useState<string>("");
  const [displayJSON, setDisplayJSON] = useState<string>("");

  /* 第２引数にdataを入れないこと useEffectを何度も繰り返してしまうため */
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getData");
      const json: SupportCard[] = await res.json();
      setData(json);
      displayOptions(json); // Call displayOptions after setting data
    }

    fetchData();
  }, []);

  /* helloAPI test用*/
  const buttontestHandler = useCallback(async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
    setDisplayTestJSON(json.message);
    console.log(displayTestJSON);
  }, [displayTestJSON]);

  /* getDataAPI for mongoBD*/
  const buttonclickHandler = useCallback(() => {
    const jsonData = JSON.stringify(data, null, 2);
    setDisplayJSON(jsonData);
  }, [data]);

  const [options, setOptions] = useState<ReactElement[]>();
  const displayOptions = useCallback((data: SupportCard[]) => {
    const tmp = data.map((datum, i) => (
      <option key={i} value={datum.name}>
        {datum.name}
      </option>
    ));
    setOptions(tmp);
  }, []);

  const [left, setLeft] = useState<SupportCard>();
  const selectChangeHandlerForLeft = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const name = event.target.value;
      const selectedCard = data.find((card) => card.name === name);
      setLeft(selectedCard);
      console.log("Left selected:", selectedCard);
    },
    [data]
  );

  const [right, setRight] = useState<SupportCard>();
  const selectChangeHandlerForRight = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const name = event.target.value;
      const selectedCard = data.find((card) => card.name === name);
      setRight(selectedCard);
      console.log("Right selected:", selectedCard);
    },
    [data]
  );

  return (
    <main>
      <h1 className="text-3xl font-bold mt-8">学マス比較</h1>
      <h1 className="text-2xl mt-4">Data from MongoDB</h1>

      <div className="w-full flex justify-center mt-6">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 max-w-screen-lg bg-gray-200 p-4 rounded shadow-md">
          <div className="flex justify-center w-full mt-6">
            <div className="flex flex-col items-center w-full">
              <div className="flex justify-center items-center w-full bg-gray-200">
                <div className="w-1/3">
                  <select
                    id="leftSelect"
                    aria-label="left"
                    onChange={selectChangeHandlerForLeft}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>選択してください</option>
                    {options}
                  </select>
                </div>
                <div className="w-1/3 font-bold text-4xl text-center whitespace-nowrap">
                  VS
                </div>
                <div className="w-1/3">
                  <select
                    id="rightSelect"
                    aria-label="right"
                    onChange={selectChangeHandlerForRight}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>選択してください</option>
                    {options}
                  </select>
                </div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">{left?.name || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  サポートカード名
                </div>
                <div className="w-1/3 text-left">{right?.name || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-50">
                <div className="w-1/3 text-right">
                  {left?.getCardName || ""}
                </div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  カード名
                </div>
                <div className="w-1/3 text-left">
                  {right?.getCardName || ""}
                </div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">
                  {left?.getCardText || ""}
                </div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  カードテキスト
                </div>
                <div className="w-1/3 text-left">
                  {right?.getCardText || ""}
                </div>
              </div>
              <div className="flex justify-center w-full bg-gray-50">
                <div className="w-1/3 text-right">
                  {left?.supportEvent1 || ""}
                </div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  サポートイベント１
                </div>
                <div className="w-1/3 text-left">
                  {right?.supportEvent1 || ""}
                </div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">
                  {left?.supportEvent2 || ""}
                </div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  サポートイベント２
                </div>
                <div className="w-1/3 text-left">
                  {right?.supportEvent2 || ""}
                </div>
              </div>
              <div className="flex justify-center w-full bg-gray-50">
                <div className="w-1/3 text-right">{left?.ability1 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ１
                </div>
                <div className="w-1/3 text-left">{right?.ability1 || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">{left?.ability2 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ２
                </div>
                <div className="w-1/3 text-left">{right?.ability2 || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-50">
                <div className="w-1/3 text-right">{left?.ability3 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ３
                </div>
                <div className="w-1/3 text-left">{right?.ability3 || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">{left?.ability4 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ４
                </div>
                <div className="w-1/3 text-left">{right?.ability4 || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-50">
                <div className="w-1/3 text-right">{left?.ability5 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ５
                </div>
                <div className="w-1/3 text-left">{right?.ability5 || ""}</div>
              </div>
              <div className="flex justify-center w-full bg-gray-100">
                <div className="w-1/3 text-right">{left?.ability6 || ""}</div>
                <div className="w-1/3 text-center whitespace-nowrap">
                  アビリティ６
                </div>
                <div className="w-1/3 text-left">{right?.ability6 || ""}</div>
              </div>
            </div>
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
