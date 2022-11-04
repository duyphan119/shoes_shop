import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

type Props = {};

SwiperCore.use([Autoplay]);
const banners = [
  {
    id: 1,
    thumbnail:
      "https://mwc.com.vn/Resources/Slider/2022/10/15/banner-web-1920x550.png",
    slug: "https://mwc.com.vn/Resources/Slider/2022/10/15/banner-web-1920x550.png",
    description:
      "https://mwc.com.vn/Resources/Slider/2022/10/15/banner-web-1920x550.png",
  },
  {
    id: 2,
    thumbnail: "https://mwc.com.vn/Resources/Slider/2022/01/18/img-6629.JPG",
    slug: "https://mwc.com.vn/Resources/Slider/2022/01/18/img-6629.JPG",
    description: "https://mwc.com.vn/Resources/Slider/2022/01/18/img-6629.JPG",
  },
  {
    id: 3,
    thumbnail:
      "https://mwc.com.vn/Resources/Slider/2022/02/18/cover-website.jpg",
    slug: "https://mwc.com.vn/Resources/Slider/2022/02/18/cover-website.jpg",
    description:
      "https://mwc.com.vn/Resources/Slider/2022/02/18/cover-website.jpg",
  },
];

const Banners = (props: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3333 }}
      style={{ height: "100%" }}
    >
      {banners.map((banner: any) => (
        <SwiperSlide key={banner.id}>
          <Link to={`/${banner.slug}`}>
            <img
              src={banner.thumbnail}
              alt={banner.description}
              style={{ height: 560, objectFit: "cover", width: "100%" }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banners;
