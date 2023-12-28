import HomeButton from "@/componts/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  },
  searchParams: {
    name: string;
  }
}

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `${searchParams.name} 지역 날씨`,
    description: `${searchParams.name} 날씨 정보 를 알려 드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
/*   const name =
    params.location === "seoul"
      ? "서울"
      : params.location === "newyork"
      ? "뉴욕"
      : "런던"; */
  const res = await getForecast(params.location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>

      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date}/{day.day.avgtemp_c}
          </li>
        ))}
      </ul>

      <HomeButton />
    </>
  );
}
