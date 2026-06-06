# Log de Issues - Portfólio Darlann

## [RESOLVIDO] 2026-06-05 - Configuração WebSocket inválida
- **Problema:** experimental.webSocketServer era uma opção inválida para Next.js 15.3.3, causando aviso no dev server
- **Ação:** Removido do next.config.js
- **Commit:** fix: remove invalid experimental.webSocketServer config

## [RESOLVIDO] 2026-06-05 - Instalação Next.js quebrada (node_modules corrompidos)
- **Problema:** Arquivos do Next.js faltando, como boundary-components.js, icon-mark.js, etc.
- **Ação:** Apagado node_modules e package-lock.json, refeito npm install
- **Resultado:** Dev server agora carrega corretamente

## [RESOLVIDO] 2026-06-05 - Vulnerabilidades críticas Next.js 15
- **Problema:** Projeto usava Next.js 15.x vulnerável a CVE-2025-29927 (bypass middleware, CVSS 9.1), CVE-2025-55182 (RCE em Server Components, CVSS 10), CVE-2025-48068 (WebSocket hijacking), CVE-2025-49826 (cache poisoning)
- **Ação:** Atualizado para `next@^15.3.3` no package.json
- **Commit:** fix: install next.js 15.3.3 exactly

## [RESOLVIDO] 2026-06-05 - Exposição de dados pessoais
- **Problema:** README continha email darlannasa@gmail.com e WhatsApp +55 85 98170-2374 publicamente
- **Ação:** Removido do README, substituído por formulário seguro
- **Impacto:** Reduz spam e phishing

## [RESOLVIDO] 2026-06-05 - Formulário de contato inseguro
- **Problema:** Formulário provavelmente client-side, sem rate limit
- **Ação:** Criado `app/api/contact/route.ts` com validação Zod, rate limit 5req/min, honeypot
- **Variáveis:** usa process.env.EMAIL_API_KEY

## [RESOLVIDO] 2026-06-05 - Falta de headers de segurança
- **Problema:** Sem X-Frame-Options, HSTS, etc.
- **Ação:** Adicionado em next.config.js
