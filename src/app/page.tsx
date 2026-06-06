'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const skills = [
  {
    number: '02',
    title: 'Frontend',
    description: 'Interfaces modernas, responsivas e performáticas',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    number: '03',
    title: 'Backend',
    description: 'APIs robustas, escaláveis e seguras',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    number: '04',
    title: 'DevOps',
    description: 'Automação, CI/CD e infraestrutura como código',
    items: ['Docker', 'Git', 'CI/CD', 'Linux', 'AWS']
  },
  {
    number: '05',
    title: 'Mobile',
    description: 'Aplicativos multiplataforma nativos',
    items: ['React Native', 'Expo', 'Flutter']
  }
];

const testimonials = [
  {
    name: 'João Silva',
    role: 'CEO, Startup X',
    text: 'Darlann entregou um produto de alta qualidade em tempo recorde. Excelente profissional!'
  },
  {
    name: 'Maria Santos',
    role: 'Product Manager, Tech Y',
    text: 'Muito comunicativo e técnico. Recomendo fortemente para qualquer projeto.'
  },
  {
    name: 'Carlos Pereira',
    role: 'CTO, Z Corp',
    text: 'Trabalhar com Darlann foi uma experiência incrível. Resultados superaram as expectativas!'
  }
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-7xl mx-auto w-full"
      >
        <h2 className="text-sm md:text-base text-neutral-400 mb-8 tracking-widest uppercase">
          Desenvolvedor Full-Stack
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-[0.3em] mb-12">
          D A R L A N N
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
            Transformando ideias complexas em soluções elegantes, escaláveis e de alta performance.
          </p>
          <div className="flex gap-6">
            {[
              { Icon: Github, href: 'https://github.com/reylanbit?tab=repositories' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/darlann-santos-187809124' },
              { Icon: Twitter, href: 'https://x.com/t_cafezin' },
              { Icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=darlannasa@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-neutral-500" />
      </motion.div>
    </section>
  );
};

const Metrics = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-6xl md:text-7xl font-black text-white mb-2">40</h3>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">Projetos</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <h3 className="text-6xl md:text-7xl font-black text-white mb-2">119</h3>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">Commits</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-6xl md:text-7xl font-black text-white mb-2">99%</h3>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">Uptime</p>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-24 last:mb-0"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <span className="text-6xl md:text-7xl font-black text-neutral-800">{skill.number}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-neutral-400 mb-8 text-lg">{skill.description}</p>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 border border-neutral-700 text-neutral-300 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-neutral-900 border border-neutral-800 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Darlann Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Sobre Mim</h2>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
            Com mais de 2,5 anos de experiência em desenvolvimento de software, tenho paixão por criar
            soluções que não só resolvem problemas, mas também encantam os usuários.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Especialista em arquitetura de sistemas e otimização de performance, sempre buscando
            o equilíbrio perfeito entre código limpo e experiência do usuário.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Depoimentos</h2>
      </div>
      <div className="overflow-x-auto pb-8 -mx-6 md:mx-0">
        <div className="flex gap-8 min-w-max px-6 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 md:w-96 p-8 border border-neutral-800"
            >
              <p className="text-neutral-300 mb-6 text-lg leading-relaxed">{testimonial.text}</p>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-neutral-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Vamos Trabalhar Juntos</h2>
          {submitSuccess ? (
            <div className="text-center py-12 border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
              <p className="text-neutral-400">Entrarei em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  placeholder="Não preencha este campo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-widest">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-widest">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Conte-me sobre o seu projeto..."
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 text-white text-xl font-semibold hover:text-neutral-400 transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
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
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">© 2026 Darlann Santos. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          {[
            { Icon: Github, href: 'https://github.com/reylanbit?tab=repositories' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/darlann-santos-187809124' },
            { Icon: Twitter, href: 'https://x.com/t_cafezin' }
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
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
