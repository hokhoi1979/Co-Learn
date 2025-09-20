export const teachers = [
  {
    id: 1,
    fullName: "Dr. Emily Chen",
    dateOfBirth: "1985-06-12",
    age: 39,
    phone: "+1 (555) 123-4567",
    email: "emily.chen@example.com",
    gender: "Female",
    experience: 8,
    languages: ["English", "Mandarin"],
    photo: "/images/teachers/emily.jpg",
    certificate: "/images/certificates/emily-certificate.jpg",
    cv: "/images/cv/emily-cv.pdf",
    status: "Pending",
    introduction:
      "Passionate mathematics educator with 8 years of experience in higher education. Specialized in making complex mathematical concepts simple and engaging for students.",
  },
  {
    id: 2,
    fullName: "Prof. Michael Brown",
    dateOfBirth: "1980-02-25",
    age: 44,
    phone: "+1 (555) 234-5678",
    email: "michael.brown@example.com",
    gender: "Male",
    experience: 12,
    languages: ["English"],
    photo: "/images/teachers/michael.jpg",
    certificate: "/images/certificates/michael-certificate.jpg",
    cv: "/images/cv/michael-cv.pdf",
    status: "Pending",
    introduction:
      "Experienced physics professor with 12 years of research and teaching. Dedicated to innovative methods that inspire students to explore science deeply.",
  },
  {
    id: 3,
    fullName: "Ms. Sarah Davis",
    dateOfBirth: "1990-11-03",
    age: 34,
    phone: "+1 (555) 345-6789",
    email: "sarah.davis@example.com",
    gender: "Female",
    experience: 6,
    languages: ["English", "French"],
    photo: "/images/teachers/sarah.jpg",
    certificate: "/images/certificates/sarah-certificate.jpg",
    cv: "/images/cv/sarah-cv.pdf",
    status: "Pending",
    introduction:
      "Creative and dedicated English teacher with a passion for literature and writing. Focused on developing students' critical thinking and communication skills.",
  },
];

// Fake data revenue theo tháng
export const revenueData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 2800 },
  { month: "Mar", revenue: 4000 },
  { month: "Apr", revenue: 3500 },
  { month: "May", revenue: 4800 },
  { month: "Jun", revenue: 4200 },
  { month: "Jul", revenue: 5100 },
  { month: "Aug", revenue: 4700 },
  { month: "Sep", revenue: 5300 },
  { month: "Oct", revenue: 4900 },
  { month: "Nov", revenue: 5600 },
  { month: "Dec", revenue: 6000 },
];

export const coursesData = [
  { name: "Mathematics 101", students: 320, rating: 4.8 },
  { name: "Physics Fundamentals", students: 270, rating: 4.7 },
  { name: "English Literature", students: 250, rating: 4.9 },
  { name: "Chemistry Basics", students: 210, rating: 4.6 },
  { name: "Computer Science", students: 190, rating: 4.8 },
];

export const teacherStudentData = [
  { month: "Jan", teachers: 45, students: 320 },
  { month: "Feb", teachers: 50, students: 400 },
  { month: "Mar", teachers: 55, students: 420 },
  { month: "Apr", teachers: 60, students: 500 },
  { month: "May", teachers: 70, students: 550 },
  { month: "Jun", teachers: 80, students: 600 },
];
