'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Node {
  id: string;
  title: string;
  description: string;
  position: 'left' | 'right' | 'top';
  color: string;
  details: string;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
  isResponse: boolean;
}

const NetworkArchitecture = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const nodes: Node[] = [
    {
      id: 'client',
      title: 'Client',
      description: 'Web Browser',
      position: 'left',
      color: 'bg-blue-500',
      details: 'End user browser with modern features and security protocols'
    },
    {
      id: 'cdn',
      title: 'CDN',
      description: 'Content Delivery Network',
      position: 'top',
      color: 'bg-green-500',
      details: 'Distributed network of servers for fast content delivery'
    },
    {
      id: 'load-balancer',
      title: 'Load Balancer',
      description: 'Traffic Distribution',
      position: 'top',
      color: 'bg-purple-500',
      details: 'Distributes incoming traffic across multiple servers'
    },
    {
      id: 'web-servers',
      title: 'Web Servers',
      description: 'Nginx/Apache',
      position: 'right',
      color: 'bg-yellow-500',
      details: 'High-performance web servers with SSL/TLS support'
    },
    {
      id: 'app-servers',
      title: 'Application Servers',
      description: 'Node.js/Python',
      position: 'right',
      color: 'bg-red-500',
      details: 'Application logic and business rules processing'
    },
    {
      id: 'database',
      title: 'Database',
      description: 'PostgreSQL/MySQL',
      position: 'right',
      color: 'bg-indigo-500',
      details: 'Relational database for structured data storage'
    },
    {
      id: 'cache',
      title: 'Cache',
      description: 'Redis/Memcached',
      position: 'right',
      color: 'bg-pink-500',
      details: 'In-memory data store for fast data retrieval'
    },
  ];

  const connections: Connection[] = [
    // Request path
    { from: 'client', to: 'cdn', label: 'HTTPS Request', isResponse: false },
    { from: 'cdn', to: 'load-balancer', label: 'SSL/TLS', isResponse: false },
    { from: 'load-balancer', to: 'web-servers', label: 'HTTP', isResponse: false },
    { from: 'web-servers', to: 'app-servers', label: 'Proxy', isResponse: false },
    { from: 'app-servers', to: 'database', label: 'SQL Query', isResponse: false },
    { from: 'app-servers', to: 'cache', label: 'Cache Check', isResponse: false },
    // Response path
    { from: 'cache', to: 'app-servers', label: 'Cache Response', isResponse: true },
    { from: 'database', to: 'app-servers', label: 'Query Result', isResponse: true },
    { from: 'app-servers', to: 'web-servers', label: 'Processed Data', isResponse: true },
    { from: 'web-servers', to: 'load-balancer', label: 'HTTP Response', isResponse: true },
    { from: 'load-balancer', to: 'cdn', label: 'Content Delivery', isResponse: true },
    { from: 'cdn', to: 'client', label: 'HTTPS Response', isResponse: true },
  ];

  const nodeColors = {
    client: 'bg-blue-500',
    cdn: 'bg-purple-500',
    'load-balancer': 'bg-green-500',
    server: 'bg-yellow-500',
    database: 'bg-red-500'
  };

  const handleAnimate = () => {
    setIsAnimating(!isAnimating);
  };

  const getNodePosition = (node: typeof nodes[0], isResponse: boolean) => {
    const x = node.position === 'left' ? 15 : 
              node.position === 'right' ? 75 : 40;
    const y = node.position === 'top' ? 25 : 
              node.id === 'client' ? 50 :
              node.id === 'database' || node.id === 'cache' ? 75 : 50;
    
    // Adjust position for response path
    if (isResponse) {
      return {
        x: x + (node.position === 'right' ? -5 : node.position === 'left' ? 5 : 0),
        y: y + (node.position === 'top' ? 5 : 0)
      };
    }
    
    return { x, y };
  };

  return (
    <div className="relative w-full min-h-[700px] bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        System Architecture & Network Infrastructure
        </h1>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute ${node.color} text-white p-4 rounded-lg shadow-lg w-48 cursor-pointer`}
          style={{
            left: node.position === 'left' ? '5%' : 
                  node.position === 'right' ? '65%' : '35%',
            top: node.position === 'top' ? '20%' : 
                 node.id === 'client' ? '50%' :
                 node.id === 'database' || node.id === 'cache' ? '70%' : '50%',
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowDetails(!showDetails)}
        >
          <h3 className="font-bold text-lg">{node.title}</h3>
          <p className="text-sm opacity-90">{node.description}</p>
          {showDetails && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs mt-2 opacity-80"
            >
              {node.details}
            </motion.p>
          )}
        </motion.div>
      ))}

      {/* Connections */}
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          if (!fromNode || !toNode) return null;

          const from = getNodePosition(fromNode, connection.isResponse);
          const to = getNodePosition(toNode, connection.isResponse);

          return (
            <g key={`${connection.from}-${connection.to}`}>
              {/* Line */}
              <motion.line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={connection.isResponse ? "#2563EB" : "#4B5563"}
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isAnimating ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ 
                  pathLength: { 
                    duration: 1.5,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  },
                  opacity: { 
                    duration: 0.5,
                    delay: index * 0.3
                  }
                }}
              />
              
              {/* Arrowhead */}
              <motion.path
                d={`M${to.x - 2}% ${to.y}% L${to.x + 2}% ${to.y - 2}% L${to.x + 2}% ${to.y + 2}% Z`}
                fill={connection.isResponse ? "#2563EB" : "#4B5563"}
                initial={{ opacity: 0 }}
                animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.3 + 1
                }}
              />

              {/* Label */}
              <motion.text
                x={`${(from.x + to.x) / 2}%`}
                y={`${(from.y + to.y) / 2}%`}
                textAnchor="middle"
                fill={connection.isResponse ? "#2563EB" : "#4B5563"}
                className="text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.3 + 0.5
                }}
              >
                {connection.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Animation Button */}
      <motion.button
        onClick={handleAnimate}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAnimating ? 'Stop Animation' : 'Animate Flow'}
      </motion.button>
    </div>
  );
};

export default NetworkArchitecture; 