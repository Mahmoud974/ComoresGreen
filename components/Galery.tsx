import Image from "next/image";
import React from "react";

export default function Galery() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          layout="responsive"
          className="h-auto max-w-full rounded-xl"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
