"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Video, Sparkles } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { useI18n } from "@/i18n/context";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { t } = useI18n();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Get gradient based on project category
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Blockchain":
        return "bg-linear-to-br from-blue-600 to-cyan-500";
      case "AI/ML":
        return "bg-linear-to-br from-purple-600 to-pink-500";
      case "Full-Stack":
        return "bg-linear-to-br from-emerald-600 to-teal-500";
      case "Web":
        return "bg-linear-to-br from-orange-500 to-red-500";
      default:
        return "bg-linear-to-br from-blue-500 to-purple-600";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
              {t.projects.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.projects.description}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col" hover>
                  {/* Project Image Placeholder */}
                  <div
                    className={`h-48 ${getCategoryGradient(
                      project.category
                    )} rounded-t-lg flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white rounded-lg rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Sparkles className="w-24 h-24 text-white" />
                      </div>
                    </div>
                    <div className="text-white text-6xl font-bold opacity-30 z-10">
                      {project.title.charAt(0)}
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                          <Sparkles className="w-3 h-3" />
                          {t.projects.featured}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title & Category */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">
                        {project.title}
                      </h3>
                      <Badge variant="primary">{project.category}</Badge>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="default">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="default">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {t.projects.viewCode}
                          </span>
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Video className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {t.projects.viewDemo}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
