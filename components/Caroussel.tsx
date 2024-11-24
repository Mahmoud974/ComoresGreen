import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Caroussel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/bg.jpg" // Remplacer avec le bon chemin d'image
            alt="Élagage"
            width={400}
            height={250}
            className="rounded-xl mb-6"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/bg.jpg" // Remplacer avec le bon chemin d'image
            alt="Élagage"
            width={400}
            height={250}
            className="rounded-xl mb-6"
          />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
