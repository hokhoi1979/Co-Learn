import Slider from "react-slick";
import { Download, Mail, ScanEye, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";

function CarouselBooking({ profileTeacher = [], onBooking }) {
  let teachers = Array.isArray(profileTeacher) ? profileTeacher : [];
  teachers = teachers.filter((item) => item.verificationStatus === "Verified");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  console.log("TEACHER", teachers);

  if (teachers.length === 0) {
    return (
      <div className="p-5 text-gray-500 text-center">
        No teacher profiles available
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {teachers.map((item, idx) => (
          <div key={idx} className="p-3">
            <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative flex justify-center py-4">
                <Image
                  src={item?.photo || "/placeholder.jpg"}
                  alt={item?.fullName || "Teacher"}
                  width={120}
                  height={120}
                  className="object-cover rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-2 text-xs bg-white/90 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    <span
                      className={`w-2 h-2 rounded-full block ${
                        item.isActive ? "bg-sky-500" : "bg-gray-400"
                      }`}
                    />
                    {item.isActive ? "Available" : "Offline"}
                  </span>
                </div>
              </div>

              <div className="px-5 py-2 flex flex-col space-y-3">
                <h3 className="text-xl m-auto font-semibold text-[#0f6b5f]">
                  {item.fullName}
                </h3>
                <p className="text-sm text-gray-400 py-2 min-h-15">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Age:</span>{" "}
                    {item.age || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Gender:</span>{" "}
                    {item.gender || "N/A"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">DOB:</span>{" "}
                    {item.born
                      ? new Date(item.born).toLocaleDateString("vi-VN")
                      : "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {item.phone}
                  </div>
                </div>

                <div className="col-span-2 truncate">
                  <span className="font-medium">Email:</span> {item.email}
                </div>

                <div className="border-t pt-4">
                  <div className="flex gap-3 mt-4">
                    {item.degree ? (
                      <a
                        href={item.degree}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center gap-2 justify-center rounded-lg border border-gray-200 py-2 text-sm hover:bg-gray-50 transition"
                      >
                        <ScanEye size={16} /> Degree
                      </a>
                    ) : (
                      <button className="flex-1 flex items-center gap-2 justify-center rounded-lg border border-gray-200 py-2 text-sm text-gray-400 cursor-not-allowed">
                        <ScanEye size={16} color="#878787" /> Degree
                      </button>
                    )}

                    {item.cv ? (
                      <a
                        href={item.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center gap-2 justify-center rounded-lg border border-gray-200 py-2 text-sm hover:bg-gray-50 transition"
                      >
                        <ScanEye size={16} color="#424242" /> CV
                      </a>
                    ) : (
                      <button className="flex-1 flex items-center gap-2 justify-center rounded-lg border border-gray-200 py-2 text-sm text-gray-400 cursor-not-allowed">
                        <ScanEye size={16} color="#878787" /> CV
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-700 p-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-50 rounded-full">
                        <Star color="#d0ca16" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Rating</div>
                        <div className="font-medium">
                          {(item.avgRating ?? 0).toFixed(1)}/5.0
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-2xl text-[#057b5f]">
                      {item.hourlyRate?.toLocaleString("vi-VN")} VND
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onBooking?.(item);
                    }}
                    className="w-full mt-3 bg-[#12ad8c] cursor-pointer hover:bg-[#147660] text-white py-2 rounded-md flex items-center justify-center gap-2 transition"
                  >
                    <Mail size={16} /> Booking Teacher
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselBooking;
