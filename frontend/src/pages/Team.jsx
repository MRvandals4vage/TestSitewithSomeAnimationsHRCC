import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DomainTeam = ({ domain, leads, members, bgColor, borderColor, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={`rounded-2xl overflow-hidden border ${borderColor} bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">{domain} Domain</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-300 border-b border-gray-700 pb-2">Domain Leads</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {leads.map((lead, index) => (
              <motion.a 
                variants={item}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={`lead-${index}`} 
                href={lead.linkedin || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={lead.image} 
                  alt={lead.name} 
                  className="w-full h-48 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-lg">
                  <div className="text-white font-medium">{lead.name}</div>
                  <div className="text-xs text-purple-300">Domain Lead</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300 border-b border-gray-700 pb-2">Team Members</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((member, index) => (
              <motion.a 
                variants={item}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={`member-${index}`}
                href={member.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-40 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
                  <div className="text-white text-sm">{member.name}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const teamData = [
    {
      domain: 'Technical',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-500/30',
      leads: [
        { name: 'Lead 1', image: '/images/technical_lead1.png', linkedin: '#' },
        { name: 'Lead 2', image: '/images/technical_lead2.png', linkedin: '#' },
      ],
      members: [
        { name: 'Member 1', image: '/images/technical_member1.png', linkedin: '#' },
        { name: 'Member 2', image: '/images/technical_member2.png', linkedin: '#' },
        { name: 'Member 3', image: '/images/technical_member3.png', linkedin: '#' },
        { name: 'Member 4', image: '/images/technical_member4.png', linkedin: '#' },
      ]
    },
    {
      domain: 'Creative',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-500/30',
      leads: [
        { name: 'Lead 1', image: '/images/creative_lead1.png', linkedin: '#' },
        { name: 'Lead 2', image: '/images/creative_lead2.png', linkedin: '#' },
      ],
      members: [
        { name: 'Member 1', image: '/images/creative_member1.png', linkedin: '#' },
        { name: 'Member 2', image: '/images/creative_member2.png', linkedin: '#' },
        { name: 'Member 3', image: '/images/creative_member3.png', linkedin: '#' },
        { name: 'Member 4', image: '/images/creative_member4.png', linkedin: '#' },
      ]
    },
    {
      domain: 'Corporate',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-500/30',
      leads: [
        { name: 'Lead 1', image: '/images/corporate_lead1.png', linkedin: '#' },
        { name: 'Lead 2', image: '/images/corporate_lead2.png', linkedin: '#' },
      ],
      members: [
        { name: 'Member 1', image: '/images/corporate_member1.png', linkedin: '#' },
        { name: 'Member 2', image: '/images/corporate_member2.png', linkedin: '#' },
        { name: 'Member 3', image: '/images/corporate_member3.png', linkedin: '#' },
        { name: 'Member 4', image: '/images/corporate_member4.png', linkedin: '#' },
      ]
    }
  ];

  // Animation variants for the page
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0 }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="max-w-7xl mx-auto px-4 py-12 space-y-12"
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Meet Our Team
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Passionate individuals driving innovation and excellence across all domains
        </p>
      </motion.div>

      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {teamData.map((domain, index) => (
          <DomainTeam 
            index={index}
            key={domain.domain}
            domain={domain.domain}
            leads={domain.leads}
            members={domain.members}
            bgColor={domain.bgColor}
            borderColor={domain.borderColor}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
