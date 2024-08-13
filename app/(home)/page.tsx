import { Tweet } from "@prisma/client";
import getSession from "@/libs/session";
import Link from "next/link";
import db from "@/libs/db";

export default async function Home() {
  async function getTweets(): Promise<Tweet[]> {
    "use server";
    const session = await getSession();
    return await db.tweet.findMany({
      where: {
        userId: session.id,
      },
    });
  }

  const tweets = await getTweets();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3 ">
      <h1 className="self-center">Tweets 😎</h1>
      {tweets?.map((item, idx) => (
        <Link
          key={idx}
          href={`/tweets/${item.id}`}
          className="flex justify-between border w-1/4 p-3"
        >
          <span>{item.tweet}</span>
          <span>createdBy: {item.userId}</span>
        </Link>
      ))}
    </div>
  );
}
