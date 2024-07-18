import React from "react";
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


interface ViewNoticeCardProps {
  slug: string;
  title: string;
  image: IGatsbyImageData;
  description: string;
}

export default function ViewNoticeCard(props: ViewNoticeCardProps) {

  console.log(props.image);

  return (
    <div className="w-full  bg-white grid grid-rows-[200px_200px_40px]">
      <div className="w-full h-full bg-zinc-300">
        <GatsbyImage 
            image={props.image} 
            alt="cover image" 
            className="block w-full h-full object-cover"
        />
      </div>
      <div className="p-3 border border-border flex flex-col">
        <h3 className="mb-2 text-primary font-semibold">{props.title}</h3>
        <p className="text-foreground">{props.description}</p>
      </div>
      <Link to={`/noticias/${props.slug}`} className="h-full text-primary font-medium grid place-content-center uppercase">
        Ler mais
      </Link>
    </div>
  );
}