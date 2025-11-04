"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Rocket, Code } from "lucide-react";
import { experiences } from "@/data/experience";
import { useI18n } from "@/i18n/context";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10 hidden md:block">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Content Card */}
                    <div className="md:ml-20">
                      <Card className="p-6 relative overflow-hidden" hover>
                        {/* Background Icon */}
                        <div className="absolute top-0 right-0 opacity-5">
                          {exp.type === "work" ? (
                            <Briefcase className="w-32 h-32" />
                          ) : (
                            <Rocket className="w-32 h-32" />
                          )}
                        </div>

                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-2 relative z-10">
                          <div className="flex-1 flex items-start gap-3">
                            <div className="shrink-0 mt-1">
                              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {exp.type === "work" ? (
                                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                ) : (
                                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {exp.role}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              exp.type === "work" ? "primary" : "success"
                            }
                          >
                            {exp.type === "work"
                              ? t.experience.work
                              : t.experience.projects}
                          </Badge>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-1">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="default">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
