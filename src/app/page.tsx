'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code2,
  Cpu,
  Layout,
  Terminal,
  Sparkles,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
];

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js']
  },
  {
    category: 'Backend',
    icon: <Cpu className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'DevOps & Ferramentas',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux']
  },
  {
    category: 'Mobile & Desktop',
    icon: <Code2 className="w-6 h-6" />,
    items: ['React Native', 'Electron', 'Tauri', 'Flutter']
  }
];

const projects = [
  {
    title: 'Plataforma de E-commerce Escalável',
    description: 'Sistema completo de e-commerce com micro-serviços, real-time inventory e pagamentos.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Dashboard de Analytics em Tempo Real',
    description: 'Painel de controle com visualizações interativas e streaming de dados.',
    tags: ['React', 'D3.js', 'WebSocket', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'Roadm App - Meu Portfólio',
    description: 'Aplicativo de portfólio profissional desenvolvido com Next.js e Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/reylanbit/roadm-app-ort-meuportifolioproject'
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800 py-4' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Darlann<span className="text-white">Dev</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all"
          >
            Contato
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-300 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            Disponível para projetos
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Desenvolvedor<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Senior Full-Stack
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Transformando ideias complexas em soluções elegantes, escaláveis e de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-neutral-700 rounded-full font-semibold hover:border-neutral-500 transition-all"
            >
              Fale Comigo
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { Icon: Github, href: 'https://github.com/reylanbit?tab=repositories' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/darlann-santos-187809124' },
              { Icon: Twitter, href: '#' },
              { Icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=darlannasa@gmail.com' },
              { Icon: MessageSquare, href: 'https://wa.me/5585981702374' }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 hover:bg-neutral-800/50 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-neutral-500" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                Com mais de 8 anos de experiência em desenvolvimento de software, tenho paixão por criar
                soluções que não só resolvem problemas, mas também encantam os usuários.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Especialista em arquitetura de sistemas, otimização de performance e liderança técnica,
                sempre buscando o equilíbrio perfeito entre código limpo e experiência do usuário.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Anos de Experiência', value: '8+' },
                  { label: 'Projetos Concluídos', value: '100+' },
                  { label: 'Clientes Satisfeitos', value: '50+' },
                  { label: 'Tecnologias', value: '30+' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative aspect-square bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Darlann Santos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades & Tecnologias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Um conjunto diversificado de ferramentas e tecnologias para entregar o melhor resultado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos Destacados</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6" />
          <p className="text-neutral-400 text-lg max-w-2xl">
            Uma seleção dos meus melhores trabalhos, demonstrando diferentes abordagens e tecnologias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    Ver projeto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Trabalhar Juntos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-lg">
            Tem uma ideia? Vamos transformá-la em realidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12"
        >
          {submitSuccess ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
              <p className="text-neutral-400">Entrarei em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Conte-me sobre o seu projeto..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-500 text-sm">
          © 2026 Darlann Santos. Todos os direitos reservados.
        </div>
        <div className="flex gap-6">
          {[
            { Icon: Github, href: 'https://github.com/reylanbit?tab=repositories' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/darlann-santos-187809124' },
            { Icon: Twitter, href: '#' }
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
