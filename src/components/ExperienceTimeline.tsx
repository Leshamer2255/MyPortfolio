'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "Linux Server Administration",
    description: "Адміністрування серверів на базі Linux: встановлення, оптимізація, моніторинг",
    details: [
      "Встановлення та налаштування Linux-серверів",
      "Оптимізація системних ресурсів",
      "Налаштування моніторингу та логування",
      "Автоматизація рутинних завдань"
    ]
  },
  {
    title: "Web Server Management",
    description: "Підтримка веб-серверів Apache, Nginx із фокусом на високу доступність",
    details: [
      "Налаштування високої доступності (HA)",
      "Оптимізація продуктивності",
      "Налаштування балансування навантаження",
      "Конфігурація SSL/TLS"
    ]
  },
  {
    title: "Digital Certificates",
    description: "Налаштування сервісів CMP, OCSP, TCP для валідації цифрових сертифікатів",
    details: [
      "Впровадження CMP протоколу",
      "Налаштування OCSP відповідачів",
      "Конфігурація TCP сервісів",
      "Автоматизація процесів валідації"
    ]
  },
  {
    title: "Accessibility Development",
    description: "Розробка інтерфейсних функцій доступності для державного сайту",
    details: [
      "Впровадження WCAG стандартів",
      "Оптимізація для скрін-рідерів",
      "Покращення навігації",
      "Тестування доступності"
    ]
  },
  {
    title: "Infrastructure Monitoring",
    description: "Моніторинг та аудит інфраструктури через Zabbix, Wazuh",
    details: [
      "Налаштування Zabbix для моніторингу",
      "Впровадження Wazuh для безпеки",
      "Створення користувацьких дашбордів",
      "Налаштування сповіщень"
    ]
  },
  {
    title: "Database Management",
    description: "Робота з MySQL: написання скриптів для автоматичного формування звітності",
    details: [
      "Оптимізація запитів",
      "Автоматизація резервного копіювання",
      "Розробка скриптів звітності",
      "Моніторинг продуктивності"
    ]
  },
  {
    title: "Network Security",
    description: "Адміністрування CISCO ASA та інших мережевих пристроїв",
    details: [
      "Налаштування файрволів",
      "Конфігурація VPN",
      "Управління доступом",
      "Моніторинг безпеки"
    ]
  },
  {
    title: "CDN Integration",
    description: "Інтеграція з Akamai для забезпечення безпеки та продуктивності вебресурсів",
    details: [
      "Налаштування CDN",
      "Оптимізація доставки контенту",
      "Захист від DDoS атак",
      "Моніторинг продуктивності"
    ]
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen relative bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-8 shadow-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">{exp.title}</h2>
            <p className="text-xl text-gray-400 mb-6">{exp.description}</p>
            <ul className="space-y-3">
              {exp.details.map((detail, detailIndex) => (
                <motion.li
                  key={detailIndex}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: detailIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 flex items-start space-x-3 text-lg"
                >
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 