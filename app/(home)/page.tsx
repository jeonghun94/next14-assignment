import { Tweet } from "@prisma/client";
import getSession from "@/libs/session";
import Link from "next/link";
import db from "@/libs/db";

export default async function Home() {
  const pageSize = 3;
  const page = 1;

  async function getTweets(page: number): Promise<Tweet[]> {
    "use server";
    const session = await getSession();
    const skip = (page - 1) * pageSize;
    return await db.tweet.findMany({
      where: {
        userId: session.id,
      },
      skip,
      take: pageSize,
    });
  }

  const tweets = await getTweets(page);

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

      {tweets.length === 0 && <div>no tweet found</div>}
    </div>
  );
}
