"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { education } from "@/data/skills";
import { useI18n } from "@/i18n/context";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

export default function About() {
  const [imageError, setImageError] = useState(false);
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Photo and Bio Container */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12 items-center">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-blue-600 shadow-2xl bg-linear-to-br from-blue-500 to-purple-600">
                  {/* Image with error handling */}
                  {/* showFallback controls whether initials are shown */}
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                    onError={() => setImageError(true)}
                    onLoad={() => setImageError(false)}
                  />
                  {/* Fallback placeholder - shows initials only if image failed to load or missing */}
                  {!profile.photo || imageError ? (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                      {profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  ) : null}
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10"></div>
              </div>
            </motion.div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {profile.bio}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {profile.objective}
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center" hover>
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {t.about.location}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {profile.location}
              </p>
            </Card>

            <Card className="p-6 text-center" hover>
              <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {t.about.education}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t.about.educationValue}
              </p>
            </Card>

            <Card className="p-6 text-center" hover>
              <Languages className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {t.about.languages}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {profile.languages.map((l) => l.name).join(", ")}
              </p>
            </Card>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Education
            </h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6" hover>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {edu.location} • {edu.period}
                        </p>
                        {edu.description && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
