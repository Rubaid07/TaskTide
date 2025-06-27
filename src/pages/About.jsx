import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="md:my-10 my-5">
      {/* Hero Section */}
      <section className="bg-base-100 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto text">
            We are a team of passionate individuals dedicated to delivering exceptional solutions for our clients.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-base-200 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text">Our Story</h2>
          <div className="space-y-6 text">
            <p>
              Founded in 2015, our company started as a small team with a big vision. We believed that technology could
              solve complex problems and make people's lives easier.
            </p>
            <p>
              Over the years, we've grown into a trusted partner for businesses across various industries, helping them
              transform their ideas into successful digital products.
            </p>
            <p>
              Today, we're proud to have served over 500 clients worldwide and continue to innovate every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text">Our Mission & Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="box p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-info">Our Mission</h3>
              <p className="text">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and
                exceptional user experiences.
              </p>
            </div>
            
            <div className="box p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-info">Our Vision</h3>
              <p className="text">
                To be a globally recognized leader in digital transformation, known for our technical excellence and
                commitment to client success.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            <ValueCard 
              icon={<FaUsers className="text-3xl mb-4 text-[#4ba5dc]" />} 
              title="People First" 
              description="We value our team and clients above all else, fostering relationships built on trust and respect."
            />
            <ValueCard 
              icon={<FaLightbulb className="text-3xl mb-4 text-[#4ba5dc]" />} 
              title="Innovation" 
              description="We embrace creativity and continuous improvement to deliver cutting-edge solutions."
            />
            <ValueCard 
              icon={<FaHandshake className="text-3xl mb-4 text-[#4ba5dc]" />} 
              title="Integrity" 
              description="We operate with honesty and transparency in all our business dealings."
            />
            <ValueCard 
              icon={<FaChartLine className="text-3xl mb-4 text-[#4ba5dc]" />} 
              title="Excellence" 
              description="We strive for the highest quality in everything we do, setting industry standards."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text">Meet Our Leadership</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TeamMember 
            name="Sarah Johnson" 
            role="CEO & Founder" 
            bio="With over 15 years in the tech industry, Sarah leads our company with vision and passion."
            imgSrc="https://randomuser.me/api/portraits/men/43.jpg"
          />
          <TeamMember 
            name="Michael Chen" 
            role="CTO" 
            bio="Technology expert with a knack for solving complex problems with elegant solutions."
            imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TeamMember 
            name="David Wilson" 
            role="Head of Product" 
            bio="Product strategist who bridges the gap between business needs and technical solutions."
            imgSrc="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </div>
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => (
  <div className="box p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-info">{title}</h3>
      <p className="text">{description}</p>
    </div>
  </div>
);

// Team Member Component
const TeamMember = ({ name, role, bio, imgSrc }) => (
  <div className="box p-6 rounded-lg shadow-md text-center">
    <img 
      src={imgSrc} 
      alt={name} 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text">{name}</h3>
    <p className="text-info mb-3">{role}</p>
    <p className="text">{bio}</p>
  </div>
);

export default AboutPage;