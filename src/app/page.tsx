import RevalidateButton from "@/components/RevalidateButton";
import CurrentWeatherItem from "@/components/CurrentWeatherItem";

import style from "./style.module.css";

export default async function Home() {
  const cities = [
    { name: "서울", code: "seoul" },
    { name: "뉴욕", code: "NYC" },
    { name: "런던", code: "london" },
  ];

  return (
    <>
      <h1>날씨 앱</h1>
      

      <ul className={style.list}>
        {cities.map((city) => {
          return (
            <CurrentWeatherItem
              key={city.code}
              cityCode={city.code}
              cityName={city.name}
            />
          );
        })}
      </ul>

      <RevalidateButton tag="time" />
    </>
  );
}
