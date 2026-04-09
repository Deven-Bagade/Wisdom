import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CourseCard } from "../components/course-card";
import {LoginPage} from "./login-page";
import {
  Code,
  Users,
  BookOpen,
  Rocket,
  MessageCircle,
  Mail,
  Instagram,
  ChevronDown,
  Linkedin,
  Github,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function HomePage() {
  const courses = [
    {
      id: "react-bootcamp",
      title: "React Bootcamp",
      description:
        "Master React from basics to advanced. Build real-world projects and learn modern web development.",
      status: "active" as const,
    },
    {
      id: "java-programming",
      title: "Java Programming",
      description:
        "Learn Java fundamentals and object-oriented programming. Perfect for beginners and aspiring developers.",
      status: "coming-soon" as const,
    },
    {
      id: "full-stack-development",
      title: "Full Stack Development",
      description:
        "Become a full-stack developer. Learn frontend, backend, databases, and deployment.",
      status: "coming-soon" as const,
    },
  ];

  const whyWisdomFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Live Interactive Classes",
      description:
        "Learn directly from experienced instructors in real-time sessions with Q&A.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Project-Based Learning",
      description:
        "Build real projects and gain practical experience that employers value.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Beginner Friendly",
      description:
        "No prior experience needed. We start from the basics and guide you step by step.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Industry-Relevant Skills",
      description:
        "Learn the latest technologies and best practices used by top companies.",
    },
  ];

  const faqs = [
    {
      question: "What are the prerequisites for the courses?",
      answer:
        "Most of our courses are beginner-friendly and require no prior programming experience. For advanced courses, we'll specify any prerequisites in the course details.",
    },
    {
      question: "How long does each course take?",
      answer:
        "Course duration varies. Our React Bootcamp is typically 8-12 weeks long with live sessions twice a week. You'll also have access to recorded sessions and materials.",
    },
    {
      question:
        "Will I get a certificate after completing the course?",
      answer:
        "Yes! Upon successful completion of a course, you'll receive a certificate of completion from Wisdom that you can share on LinkedIn and your resume.",
    },
    {
      question: "What if I miss a live class?",
      answer:
        "Don't worry! All live sessions are recorded and made available to enrolled students. You can watch them at your own pace.",
    },
    {
      question: "How do I register for a course?",
      answer:
        "Click on any course to view its details, then click the 'Register Now' button. You'll be directed to fill out a simple registration form.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Learn Modern{" "}
                  <span style={{ color: "var(--brand)" }}>
                    Technology
                  </span>{" "}
                  Skills
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Practical programming courses designed to help
                  you build real projects and launch your tech
                  career.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  Explore Courses
                </a>
                <a
                  href="https://wa.me/+918369183414?text=Hi%20I%20want%20to%20learn%20more%20about%20Wisdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 transition-all hover:bg-gray-50"
                  style={{
                    borderColor: "var(--brand)",
                    color: "var(--brand)",
                  }}
                >
                  <MessageCircle size={20} />
                  Contact Us
                </a>
                <a
  href="/login"
  className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-black text-white"
>
  Login
</a>
              </div>

        
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM3MjAzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional developer workspace"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[var(--brand-accent)] opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[var(--brand)] opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Our Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted courses designed
              to take you from beginner to professional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn with Wisdom */}
      <section
        id="why-wisdom"
        className="py-20 sm:py-24 bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Why Learn with Wisdom
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive learning experience
              that sets you up for success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyWisdomFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex items-center justify-center rounded-lg p-3 mb-4"
                  style={{
                    backgroundColor: "rgba(36, 107, 255, 0.1)",
                    color: "var(--brand)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Wisdom */}
      <section id="about" className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              About Wisdom
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wisdom is a technology learning platform by Vynox,
              focused on providing practical, hands-on education
              in modern programming and web development. Our
              mission is to make quality tech education
              accessible to everyone, regardless of their
              background.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in learning by doing. That's why all
              our courses emphasize real-world projects and
              practical skills that you can immediately apply in
              your career. Our instructors are experienced
              developers who bring industry insights and best
              practices to every lesson.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need a Website for Your Business?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Through our parent company{" "}
                <span className="font-semibold">Vynox</span>, we
                also help businesses build and manage websites
                and web applications. From simple landing pages
                to complex web platforms, we've got you covered.
              </p>
              <a
                href="https://wa.me/+918369183414?text=Hi%20I%20need%20help%20building%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <MessageCircle size={20} />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

 

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to learn more? We'd love to
              hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <a
                href="https://wa.me/+918369183414?text=Hi%20I%20want%20to%20learn%20more%20about%20Wisdom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 rounded-xl border-2 p-6 transition-all hover:shadow-lg"
                style={{ borderColor: "var(--brand)" }}
              >
                <div
                  className="rounded-full p-4"
                  style={{
                    backgroundColor: "rgba(36, 107, 255, 0.1)",
                  }}
                >
                  <MessageCircle
                    size={24}
                    style={{ color: "var(--brand)" }}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">
                    WhatsApp
                  </div>
                  <div className="text-sm text-gray-600">
                    Chat with us
                  </div>
                </div>
              </a>

              <a
                href="mailto:devenbofficial@gmail.com"
                className="flex flex-col items-center gap-4 rounded-xl border-2 p-6 transition-all hover:shadow-lg"
                style={{ borderColor: "var(--brand)" }}
              >
                <div
                  className="rounded-full p-4"
                  style={{
                    backgroundColor: "rgba(36, 107, 255, 0.1)",
                  }}
                >
                  <Mail
                    size={24}
                    style={{ color: "var(--brand)" }}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">
                    Email
                  </div>
                  <div className="text-sm text-gray-600">
                    Send us a message
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/wisdom_vynox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 rounded-xl border-2 p-6 transition-all hover:shadow-lg"
                style={{ borderColor: "var(--brand)" }}
              >
                <div
                  className="rounded-full p-4"
                  style={{
                    backgroundColor: "rgba(36, 107, 255, 0.1)",
                  }}
                >
                  <Instagram
                    size={24}
                    style={{ color: "var(--brand)" }}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">
                    Instagram
                  </div>
                  <div className="text-sm text-gray-600">
                    Follow us
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}