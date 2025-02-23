"use client";

import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon as SolidCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatBubbleOvalLeftEllipsisIcon,
  VideoCameraIcon as OutlineCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 mx-auto grid w-full max-w-screen-md grid-cols-5 border-t border-neutral-800 bg-neutral-600 px-5 py-3 *:text-white">
      <Link href="/home" className="flex flex-col items-center gap-px">
        {pathName === "/home" ? (
          <SolidHomeIcon className="h-7 w-7" />
        ) : (
          <OutlineHomeIcon className="h-7 w-7" />
        )}
        <span>홈</span>
      </Link>
      <Link href="/life" className="flex flex-col items-center gap-px">
        {pathName === "/life" ? (
          <SolidNewspaperIcon className="h-7 w-7" />
        ) : (
          <OutlineNewspaperIcon className="h-7 w-7" />
        )}
        <span>동네생활</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center gap-px">
        {pathName === "/chat" ? (
          <SolidChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />
        ) : (
          <OutlineChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />
        )}
        <span>채팅</span>
      </Link>
      <Link href="/live" className="flex flex-col items-center gap-px">
        {pathName === "/live" ? (
          <SolidCameraIcon className="h-7 w-7" />
        ) : (
          <OutlineCameraIcon className="h-7 w-7" />
        )}
        <span>쇼핑</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathName === "/profile" ? (
          <SolidUserIcon className="h-7 w-7" />
        ) : (
          <OutlineUserIcon className="h-7 w-7" />
        )}
        <span>나의 당근</span>
      </Link>
    </div>
  );
}
