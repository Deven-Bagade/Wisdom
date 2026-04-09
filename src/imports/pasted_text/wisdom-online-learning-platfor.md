You are a UX/UI designer. Create a complete responsive website design for an online learning platform called Wisdom, which is an education initiative by the parent technology company Vynox.

Wisdom is primarily a technology education platform that provides courses such as Web Development, React, Java, and Full Stack Development. The website should represent Wisdom as a learning platform, not just a single bootcamp.

One course, React Bootcamp, is currently active and should be highlighted on the homepage. Clicking on the course should redirect to a separate detailed course page.

Additionally, include a small section mentioning that the parent company Vynox also provides services for creating and managing websites for businesses, but education remains the main focus.

Constraints & goals:
• No backend or payment system.
• Course registration should redirect to a Google Form ([GOOGLE_FORM_URL]).
• Contact should redirect to WhatsApp ([WHATSAPP_NUMBER]).
• The website should look like a modern tech learning platform.
• Goal: build trust and encourage students to explore courses and register.

Deliverables:

Responsive layouts: Desktop (1440px), Tablet (768px), Mobile (375px).

Design two page types:

Homepage

Course Detail Page

Components:
Header (logo + navigation), Hero section, Courses grid, Course card component, Instructor section, Why learn with us section, Testimonials (optional), FAQ accordion, Contact section, Footer.

Design System:
Create color tokens, typography scale, spacing system (8pt baseline), button styles, card styles, icons, and shadows.

Prototype interactions:
• Clicking a course card opens the Course Detail Page.
• Register buttons open the Google Form.
• Contact buttons open WhatsApp deep link.
• Navigation links scroll to sections.

Visual Style:
• Modern startup education platform
• Minimal and clean
• Primary color: soft blue (#246BFF)
• Accent color: teal or green
• White background
• Typography: Inter or Poppins
• Rounded cards and soft shadows

Homepage Structure:

HERO SECTION
Title: "Learn Modern Technology Skills"
Subtitle: "Practical programming courses designed to help you build real projects."
Primary Button: "Explore Courses"

COURSES SECTION
Title: "Our Courses"

Display course cards such as:
• React Bootcamp (Active)
• Java Programming (Coming Soon)
• Full Stack Development (Coming Soon)

Each course card includes:
• Course title
• Short description
• Status badge (Active / Coming Soon)
• Button: "View Course"

Clicking React Bootcamp opens the detailed course page.

WHY LEARN WITH WISDOM
• Live interactive classes
• Project-based learning
• Beginner friendly
• Industry-relevant skills

INSTRUCTOR SECTION
Instructor photo placeholder
Name: [INSTRUCTOR_NAME]
Title: Full Stack Developer
Links: LinkedIn | GitHub

ABOUT WISDOM
Short paragraph explaining that Wisdom is a technology learning platform by Vynox focused on practical education.

ADDITIONAL SERVICES
Small section mentioning:
"Through our parent company Vynox, we also help businesses build and manage websites and web applications."

CONTACT SECTION
Buttons:
• WhatsApp
• Email
• Instagram

FOOTER
Wisdom logo
Text: "An initiative by Vynox"
Navigation links
Contact information.

COURSE DETAIL PAGE (React Bootcamp):

Sections:
• Course title and overview
• Start date
• Duration
• Price
• What you will learn
• Course syllabus
• Instructor
• Registration button (Google Form)

WhatsApp link template:
https://wa.me/[COUNTRY_CODE][WHATSAPP_NUMBER]?text=Hi%20I%20am%20interested%20in%20the%20React%20course

Developer Notes:
• Colors: --brand: #246BFF; --accent: #00BFA6
• Typography: Inter
• Base spacing: 8px
• Sections padding: 64px desktop / 32px tablet / 20px mobile
• Static site deployed on Vercel or Netlify.

Figma instructions:
• Use Auto Layout
• Create reusable components (course cards, buttons, sections)
• Provide both desktop and mobile prototypes
• Include a small design system frame with colors, typography, and components.