"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface ProjectFilterProps {
    technologies: string[];
    selectedTech: string[];
    searchQuery: string;
    onTechChange: (tech: string[]) => void;
    onSearchChange: (query: string) => void;
    onClear: () => void;
}

export function ProjectFilter({
    technologies,
    selectedTech,
    searchQuery,
    onTechChange,
    onSearchChange,
    onClear,
}: ProjectFilterProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTechnology = (tech: string) => {
        if (selectedTech.includes(tech)) {
            onTechChange(selectedTech.filter(t => t !== tech));
        } else {
            onTechChange([...selectedTech, tech]);
        }
    };

    const hasActiveFilters = selectedTech.length > 0 || searchQuery.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
        >
            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="shrink-0"
                >
                    Filter by Tech
                </Button>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClear}
                        className="shrink-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                )}
            </div>

            <AnimatePresence>
                {selectedTech.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-wrap gap-2"
                    >
                        {selectedTech.map((tech) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <Badge
                                    variant="default"
                                    className="cursor-pointer hover:bg-primary/80"
                                    onClick={() => toggleTechnology(tech)}
                                >
                                    {tech}
                                    <X className="ml-1 h-3 w-3" />
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border rounded-lg p-4 bg-card"
                    >
                        <h4 className="text-sm font-medium mb-3">Filter by Technology:</h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <motion.div
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Badge
                                        variant={selectedTech.includes(tech) ? "default" : "outline"}
                                        className="cursor-pointer transition-colors"
                                        onClick={() => toggleTechnology(tech)}
                                    >
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
} 