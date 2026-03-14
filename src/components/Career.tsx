import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Configuration</h4>
                <h5>Awign, Remote, India</h5>
              </div>
              <h3>Feb 2025 - Present</h3>
            </div>
            <p>
              Designed and implemented custom business integrations using n8n (iPaaS platform) connecting CRM systems (Zoho CRM), finance systems, project management tools (ClickUp), and email platforms to automate end-to-end workflows. Developed Zoho CRM integration for finance system synchronization, enabling real-time data exchange and eliminating manual data entry, reducing processing time by 40%. Built automated ticket creation system in ClickUp by integrating email workflows via n8n, automatically converting customer inquiries into actionable cards with proper categorization and assignment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Full Stack Java</h4>
                <h5>AI Variant, Remote, India</h5>
              </div>
              <h3>Nov 2023 - Dec 2024</h3>
            </div>
            <p>
              Built RESTful API integrations connecting frontend (React.js) with backend services (Java, Spring Boot) enabling seamless data exchange and real-time synchronization. Collaborated with cross-functional teams to define API specifications, design JSON/XML data structures, and implement webhook-based automation workflows. Developed technical documentation for 15+ REST APIs including endpoint specifications, request/response payloads, authentication methods, and integration guides.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Intugine Technology (SaaS), Bangalore, India</h5>
              </div>
              <h3>Sep 2021 - Apr 2023</h3>
            </div>
            <p>
              Managed end-to-end product lifecycle for SaaS applications from business requirement gathering to technical specification development, testing, and production deployment. Led integration initiatives with third-party SaaS platforms including CRM systems, accounting software, and e-commerce tools through API contracts and custom connectors. Designed and validated JSON/XML data payloads for API integrations ensuring data integrity, schema compliance, and error handling mechanisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
