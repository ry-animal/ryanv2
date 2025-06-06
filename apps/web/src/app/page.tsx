import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import { GitHubStats } from "@/components/sections/github-stats";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<GitHubStats />
			<ContactSection />
		</main>
	);
}
