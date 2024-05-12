import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Post({ post, id }) {
  return (
    <div className="flex p-3 border-b border-gray-200">
      <img
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
          <img src={post?.image} className="rounded-2xl mr-2" />
          {/* <img src={post?.image} className="rounded-2xl mr-2 w-96 h-52 object-cover" /> */}
        </Link>
      </div>
    </div>
  );
}