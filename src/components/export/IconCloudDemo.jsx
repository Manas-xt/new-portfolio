import { IconCloud } from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// Updated chart data to show skills instead of months
const chartData = [
  { skill: "React", level: 85 },
  { skill: "Node.js", level: 80 },
  { skill: "Flutter", level: 75 },
  { skill: "Database", level: 70 },
  { skill: "DevOps", level: 65 },
];

const chartConfig = {
  level: {
    label: "Skill Level",
    color: "rgb(168, 85, 247)", // Purple color
  },
};
  



export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 
          bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600
          [text-shadow:_0_0_10px_rgb(168_85_247_/_0.5),_0_0_20px_rgb(168_85_247_/_0.3)]">
          My Skills
        </h2>
        <div className="w-16 h-0.5 bg-purple-500 mx-auto rounded-full 
          shadow-[0_0_10px_rgb(168_85_247_/_0.7),_0_0_20px_rgb(168_85_247_/_0.5)]">
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full h-full"
        >
          <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full rounded-[2rem] overflow-hidden bg-black p-4 md:p-8"
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-purple-400">Skill Progress</h3>
                <p className="text-white/70 mt-2">Development expertise levels</p>
              </div>
              
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadarChart 
                  data={chartData}
                  width={300} 
                  height={300}
                  outerRadius={90}
                >
                  <PolarGrid />
                  <PolarAngleAxis 
                    dataKey="skill"
                    tick={{ fill: 'rgba(255,255,255,0.7)' }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="level"
                    stroke="rgb(168, 85, 247)"
                    fill="rgb(168, 85, 247)"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ChartContainer>

              <div className="text-center mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2 font-medium text-white/80">
                  Continuously improving <TrendingUp className="h-4 w-4 text-purple-400" />
                </div>
                <div className="text-white/60 text-sm">
                  Updated regularly based on new projects
                </div>
              </div>
            </motion.div>
          </ShineBorder>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full h-full"
        >
          <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full rounded-[2rem] overflow-hidden bg-black p-4 md:p-8"
            >
              <div className="relative flex size-full items-center justify-center overflow-hidden">
                <IconCloud images={images} />
              </div>
            </motion.div>
          </ShineBorder>
        </motion.div>
      </div>
    </div>
  );
}
