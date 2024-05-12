import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

interface Props {
  name: string;
  description: string;
  image: any;
}

export default function Cards({ name, description, image }: Props) {
  return (
    <Card className="py-4 sm:grid grid-cols-2 card bg-blue_dark_secondary">
      <CardBody className="overflow-visible py-2 flex items-center justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl !h-40 "
          src={image.src}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <h4 className="font-bold text-xl  w-full text-center sm:text-left ">
          {name}
        </h4>
        <Divider className="my-2" />

        <p className="text-tiny uppercase font-bold text-center  sm:text-left ">
          {description}
        </p>
      </CardHeader>
    </Card>
  );
}
