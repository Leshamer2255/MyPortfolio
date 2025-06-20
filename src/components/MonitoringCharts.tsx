'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface ChartData {
  time: string;
  cpu: number;
  memory: number;
  network: number;
  disk: number;
}

const generateChartData = (): ChartData[] => {
  const data: ChartData[] = [];
  const now = new Date();
  
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
      cpu: Math.floor(Math.random() * 40) + 20,
      memory: Math.floor(Math.random() * 50) + 30,
      network: Math.floor(Math.random() * 80) + 20,
      disk: Math.floor(Math.random() * 30) + 10
    });
  }
  
  return data;
};

const generateProcessData = () => {
  const processes = [
    { name: 'nginx', value: Math.floor(Math.random() * 20) + 5 },
    { name: 'mysql', value: Math.floor(Math.random() * 15) + 8 },
    { name: 'redis', value: Math.floor(Math.random() * 10) + 3 },
    { name: 'docker', value: Math.floor(Math.random() * 25) + 10 },
    { name: 'node', value: Math.floor(Math.random() * 30) + 15 },
    { name: 'systemd', value: Math.floor(Math.random() * 5) + 2 }
  ];
  
  return processes.sort((a, b) => b.value - a.value);
};

export default function MonitoringCharts() {
  const [chartData, setChartData] = useState<ChartData[]>(generateChartData());
  const [processData, setProcessData] = useState(generateProcessData());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setChartData(generateChartData());
      setProcessData(generateProcessData());
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Графіки Моніторингу
        </motion.h2>

        {/* Live Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="text-white font-medium">
              {isLive ? 'Живі дані' : 'Статичні дані'}
            </span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isLive ? 'Зупинити' : 'Запустити'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* CPU Usage Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Використання CPU</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#374151', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="cpu" 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Memory Usage Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Використання Пам'яті</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#374151', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="memory" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Network Usage Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Мережева Активність</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#374151', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="network" 
                  stroke="#F59E0B" 
                  fill="#F59E0B" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Process Usage Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Використання Процесів</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#374151', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#8B5CF6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Chart Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-300">CPU</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-300">Пам'ять</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-gray-300">Мережа</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-gray-300">Процеси</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 