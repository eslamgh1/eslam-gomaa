import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - title and description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Technical Business Development Manager | MBA | Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              Business Development Manager with an MBA in Marketing and 7+ years of sales leadership
              experience
            </p>

            <p className="text-muted-foreground">
              Full-Stack Web Developer | MERN & NestJS Stack
            </p>
            <p className="text-muted-foreground">
              Steered sales operations and business development, driving revenue growth and
              corporate market share | Building Scalable Web Applications | Digital Solutions & Business Development Executive
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="/projects/Full-Stack-Developer-Eslam-Gomaa.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Right side - skills and experience */}
          <div className="grid grid-cols-1 gap-6">
            {/* Sales supervisor */}
            <div className="gradient-border p-6 card-hover">

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg pb-3">Sales supervisor | "WE" Telecom Egypt Company
                      July 2018- Present</h4>
                    <p className="text-muted-foreground pb-3">
                      -Analyzing data to increase sales, generating reports and
                      managing branch operations by using Excel, Power BI.
                    </p>
                    <p className="text-muted-foreground">
                      -Managing a team of employees, providing guidance and
                      conducting performance evaluations
                    </p>
                  </div>
                </div>
              </div>

            </div>
            {/* Full-Stack Web Developer */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-3">Full-Stack Web Developer – Route (Professional Program) | 2024 – 2025
                  </h4>
                  <p className="text-muted-foreground pb-3">
                    -Full-stack developer skilled in building fast MERN and Nest.js applications.
                  </p>
                  <h2 className="text-muted-foreground">
                    -Tech Stack: MERN Stack MongoDB, Express, React.js, Node.js
                    | Nest.js | GraphQL | RESTful APIs | MySQL
                  </h2>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-3">Education </h4>
                  <p className="text-muted-foreground pb-3">
                    -Master of Business Administration
                    Arab Academy for Science and
                    Technology Marketing Major,
                    Spring 2017.
                  </p>
                  <p className="text-muted-foreground pb-3">
                    Bachelor of Business Administration –
                    Alexandria University - Accounting
                    Major, May 2007.

                  </p>
                  <p className="text-muted-foreground">
                    -Full-Stack development diploma
                    Rout IT Training Center | Nov 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
