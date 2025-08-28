import React from "react";

function FeedbackCard({ fb }) {
  return (
    <div className="border-b py-5 flex flex-col gap-2">
      <div className="flex items-start gap-4">
        <img
          src={fb.avatar}
          alt={fb.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">{fb.name}</h3>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  fb.status === "New"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {fb.status}
              </span>
              <span className="text-gray-400 text-sm">{fb.date}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {fb.course} · {fb.lesson}
          </p>

          <div className="flex items-center text-yellow-500 mt-1">
            {Array.from({ length: fb.rating }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.897l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-700 text-sm">({fb.rating}/5)</span>
          </div>

          <p className="text-gray-700 mt-2">{fb.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
