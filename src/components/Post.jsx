import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import Icons from "./Icons";
import Image from "next/image";

export default function Post({ post, id }) {
  return (
    <div className="flex p-3 border-b border-gray-200 hover:bg-gray-50">
      <Image
        src={post?.profileImg}
        alt="user-img"
        className="w-11 h-11 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-sm truncate">{post?.name}</h4>
            <span className="text-sm truncate">@{post?.username}</span>
          </div>
          <HiDotsHorizontal className="text-sm" />
        </div>

        <Link href={`/posts/${id}`}>
          <p className="text-gray-800 text-sm my-3">{post?.text}</p>
        </Link>
        <Link href={`/posts/${id}`}>
          <Image
            src={post?.image}
            className={`rounded-2xl mr-2 ${
              post?.image && "w-[40rem] h-60"
            } object-cover`}
          />
        </Link>
        <Icons id={id} uid={post.uid} />
      </div>
    </div>
  );
}
