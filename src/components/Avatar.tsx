'use client';

import Image from "next/image";

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return ( 
    <Image 
      className="rounded-full" 
      height="50" 
      width="50" 
      alt="Avatar" 
      src={src}
    />
   );
}
 
export default Avatar;