'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Command {
  name: string;
  description: string;
  command: string;
  category: 'System' | 'Network' | 'Security' | 'DevOps';
}

const commands: Command[] = [
  {
    name: "System Information",
    description: "Display system information and hardware details",
    command: "uname -a && lscpu && free -h && df -h",
    category: "System"
  },
  {
    name: "Process Management",
    description: "View and manage system processes",
    command: "ps aux | grep [process_name]",
    category: "System"
  },
  {
    name: "Network Configuration",
    description: "Configure network interfaces",
    command: "ip addr show && netstat -tulpn",
    category: "Network"
  },
  {
    name: "Firewall Rules",
    description: "Manage firewall rules with UFW",
    command: "sudo ufw status && sudo ufw allow [port]",
    category: "Security"
  },
  {
    name: "Docker Management",
    description: "Manage Docker containers and images",
    command: "docker ps -a && docker images",
    category: "DevOps"
  }
];

export default function LinuxCommands() {
  const [selectedCategory, setSelectedCategory] = useState<Command['category'] | 'All'>('All');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const filteredCommands = selectedCategory === 'All' 
    ? commands 
    : commands.filter(cmd => cmd.category === selectedCategory);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Linux Commands
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['All', 'System', 'Network', 'Security', 'DevOps'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category as Command['category'] | 'All')}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Commands List */}
        <div className="grid gap-6">
          {filteredCommands.map((cmd, index) => (
            <motion.div
              key={cmd.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{cmd.name}</h3>
                  <p className="text-gray-400 mt-1">{cmd.description}</p>
                </div>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {cmd.category}
                </span>
              </div>
              <div className="relative">
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code className="text-gray-300">{cmd.command}</code>
                </pre>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(cmd.command)}
                  className="absolute top-2 right-2 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                >
                  {copiedCommand === cmd.command ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 