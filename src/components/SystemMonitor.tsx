'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: {
    upload: number;
    download: number;
  };
  processes: number;
  uptime: string;
}

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'critical';
  service: string;
  message: string;
}

const generateRandomMetrics = (): SystemMetrics => ({
  cpu: Math.floor(Math.random() * 30) + 20, // 20-50%
  memory: Math.floor(Math.random() * 40) + 30, // 30-70%
  disk: Math.floor(Math.random() * 20) + 10, // 10-30%
  network: {
    upload: Math.floor(Math.random() * 50) + 10,
    download: Math.floor(Math.random() * 100) + 20
  },
  processes: Math.floor(Math.random() * 200) + 150,
  uptime: `${Math.floor(Math.random() * 30) + 1}д ${Math.floor(Math.random() * 24)}г ${Math.floor(Math.random() * 60)}хв`
});

const generateRandomLogs = (): LogEntry[] => {
  const services = ['nginx', 'apache', 'mysql', 'redis', 'docker', 'kubernetes', 'systemd'];
  const levels: ('info' | 'warning' | 'error' | 'critical')[] = ['info', 'warning', 'error', 'critical'];
  const messages = [
    'Service started successfully',
    'Connection established',
    'Database query completed',
    'Cache updated',
    'Container deployed',
    'Backup completed',
    'Security scan finished',
    'Performance alert',
    'High memory usage detected',
    'Network timeout',
    'Service restart required',
    'Certificate expired',
    'Disk space low',
    'User authentication failed',
    'API rate limit exceeded'
  ];

  const logs: LogEntry[] = [];
  const now = new Date();

  for (let i = 0; i < 10; i++) {
    const timestamp = new Date(now.getTime() - Math.random() * 60000); // Last minute
    logs.push({
      id: `log-${i}`,
      timestamp: timestamp.toLocaleTimeString(),
      level: levels[Math.floor(Math.random() * levels.length)],
      service: services[Math.floor(Math.random() * services.length)],
      message: messages[Math.floor(Math.random() * messages.length)]
    });
  }

  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

const levelColors = {
  info: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900',
  warning: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900',
  error: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900',
  critical: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900'
};

export default function SystemMonitor() {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [logs, setLogs] = useState<LogEntry[] | null>(null);
  const [selectedService, setSelectedService] = useState<string>('all');
  const [isLive, setIsLive] = useState(true);

  // Ініціалізація даних тільки на клієнті
  useEffect(() => {
    setMetrics(generateRandomMetrics());
    setLogs(generateRandomLogs());
  }, []);

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setMetrics(generateRandomMetrics());
      setLogs(generateRandomLogs());
    }, 3000);
    return () => clearInterval(interval);
  }, [isLive]);

  if (!metrics || !logs) {
    return null; // або можна показати лоадер
  }

  const filteredLogs = selectedService === 'all' 
    ? logs 
    : logs.filter(log => log.service === selectedService);

  const services = ['all', ...Array.from(new Set(logs.map(log => log.service)))];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Системний Моніторинг
        </motion.h2>

        {/* Live Status */}
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
              {isLive ? 'Живий моніторинг' : 'Моніторинг зупинено'}
            </span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isLive ? 'Зупинити' : 'Запустити'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* CPU, Memory, Disk */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">CPU</h3>
                  <span className="text-2xl font-bold text-blue-400">{metrics.cpu}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${metrics.cpu}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Пам'ять</h3>
                  <span className="text-2xl font-bold text-green-400">{metrics.memory}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${metrics.memory}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Диск</h3>
                  <span className="text-2xl font-bold text-yellow-400">{metrics.disk}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${metrics.disk}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>

            {/* Network and System Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Мережа</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Завантаження:</span>
                    <span className="text-blue-400 font-mono">{metrics.network.upload} MB/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Вивантаження:</span>
                    <span className="text-green-400 font-mono">{metrics.network.download} MB/s</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Система</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Процеси:</span>
                    <span className="text-purple-400 font-mono">{metrics.processes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Час роботи:</span>
                    <span className="text-yellow-400 font-mono">{metrics.uptime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logs Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Service Filter */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Логи системи</h3>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {services.map(service => (
                  <option key={service} value={service}>
                    {service === 'all' ? 'Всі сервіси' : service}
                  </option>
                ))}
              </select>
            </div>

            {/* Logs List */}
            <div className="bg-gray-800 rounded-xl p-6 h-96 overflow-hidden">
              <div className="h-full overflow-y-auto space-y-3">
                {filteredLogs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-700 rounded-lg p-3 border-l-4 border-blue-500"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-mono">{log.timestamp}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${levelColors[log.level]}`}>
                        {log.level.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      <span className="text-blue-400 font-medium">{log.service}</span>
                    </div>
                    <p className="text-xs text-gray-400">{log.message}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-green-300">Активні сервіси</div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-blue-300">Доступність</div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2ms</div>
            <div className="text-yellow-300">Середній пінг</div>
          </div>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-purple-300">Моніторинг</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 