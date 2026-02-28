import { Component } from '@angular/core';
import { NgFor, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';

interface Project {
  title: string;
  stack: string;
  imageAlt: string;
}

interface Skill {
  name: string;
  short: string;
}

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgClass, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sections = ['home', 'about', 'projects', 'skills', 'contact'] as const;
  activeSection: (typeof this.sections)[number] = 'home';

  projects: Project[] = [
    {
      title: 'WebAPI - Cadastro de Clientes - DDD',
      stack: 'C#, SQL Server, DDD',
      imageAlt: 'Screenshot da WebAPI - Cadastro de Clientes - DDD',
    },
    {
      title: 'Formulario de Cadastro com Angular',
      stack: 'Angular',
      imageAlt: 'Screenshot do formulario de cadastro',
    },
  ];

  frontendSkills: Skill[] = [
    { name: 'HTML5', short: 'HTML' },
    { name: 'CSS3', short: 'CSS' },
    { name: 'JavaScript', short: 'JS' },
    { name: 'jQuery', short: 'jQuery' },
    { name: 'Bootstrap', short: 'Bootstrap' },   
    { name: 'Angular', short: 'Angular' },
  ];

  backendSkills: Skill[] = [
    { name: '.NET', short: '.NET' },
    { name: 'C#', short: 'C#' },
    { name: 'SQL Server', short: 'SQL Server' },
  ];

  toolSkills: Skill[] = [
    { name: 'Git', short: 'G' },
    { name: 'GitHub', short: 'GH' },
      { name: 'Visual Studio', short: 'VS' },
      { name: 'Visual Studio Code', short: 'VS Code' },
  ];

  /** Coloque aqui a URL do seu perfil no GitHub */
  githubUrl = 'https://github.com/Chris7ianp';
  /** Coloque aqui a URL do seu perfil no LinkedIn (ex: https://linkedin.com/in/seu-perfil) */
  linkedinUrl = 'https://www.linkedin.com/in/christian-1996-paulo/';
  /** Caminho do arquivo do currículo em PDF (coloque o arquivo em src/assets/Christian-Silva-Desenvolvedor.pdf) */
  curriculumUrl = 'assets/Christian-Silva-Desenvolvedor.pdf';

  get socialLinks(): SocialLink[] {
    return [
      { name: 'GitHub', icon: 'github', href: this.githubUrl },
      { name: 'LinkedIn', icon: 'linkedin', href: this.linkedinUrl }
      
    ];
  }

  setActive(section: (typeof this.sections)[number]): void {
    this.activeSection = section;
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

