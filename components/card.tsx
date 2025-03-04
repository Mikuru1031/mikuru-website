import React from 'react'
import Link from "next/link"
import Image from "next/image"
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  id: string
  image: {url: string}
  title: string
  date: string
}

const Card = (props: Props) => {
  return (
    <li className="bg-white shadow-md rounded-xl overflow-hidden list-none">
      <Link href={"blogs/" + props.id} className="block hover:opacity-75 transition-opacity">
        <Image
          src={props.image.url}
          alt={props.title}
          width={500}
          height={224}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl">{props.title}</h2>
          <span className="text-sm text-gray-500">{dayjs.utc(props.date).tz('Asia/Tokyo').format('YYYY-MM-DD')}</span>
        </div>
      </Link>
    </li>
  )
}

export default Card