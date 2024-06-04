import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { MdLayers } from "react-icons/md";

const AnimeCta = ({ data }) => {
  const styling = {
    backgroundImage: `
      linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('${data.trailer.images.maximum_image_url}')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full px-4">
          <div
            style={styling}
            className="flex flex-wrap md:flex-row-reverse justify-between items-center rounded-xl md:h-[400px] h-[550px] p-12 bg-cover bg-center"
          >
            <Link href={`anime/${data.mal_id}`}>
              <Image
                src={data.images.webp.image_url}
                alt={data.title}
                width={200}
                height={370}
                className="rounded-xl mb-3"
              />
            </Link>
            <div>
              <h5 className="mb-3 uppercase opacity-70">
                {data.genres.map(
                  (genre, i) =>
                    genre.name + (i === data.genres.length - 1 ? "." : ", ")
                )}
              </h5>
              <Link href={`anime/${data.mal_id}`}>
                <h1 className="font-semibold text-4xl max-w-2xl line-clamp-1 mb-3">
                  {data.title}
                </h1>
              </Link>
              <div className="flex gap-4 items-center mb-5">
                <div className="flex flex-row gap-2 items-center">
                  <MdLayers className="text-primary" />
                  <p className="text-base text-white font-bold">
                    {data.episodes || data.episodes_aired}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <FaRegStar className="text-[#FFAD49]" />
                  <p className="text-base font-bold text-[#FFAD49]">
                    {data.score}
                  </p>
                </div>
              </div>
              <Link
                href={data.trailer.url ? data.trailer.url : ""}
                target="_blank"
                className="px-5 py-3 text-sm bg-primary rounded-2xl"
              >
                <Image
                  src="/images/play-circle.svg"
                  width={20}
                  height={20}
                  alt="Play icon"
                  className="inline me-2"
                />
                <span className="font-semibold">Play Trailer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeCta;
