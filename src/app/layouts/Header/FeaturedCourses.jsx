import Header from "./Header";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { BookOpen, Users, Star, Clock, Quote } from "lucide-react";
import course1 from "../../assets/img/bg1.jpg";
import course2 from "../../assets/img/bg2.jpg";
import course3 from "../../assets/img/bg3.jpg";
import course4 from "../../assets/img/bg4.jpg";
import { useNavigate } from "react-router";

function FeaturedCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Coding for Kids",
      desc: "Introductory programming course for children aged 7-12. Students will get acquainted with Scratch, logical thinking and create their first game..",
      img: course1,
      duration: "10 buổi",
      students: "200+",
      rating: "4.9",
    },
    {
      title: "Python for Beginners",
      desc: "Learn Python from basic to advanced through small projects: chatbot, game, mini application.",
      img: course2,
      duration: "12 buổi",
      students: "150+",
      rating: "4.8",
    },
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript course helps students build their own personal website and online portfolio.",
      img: course3,
      duration: "14 buổi",
      students: "120+",
      rating: "4.9",
    },
    {
      title: "AI & Machine Learning",
      desc: "Explore artificial intelligence and machine learning through fun projects. For high school students..",
      img: course4,
      duration: "16 buổi",
      students: "90+",
      rating: "4.7",
    },
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript course helps students build their own personal website and online portfolio.",
      img: course3,
      duration: "14 buổi",
      students: "120+",
      rating: "4.9",
    },
    {
      title: "AI & Machine Learning",
      desc: "Explore artificial intelligence and machine learning through fun projects. For high school students..",
      img: course4,
      duration: "16 buổi",
      students: "90+",
      rating: "4.7",
    },
  ];

  const testimonials = [
    {
      name: "Ngọc Anh - Phụ huynh",
      text: "Con mình sau khóa Python đã tự tin viết game nhỏ, rất hào hứng. Cảm ơn đội ngũ Co&Learn!",
    },
    {
      name: "Minh Khoa - Học viên",
      text: "Thầy cô dạy dễ hiểu, học qua dự án nên rất vui, có sản phẩm khoe bạn bè.",
    },
    {
      name: "Lan Phương - Phụ huynh",
      text: "Giáo trình rõ ràng, hỗ trợ tốt, mình thấy con phát triển tư duy logic rõ rệt.",
    },
  ];

  const faqs = [
    {
      q: "What age group is the course suitable for?",
      a: "The courses range from basic for students 7 years old and up, advanced for middle and high school students.",
    },
    {
      q: "Is online learning effective?",
      a: "100% of lessons have direct interaction with the instructor, with documents and project assignments.",
    },
    {
      q: "Is the tuition high?",
      a: "The tuition is optimized to suit Vietnamese parents, with many preferential policies and free trial lessons.",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <Header />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-[120px] pb-24 bg-gradient-to-r from-cyan-50 via-white to-blue-50 text-center px-6"
      >
        <h1 className="text-5xl font-extrabold text-cyan-600">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Courses
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          Featured courses specially designed for kids and students, helping
          them learn programming, logical thinking and creativity through
          real-life projects.
        </p>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600">{c.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">{c.desc}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {c.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {c.students}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" /> {c.rating}
                </span>
              </div>
              <button className="mt-6 w-full py-2 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-600 mb-8">
            Why Choose Our Courses?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <BookOpen className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-lg font-semibold text-cyan-600">
                Project-based Learning
              </h3>
              <p className="text-gray-600 mt-2">
                Learn through real projects so that students can understand
                deeply and have real products after the course.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <Users className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-cyan-600">
                Experienced Instructors
              </h3>
              <p className="text-gray-600 mt-2">
                Dedicated faculty, experienced in teaching and technology.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <Star className="w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="text-lg font-semibold text-cyan-600">
                Proven Results
              </h3>
              <p className="text-gray-600 mt-2">
                Thousands of students have become more confident, have
                technology skills and their own creative products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-600 mb-10">
            What do Students & Parents say?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl shadow"
              >
                <Quote className="w-8 h-8 text-cyan-500 mb-4" />
                <p className="text-gray-700 italic">"{t.text}"</p>
                <h4 className="mt-4 font-semibold text-cyan-600">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-600 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-cyan-600">{f.q}</h3>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Sign up now to join a community of creative students and discover
          programming in the most fun way!
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 cursor-pointer bg-white text-cyan-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Enroll Now
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default FeaturedCourses;
