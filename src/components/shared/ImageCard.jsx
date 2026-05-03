import { ArrowDownToSquare, HeartFill } from "@gravity-ui/icons";
import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ image }) => {
  return (
    <div>
      <Card>
        <div className="relative w-full aspect-square">
          <Image
            src={image.imageUrl}
            alt={image.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <h3 className="text-lg font-semibold">{image.title}</h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <HeartFill />
            <span>{image.likes}</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <ArrowDownToSquare />
            <span>{image.likes}</span>
          </div>
        </div>
        <Link href={`/all-images/${image.id}`}>
          <Button variant="outline" className={`w-full`}>
            View Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
