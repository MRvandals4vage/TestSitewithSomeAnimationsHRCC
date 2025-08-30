import React from 'react';
import MagicBento from '../components/MagicBento';
import { motion } from 'framer-motion';

export default function Home() {
  const founders = [
    {name: 'Founder 1', img: '/images/founder1.png', linkedin:'#'},
    {name: 'Founder 2', img: '/images/founder2.png', linkedin:'#'},
    {name: 'Founder 3', img: '/images/founder3.png', linkedin:'#'},
    {name: 'Founder 4', img: '/images/founder4.png', linkedin:'#'}
  ];

  const domainCards = [
    {
      title: 'Technical',
      description: 'Master coding challenges, algorithms, and data structures through competitive programming and hackathons.',
      label: 'Code',
      color: '#060010',
      image: '/images/technical.jpeg',
      overlayColor: 'rgba(99, 102, 241, 0.7)'
    },
    {
      title: 'Creatives',
      description: 'Explore UI/UX design, graphic design, and creative problem-solving in our design sprints and workshops.',
      label: 'Design',
      color: '#060010',
      image: '/images/creative.jpeg',
      overlayColor: 'rgba(168, 85, 247, 0.7)'
    },
    {
      title: 'Corporate',
      description: 'Develop professional skills, network with industry leaders, and prepare for your dream tech career.',
      label: 'Grow',
      color: '#060010',
      image: '/images/corporate.jpeg',
      overlayColor: 'rgba(16, 185, 129, 0.7)'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050812] text-white overflow-x-hidden">
      <motion.section 
        className="text-center py-24 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            HackerRank Campus Crew
          </motion.h1>
          <motion.p 
            className="text-neutral-300 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Build. Learn. Compete. Join our coding circles, workshops and events.
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#domains"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Domains
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </motion.div>
      </motion.section>

      {/* Domains Section */}
      <motion.section 
        className="py-16 px-4 relative overflow-hidden"
        id="domains"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { 
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.2
            }
          },
          hidden: { opacity: 0 }
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-medium mb-2 inline-block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Domains</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>
          <motion.div 
            className="bento-section"
            variants={fadeInUp}
          >
            <MagicBento 
              cards={domainCards}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              glowColor="132, 0, 255"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { 
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.1
            }
          },
          hidden: { opacity: 0 }
        }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium mb-2 inline-block">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {founders.map((f, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group"
            >
            <a 
              key={idx} 
              href={f.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="block text-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                ></motion.div>
                <motion.img 
                  src={f.img} 
                  alt={f.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-transparent group-hover:border-transparent relative z-10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">
                {f.name}
              </div>
              <div className="text-sm text-gray-500 group-hover:text-purple-400 transition-colors">
                Founder
              </div>
            </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Us Section */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { 
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.1
            }
          },
          hidden: { opacity: 0 }
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                HackerRank Campus Crew is a student-led community at the intersection of technology and innovation. 
                We're passionate about fostering a culture of learning, collaboration, and growth in the tech space.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: '💡',
                    title: 'Our Mission',
                    desc: 'Empower students with technical skills and real-world experience through hands-on learning and community support.'
                  },
                  {
                    icon: '🎯',
                    title: 'Our Vision',
                    desc: 'Create a thriving tech ecosystem where students can grow, innovate, and make meaningful contributions to the tech industry.'
                  },
                  {
                    icon: '🤝',
                    title: 'Our Values',
                    desc: 'We believe in collaboration, continuous learning, and creating an inclusive environment for all tech enthusiasts.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Initiatives */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { 
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.1
            }
          },
          hidden: { opacity: 0 }
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Upcoming Initiatives</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-12">
              Exciting things are coming your way! Here's a glimpse of what we're working on.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Coding Bootcamp',
                  desc: 'Intensive hands-on sessions to level up your coding skills',
                  status: 'Coming Soon',
                  color: 'from-blue-500 to-purple-600'
                },
                {
                  title: 'Hackathon',
                  desc: '24-hour coding competition with exciting prizes',
                  status: 'In Planning',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'Tech Talks',
                  desc: 'Learn from industry experts and tech leaders',
                  status: 'Coming Soon',
                  color: 'from-pink-500 to-red-600'
                }
              ].map((initiative, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br rounded-xl p-0.5 overflow-hidden"
                >
                  <div className="bg-gray-900 p-6 rounded-xl h-full">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${initiative.color} text-2xl font-bold mb-3`}>
                      {initiative.title}
                    </div>
                    <p className="text-gray-400 mb-4">{initiative.desc}</p>
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                      {initiative.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Supporters</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              We're grateful for the support of these amazing organizations
            </p>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((_, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-gray-700/30 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-40 h-20 flex items-center justify-center text-gray-500">
                    <span className="text-lg">Your Logo Here</span>
                  </div>
                </motion.div>
              ))}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mt-8 md:mt-0"
                variants={fadeInUp}
              >
                <motion.a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Sponsor
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
