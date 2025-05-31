// app/components/ProjectSection.tsx
import React from 'react';
import Title from '../Title';
import { CardItem } from '@/app/types';
import { CardSlider } from '../CardSlider';
import ProjectCard from './Project.Card';
import MuiIcon from '@/public/assets/MUIicon.svg'
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
import nestjs from '@/public/assets/nestjs.svg'
import hyperMartex from "@/public/assets/HyperMartx.svg"
import scentora from "@/public/assets/scentora.svg"
import dbhamz from "@/public/assets/Dbhamz.svg"
import mechanic from "@/public/assets/mechanic.svg"
import dashboard from "@/public/assets/dashboard.svg"
import SillaFood from "@/public/assets/sillaFood.svg"

const ProjectSection = () => {
  const sampleCards: CardItem[] = [
    {
      id: '5',
      title: 'Silla Food',
      description: 'Performance optimized for the best user experience.',
      imageUrl: SillaFood,
      icons: [
        TailwindIcon ,figmaIcon, FlutterIcon , NodeIcon ,nestjs
      ]
    },
    {
      id: '3',
      title: 'Scentora',
      description: 'Elegant design meets powerful functionality.',
      imageUrl: scentora,
      icons: [
        NextIcon , TailwindIcon , TypeScriptIcon, nestjs,figmaIcon
      ]
    },
    {
      id: '5',
      title: 'كراج الجوارح',
      description: 'Performance optimized for the best user experience.',
      imageUrl: mechanic,
      icons: [
        NextIcon , FlutterIcon , TypeScriptIcon,nestjs
      ]
    },
    {
      id: '1',
      title: 'HyperMartx',
      description: 'Innovative solution for modern problems with cutting-edge technology.',
      imageUrl: hyperMartex,
      icons: [
        MuiIcon , CssIcon , figmaIcon ,HtmlIcon,nestjs
      ]
    },
    {
      id: '2',
      title: 'Dbhamz',
      description: 'Revolutionary platform transforming user experiences.',
      imageUrl: dbhamz,
      icons: [
        ReactIcon , NodeIcon , JavaScriptIcon
      ]
    },
  
    {
      id: '4',
      title: 'Dashboard',
      description: 'Scalable architecture for growing businesses.',
      imageUrl: dashboard,
      icons: [
        NextIcon , MongoIcon , TypeScriptIcon, HtmlIcon , TailwindIcon
      ]
    },

 
  ];

  return (
    <section id='projects' className="py-16 ">
      <div className="container mx-auto px-4 max-w-[1260px]">
        <Title title1='Proj' title2='ects'  />
        <p className='text-regular mt-22 text-secondary px-5'>At <span className='text-primary'>SillaLink</span>, we deliver innovative software solutions for a range of successful projects across various industries. With our commitment to quality and innovation, we help our clients achieve their digital goals and enhance their businesses with the latest technologies.</p>
        <CardSlider<CardItem>
          cards={sampleCards}
          renderCard={(card) => <ProjectCard {...card} />}
          className="my-8 "
          cardClassName="hover:scale-[1.02] transition-transform"
        />
      </div>

    </section>
  );
};

export default ProjectSection;