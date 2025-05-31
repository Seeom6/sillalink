import MuiIcon from '@/public/assets/MUIicon.svg'
import GoIcon from '@/public/assets/GoIcon.svg'
import figmaIcon from '@/public/assets/figmaIcon.svg'
import ReactIcon from '@/public/assets/ReactIcon.svg'
import CssIcon from '@/public/assets/CssIcon.svg'
import NodeIcon from '@/public/assets/NodeIcon.svg'
import JavaScriptIcon from '@/public/assets/JavaScriptIcon.svg'
import MongoIcon from '@/public/assets/MongoIcon.svg'
import TypeScriptIcon from '@/public/assets/TypeScriptIcon.svg'
import NextIcon from '@/public/assets/NextIcon.svg'
import TailwindIcon from '@/public/assets/tailwindIcon.svg'
import FlutterIcon from '@/public/assets/FlutterIcon.svg'
import HtmlIcon from '@/public/assets/HtmlIcon.svg'
import ViteIcon from '@/public/assets/ViteIcon.svg'
import { Service } from '../types'
import { FaCode as Code } from "react-icons/fa";
import { BiSolidBarChartSquare as BarChart3 } from "react-icons/bi";
import { RiLightbulbFlashFill as Lightbulb } from "react-icons/ri";
import { FiPenTool as PenTool } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import { FaStar, FaEye, FaGlobe } from "react-icons/fa6";

export const NUMBERED_SECTIONS = [
  "We are a software company that believes every great idea deserves to come to life. We turn creativity into smart systems built for the future.",
  "We build high-quality software solutions that help you grow and evolve. With our expertise, we create tools that move you forward.",
  "Behind every line of code we write, there's a person we aim to serve."
];

export const FEATURES = [
  {
    icon: <LuSparkles className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
    text: "The beginning of the idea."
  },
  {
    icon: <FaStar className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
    text: "Excellence in every detail."
  },
  {
    icon: <FaEye className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
    text: "We see what others do not see."
  },
  {
    icon: <FaGlobe className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
    text: "We make an impact that transcends borders."
  }
];


export const icons = [
    {
      icon: MuiIcon,
      alt: "MUIIcon"
    },
    {
      icon: GoIcon,
      alt: "Go icon"
    },
    {
      icon: figmaIcon,
      alt: "Figma icon"
    },
    {
      icon: ReactIcon,
      alt: "React icon"
    },
    {
      icon: CssIcon,
      alt: "Css icon"
    },
    {
      icon: NodeIcon ,
      alt: "Node icon"
    },
    {
      icon: MongoIcon,
      alt: "Mongo Icon"
    },
    {
      icon: HtmlIcon,
      alt: "Html icon"
    },
    {
      icon: TypeScriptIcon,
      alt: "Type script icon"
    },
    {
      icon: NextIcon,
      alt: "next icon"
    },
    {
      icon: FlutterIcon,
      alt: "Flutter icon"
    },
    {
      icon: TailwindIcon,
      alt: "Tailwind icon"
    },
    {
      icon: ViteIcon,
      alt: "Vite icon"
    },
    {
      icon: JavaScriptIcon,
      alt: "javaScript icon"
    },
  ]

  export const services: Service[] = [
    {
      title: "UI/UX Design",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      delay: 0.1
    },
    {
      title: "Software Development",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <Code className="w-8 h-8 text-white" />,
      delay: 0.2
    },
    {
      title: "Data Analysis",
      description: "We help you extract valuable insights from your data, enabling smarter decisions and business growth.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      delay: 0.3
    },
    {
      title: "Project Consulting",
      description: "We transform ideas into seamless and engaging user experiences, ensuring top-notch usability and aesthetics.",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      delay: 0.4
    }
  ];
  
  