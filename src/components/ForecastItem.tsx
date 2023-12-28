import Image from "next/image";
type Props = {
  date: string;
  dayOfWeek: string;
  temperature: number;
  conditionText: string;
  conditionIcon: string;
};

export default async function ForecastItem({
  date,
  dayOfWeek,
  temperature,
  conditionText,
  conditionIcon,
}: Props) {
  return (
    <li>
      {date} {dayOfWeek} / {temperature}도 / {conditionText}
      <Image
        src={`https:${conditionIcon}`}
        alt={conditionText}
        width={16}
        height={16}
      />
    </li>
  );
}
