import { Link, useParams } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import {
  Clock,
  Calendar,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  Users,
  Video,
  FileText,
  Award,
  Linkedin,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";

export function CourseDetailPage() {
  const { courseId } = useParams();

  // Course data - in a real app, this would come from a database or API
  const courseData: Record<string, any> = {
    "react-bootcamp": {
      title: "React Bootcamp",
      subtitle: "Master Modern Web Development with React",
      description:
        "Learn React from scratch and build production-ready web applications. This comprehensive bootcamp covers everything from React fundamentals to advance and best practices.",
      startDate: "April 20, 2026",
      duration: "5 days",
      price: "$299",
      schedule: "7:00 PM - 8:30 PM IST",
      level: "Beginner to Intermediate",
      image:
        "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzczODgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      whatYouWillLearn: [
        "React fundamentals: components, props, and state",
        "React Hooks: useState, useEffect, useContext, and custom hooks",
        "State management with Redux and Context API",
        "Routing with React Router",
        "Working with APIs and handling async operations",
        "Form handling and validation",
        "Styling with CSS-in-JS and Tailwind CSS",
        "Testing React applications",
        "Performance optimization techniques",
        "Building and deploying production apps",
      ],
      syllabus: [
        {
          day: "Day 1",
          title: "React Fundamentals",
          topics: [
            "Introduction to React and JSX",
            "Components and Props",
            "State and Event Handling",
          ],
        },
        {
          day: "Day 2",
          title: "React Hooks",
          topics: [
            "useState and useEffect",
            "useContext and Custom Hooks",
            "Working with Forms",
          ],
        },
        {
          day: "Day 3",
          title: "State Management & Routing",
          topics: [
            "Context API",
            "React Router basics",
            "Protected Routes",
          ],
        },
        {
          day: "Day 4",
          title: "API Integration",
          topics: [
            "Working with REST APIs",
            "Async operations",
            "Error handling",
          ],
        },
        {
          day: "Day 5",
          title: "Project & Deployment",
          topics: [
            "Building a complete project",
            "Optimization techniques",
            "Deployment strategies",
          ],
        },
      ],
      prerequisites: [
        "Basic HTML, CSS, and JavaScript knowledge",
        // "Understanding of ES6+ JavaScript features",
        // "Familiarity with command line/terminal",
      ],
      includes: [
        "live interactive session",
        "Session Recording",
        // "Real-world project assignments",
        "Certificate of completion",
        // "Access to private community",
        // "Career guidance and mentorship",
      ],
    },
  };

  const course =
    courseData[courseId || ""] || courseData["react-bootcamp"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
            style={{ color: "var(--brand)" }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]">
                  Active Course
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {course.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor:
                        "rgba(36, 107, 255, 0.1)",
                    }}
                  >
                    <Calendar
                      size={20}
                      style={{ color: "var(--brand)" }}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Starts
                    </div>
                    <div className="font-semibold">
                      {course.startDate}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor:
                        "rgba(36, 107, 255, 0.1)",
                    }}
                  >
                    <Clock
                      size={20}
                      style={{ color: "var(--brand)" }}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Duration
                    </div>
                    <div className="font-semibold">
                      {course.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor:
                        "rgba(36, 107, 255, 0.1)",
                    }}
                  >
                    <DollarSign
                      size={20}
                      style={{ color: "var(--brand)" }}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Price
                    </div>
                    <div className="font-semibold">
                      {course.price}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor:
                        "rgba(36, 107, 255, 0.1)",
                    }}
                  >
                    <Users
                      size={20}
                      style={{ color: "var(--brand)" }}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Level
                    </div>
                    <div className="font-semibold">
                      {course.level}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/GOOGLE_FORM_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg text-white transition-all hover:opacity-90 w-full sm:w-auto"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Register Now
              </a>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {course.whatYouWillLearn.map(
              (item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 flex-shrink-0"
                    style={{ color: "var(--brand-accent)" }}
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Course Syllabus
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {course.syllabus.map(
              (module: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--brand)" }}
                  >
                    {module.day}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map(
                      (topic: string, topicIndex: number) => (
                        <li
                          key={topicIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{
                              backgroundColor: "var(--brand)",
                            }}
                          ></span>
                          {topic}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            What's Included
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {course.includes.map(
              (item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border bg-white"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0"
                    style={{
                      backgroundColor:
                        "rgba(36, 107, 255, 0.1)",
                    }}
                  >
                    {index % 3 === 0 ? (
                      <Video
                        size={20}
                        style={{ color: "var(--brand)" }}
                      />
                    ) : index % 3 === 1 ? (
                      <FileText
                        size={20}
                        style={{ color: "var(--brand)" }}
                      />
                    ) : (
                      <Award
                        size={20}
                        style={{ color: "var(--brand)" }}
                      />
                    )}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Instructor */}
      {/* <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Your Instructor
          </h2>
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1576667815744-ca5c641c5ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzczNTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Instructor"
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">
                    John Doe
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Full Stack Developer & Tech Educator
                  </p>
                  <p className="text-gray-700 mb-6">
                    With over 5 years of experience in web
                    development and a passion for teaching, John
                    has helped hundreds of students launch their
                    careers in tech. He specializes in React,
                    Node.js, and modern web technologies. His
                    teaching style focuses on practical
                    application and real-world problem-solving.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: "var(--brand)" }}
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: "var(--brand)" }}
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Prerequisites */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Prerequisites
          </h2>
          <div className="max-w-3xl">
            <div
              className="bg-blue-50 border-l-4 rounded-lg p-6"
              style={{ borderColor: "var(--brand)" }}
            >
              <ul className="space-y-3">
                {course.prerequisites.map(
                  (prereq: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "var(--brand)" }}
                      />
                      <span className="text-gray-700">
                        {prereq}
                      </span>
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Don't worry if you're not 100% confident in
                these areas - we'll provide resources to help
                you catch up!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our {course.title} and learn from experienced
              instructors. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/GOOGLE_FORM_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Register Now
              </a>
              <a
                href="https://wa.me/+918369183414?text=Hi%20I%20have%20questions%20about%20the%20React%20Bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-4 text-lg transition-all hover:bg-gray-50"
                style={{
                  borderColor: "var(--brand)",
                  color: "var(--brand)",
                }}
              >
                Have Questions?
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}