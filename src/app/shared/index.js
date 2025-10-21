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

export const sections = [
  {
    title: "Enrollment",
    content:
      "By enrolling in our courses, you agree to provide accurate information and keep your account secure. You must be at least 13 years old to register.",
  },
  {
    title: "Payments",
    content:
      "All payments must be made through our official payment methods. Prices are displayed in USD and may be subject to applicable taxes.",
  },
  {
    title: "Refund Policy",
    content:
      "We offer a 7-day refund guarantee for all new learners. After 7 days, payments are non-refundable unless required by law.",
  },
  {
    title: "Course Access & Usage",
    content:
      "Your course access is personal and non-transferable. You agree not to share your login details or resell our content without permission.",
  },
  {
    title: "Intellectual Property",
    content:
      "All course materials, videos, and resources are the property of our platform. Unauthorized copying, distribution, or modification is prohibited.",
  },
  {
    title: "Support & Assistance",
    content:
      "Our support team is available via email and live chat to assist you with any technical or course-related questions.",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Emma, Age 8",
    comment:
      "My daughter's confidence in math has skyrocketed since using GoldLearns. The interactive lessons make learning feel like playing games!",
    initials: "SM",
    rating: 5,
  },
  {
    name: "David Johnson",
    role: "Parent of Alex, Age 10",
    comment:
      "The progress tracking feature is incredible. I can see exactly where my son excels and where he needs more support. Highly recommended!",
    initials: "DJ",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Elementary Teacher & Parent",
    comment:
      "As an educator, I'm impressed by the quality of content and the thoughtful approach to child development. It's truly exceptional.",
    initials: "LR",
    rating: 5,
  },
];

export const lesson = [
  {
    title: "Getting Started with Scratch",
    minutes: "12",
    status: "Completed",
  },
  {
    title: "Moving Sprites Around",
    minutes: "20",
    status: "Completed",
  },
  {
    title: "Adding Sounds and Music",
    minutes: "12",
    status: "Completed",
  },
  {
    title: "  Interactive Stories",
    minutes: "12",
    status: "Completed",
  },
  {
    title: "Creating a Platformer Game",
    minutes: "12",
    status: "Current",
  },
  {
    title: "Creating a Platformer Game",
    minutes: "12",
    status: "Not yet",
  },
];

export const courses = [
  {
    title: "Scratch Adventures",
    description: "Create amazing animations and games!",
    progress: 10,
    total: 12,
  },
  {
    title: "Python Playground",
    description: "Learn to code with friendly Python!",
    progress: 8,
    total: 12,
  },
  {
    title: "Web Wizardry",
    description: "Build your own websites like magic!",
    progress: 4,
    total: 12,
  },
];

export const schedule = [
  { name: "Scratch Animation", time: "3:00 PM" },
  { name: "Fun Challenge", time: "7:00 PM" },
  { name: "Show & Share", time: "9:00 PM" },
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const scheduleWeek = {
  Monday: [
    { name: "Math", time: "8:00 - 9:00 AM" },
    { name: "Coding", time: "15:00 - 16:00 PM" },
  ],
  Wednesday: [
    { name: "Science", time: "10:00 - 11:30 AM" },
    { name: "Robotics", time: "14:00 - 15:30 PM" },
  ],
  Friday: [{ name: "English", time: "9:00 - 10:30 AM" }],
};

export const dataCourse = [
  {
    title: "Creative Writing for Kids",
    description:
      "Help your child develop storytelling skills and imagination through fun activities.",
    lessons: 24,
    price: 49.99,
    image: "/images/courses/creative-writing.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Math Adventures: Numbers & Logic",
    description:
      "Make math fun with interactive games, puzzles, and problem-solving.",
    lessons: 32,
    price: 59.99,
    image: "/images/courses/math-adventures.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Science Explorers Lab",
    description:
      "Hands-on science experiments and discoveries that spark curiosity.",
    lessons: 40,
    price: 69.99,
    image: "/images/courses/science-explorers.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Coding for Beginners",
    description:
      "Learn the basics of coding with block-based programming and fun projects.",
    lessons: 28,
    price: 54.99,
    image: "/images/courses/coding-beginners.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Art & Creativity Studio",
    description:
      "Unleash creativity with painting, drawing, and digital art lessons.",
    lessons: 30,
    price: 44.99,
    image: "/images/courses/art-creativity.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Music & Rhythm Basics",
    description:
      "Explore instruments, rhythm, and melody in a fun way for kids.",
    lessons: 20,
    price: 39.99,
    image: "/images/courses/music-rhythm.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "English Speaking for Kids",
    description:
      "Boost confidence in speaking English through interactive lessons.",
    lessons: 36,
    price: 64.99,
    image: "/images/courses/english-speaking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Robotics with LEGO",
    description: "Build and program simple robots with LEGO kits and coding.",
    lessons: 25,
    price: 79.99,
    image: "/images/courses/robotics-lego.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "History Adventures",
    description:
      "Travel back in time and learn history through stories and games.",
    lessons: 22,
    price: 42.99,
    image: "/images/courses/history-adventures.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    price: 45.99,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
];

export const dataFeedback = [
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    image: "/images/courses/critical-thinking.jpg",
    status: true,
  },
  {
    title: "Mathematics Fun",
    description: "Engage kids with math challenges and fun quizzes.",
    image: "/images/courses/math-fun.jpg",
    status: false,
  },
  {
    title: "Creative Arts",
    description: "Boost creativity with drawing and storytelling activities.",
    image: "/images/courses/creative-arts.jpg",
    status: true,
  },
];

export const payments = [
  {
    number: "1",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Dec 15, 2024",
    description: "Monthly Payout",
    amount: 2450,
  },
  {
    number: "2",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Dec 10, 2024",
    description: "Course Sales",
    amount: 890,
  },
  {
    number: "3",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Dec 5, 2024",
    description: "Bonus Payment",
    amount: 150,
  },
  {
    number: "4",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Nov 30, 2024",
    description: "Monthly Payout",
    amount: 3200,
  },
  {
    number: "5",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Nov 25, 2024",
    description: "Course Sales",
    amount: 1240,
  },
  {
    number: "6",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Nov 20, 2024",
    description: "Course Sales",
    amount: 980,
  },
  {
    number: "7",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Nov 15, 2024",
    description: "Bonus Payment",
    amount: 200,
  },
  {
    number: "8",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Nov 10, 2024",
    description: "Monthly Payout",
    amount: 2700,
  },
  {
    number: "9",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Nov 5, 2024",
    description: "Course Sales",
    amount: 1150,
  },
  {
    number: "10",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Oct 30, 2024",
    description: "Course Sales",
    amount: 1340,
  },
  {
    number: "11",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Oct 25, 2024",
    description: "Monthly Payout",
    amount: 2500,
  },
  {
    number: "12",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Oct 20, 2024",
    description: "Course Sales",
    amount: 920,
  },
  {
    number: "13",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Oct 15, 2024",
    description: "Bonus Payment",
    amount: 180,
  },
  {
    number: "14",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Oct 10, 2024",
    description: "Course Sales",
    amount: 1080,
  },
  {
    number: "15",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Oct 5, 2024",
    description: "Monthly Payout",
    amount: 3000,
  },
];

export const dataPurchased = [
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
];

export const feedbackTeacher = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://i.pravatar.cc/100?img=1",
    course: "JavaScript Game Development",
    lesson: "Lesson 3: Game Physics",
    rating: 5,
    comment:
      "Excellent teaching! The examples were very clear and helped me understand complex concepts easily.",
    status: "New",
    date: "2024-01-15",
    replied: false,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "https://i.pravatar.cc/100?img=2",
    course: "React Fundamentals",
    lesson: "Lesson 5: State Management",
    rating: 4,
    comment:
      "Great course overall. Would love more hands-on projects in future lessons.",
    status: "New",
    date: "2024-01-14",
    replied: true,
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/100?img=3",
    course: "JavaScript Game Development",
    lesson: "Lesson 2: Canvas Basics",
    rating: 5,
    comment: "Clear explanation and engaging exercises.",
    status: "New",
    date: "2024-01-13",
    replied: false,
  },
];

export const paymentsTeacher = [
  {
    date: "Dec 15, 2024",
    description: "Monthly Payout",
    amount: 2450,
    status: "Completed",
    method: "Bank Transfer",
  },
  {
    date: "Dec 10, 2024",
    description: "Course Sales",
    amount: 890,
    status: "Completed",
    method: "PayPal",
  },
  {
    date: "Dec 5, 2024",
    description: "Bonus Payment",
    amount: 150,
    status: "Completed",
    method: "Bank Transfer",
  },
  {
    date: "Nov 30, 2024",
    description: "Monthly Payout",
    amount: 3200,
    status: "Completed",
    method: "Bank Transfer",
  },
  {
    date: "Nov 25, 2024",
    description: "Course Sales",
    amount: 1240,
    status: "Pending",
    method: "PayPal",
  },
];

export const topCourses = [
  {
    name: "JavaScript Game Development",
    students: 45,
    income: 2450,
    color: "#22c55e",
  },
  {
    name: "React Advanced Patterns",
    students: 32,
    income: 1890,
    color: "#3b82f6",
  },
  { name: "Node.js Backend", students: 28, income: 1340, color: "#a855f7" },
  {
    name: "TypeScript Fundamentals",
    students: 19,
    income: 980,
    color: "#f97316",
  },
];
