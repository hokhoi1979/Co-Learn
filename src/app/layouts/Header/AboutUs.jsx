import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import { motion } from "framer-motion";
import { Image } from "antd";
import {
  Users,
  Target,
  Award,
  BookOpen,
  Clock,
  Globe,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import team1 from "../../assets/img/bg1.jpg";
import team2 from "../../assets/img/bg2.jpg";
import team3 from "../../assets/img/bg3.jpg";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", img: team1 },
    { name: "Michael Lee", role: "Curriculum Director", img: team2 },
    { name: "Emily Chen", role: "Lead Instructor", img: team3 },
  ];

  const testimonials = [
    {
      name: "David Park",
      role: "Parent",
      quote:
        "Co&Learn đã giúp con trai tôi tự tin hơn rất nhiều khi học lập trình. Các thầy cô rất tận tâm.",
    },
    {
      name: "Sophia Nguyen",
      role: "Student, 12 tuổi",
      quote:
        "Em cảm thấy học code rất vui, em đã tự làm game nhỏ để tặng bạn bè. Em muốn học thêm nhiều hơn!",
    },
    {
      name: "Anna Smith",
      role: "Teacher",
      quote:
        "Chương trình của Co&Learn thực sự truyền cảm hứng cho trẻ em. Tôi thấy rõ sự tiến bộ qua từng buổi.",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <Header />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-[120px] pb-24 bg-gradient-to-r from-cyan-50 via-white to-blue-50 text-center px-6"
      >
        <h1 className="text-6xl font-extrabold text-cyan-600">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Co&Learn
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Our mission is to make coding accessible, fun, and impactful for kids
          worldwide. Together, we build a future where every child has the
          confidence to create with technology.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 mb-20 text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-600 mb-6 mt-6">
          Who We Are
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          At Co&Learn, coding is more than just typing commands – it's a new way
          of thinking, solving problems, and expressing creativity. We’ve worked
          with thousands of students, creating a vibrant community of young
          innovators. Our team combines educators, developers, and designers who
          share one mission: empower the next generation of creators.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mb-24 max-w-6xl mx-auto">
        <motion.div className="bg-[#f7fefd] p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <Target className="mx-auto w-12 h-12 text-cyan-600 mb-3" />
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            To inspire children to explore coding and unlock their potential in
            technology.
          </p>
        </motion.div>
        <motion.div className="bg-[#f7fefd] p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <Award className="mx-auto w-12 h-12 text-yellow-500 mb-3" />
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            A future where every child becomes a confident creator, problem
            solver, and innovator.
          </p>
        </motion.div>
        <motion.div className="bg-[#f7fefd] p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <HeartHandshake className="mx-auto w-12 h-12 text-green-500 mb-3" />
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Creativity, inclusivity, and lifelong learning are at the heart of
            everything we do.
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-600 mb-12">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <Lightbulb className="w-10 h-10 text-yellow-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">
                The Beginning
              </h3>
              <p className="text-gray-600">
                Started from a small classroom, with the belief that every child
                has limitless creativity.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <Users className="w-10 h-10 text-green-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">
                Growing Community
              </h3>
              <p className="text-gray-600">
                Expanded globally, connecting thousands of students, teachers,
                and parents.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg">
              <Globe className="w-10 h-10 text-blue-500 mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">
                Today & Beyond
              </h3>
              <p className="text-gray-600">
                We continue to innovate and bring coding education to kids
                across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-600">Meet Our Team</h1>
          <p className="text-gray-500 mt-3">
            Passionate educators and creators behind Co&Learn
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <Image
                src={member.img}
                className="rounded-full mx-auto mb-4"
                width={140}
                height={140}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#f9fefe] py-20">
        <h2 className="text-3xl font-bold text-center text-cyan-600 mb-10">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <h3 className="font-semibold text-lg text-cyan-600">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Us in Shaping the Future
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Whether you’re a student, parent, or educator, be part of Co&Learn and
          help empower the next generation of creators.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-white text-cyan-600 cursor-pointer font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
