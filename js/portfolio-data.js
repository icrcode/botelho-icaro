// Dados do portfólio
const portfolioData = {
    about: {
        name: "Ícaro Caldeira Botelho",
        title: "Professor de Desenvolvimento de Sistemas | Estudante de Engenharia de Software",
        location: "Joinville, Santa Catarina, Brasil",
        description: `Profissional de tecnologia com experiência em desenvolvimento de sistemas e educação técnica. 
        Atualmente atuo como Instrutor de Desenvolvimento de Sistemas no SENAI/SC, 
        compartilhando conhecimentos e formando novos profissionais para o mercado de tecnologia.
        
        Sou estudante de Engenharia de Software na Católica SC, buscando constantemente aprimorar 
        minhas habilidades técnicas e conhecimentos na área de desenvolvimento.
        
        Possuo experiência prévia na indústria, tendo atuado como Controlador de Produção I e 
        Assistente Técnico em Laminação Plástica na Whirlpool Corporation.`
    },
    skills: [
        { name: "JavaScript", level: 85, certified: true },
        { name: "Python", level: 80, certified: true },
        { name: "PHP", level: 75, certified: false },
        { name: "HTML", level: 90, certified: false },
        { name: "CSS", level: 85, certified: false },
        { name: "MySQL", level: 80, certified: false },
        { name: "SQL", level: 80, certified: false },
        { name: "Comunicação", level: 90, certified: false },
        { name: "Microsoft Excel", level: 85, certified: true },
        { name: "Adobe Photoshop", level: 70, certified: false },
        { name: "Dormir", level: 2, certified: false }
    ],
    projects: [
        {
            name: "Biblioteca Digital de Babel",
            description: "Uma implementação digital da Biblioteca de Babel, conceito criado por Jorge Luis Borges. Este projeto permite explorar uma biblioteca virtual que contém todos os textos possíveis.",
            technologies: ["JavaScript"],
            link: "https://github.com/icrcode/dbdnr-library-of-babel"
        },
        {
            name: "API Node Express MySQL",
            description: "Projeto de criação de uma API desenvolvida em Node.js utilizando o framework Express e o banco de dados MySQL. Este repositório demonstra a construção de uma API capaz de realizar operações de CRUD.",
            technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
            link: "https://github.com/icrcode/api-node-express-mysql2"
        },
        {
            name: "Portfólio Pessoal",
            description: "Meu primeiro site que desenvolvi na minha vida! A ideia era criar um currículo/portfólio. Sempre gosto de revisitá-lo para observar o quanto evolui ao longo do tempo.",
            technologies: ["HTML"],
            link: "https://github.com/icrcode/botelho-icaro"
        },
        {
            name: "Algoritmos de Ordenação",
            description: "Repositório dedicado ao estudo e implementação de algoritmos de ordenação. Aqui, exploramos conceitos teóricos, análises de complexidade e implementações práticas de diversos métodos de ordenação.",
            technologies: ["Python"],
            link: "https://github.com/icrcode/ordenacao-v4"
        },
        {
            name: "Sistema de Gerenciamento de Usuários",
            description: "Um sistema simples de gerenciamento de usuários construído com PHP e MySQL, projetado para permitir registro de usuários, login, upload de fotos de perfil e visualização de todos os usuários registrados.",
            technologies: ["PHP", "MySQL"],
            link: "https://github.com/icrcode/crud-php"
        }
    ],
    experience: [
        {
            title: "Instrutor de Desenvolvimento de Sistemas",
            company: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
            period: "Dezembro 2023 - Presente",
            description: "Atuação como professor de desenvolvimento de sistemas, formando novos profissionais para o mercado de tecnologia."
        },
        {
            title: "Instrutor Trainee",
            company: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
            period: "Agosto 2023 - Dezembro 2023",
            description: "Programa de formação para instrutores, com foco em metodologias de ensino e práticas pedagógicas."
        },
        {
            title: "Controlador de Produção I",
            company: "Whirlpool Corporation",
            period: "Julho 2022 - Julho 2023",
            description: "Atuação no controle e monitoramento de processos produtivos."
        },
        {
            title: "Assistente Técnico em Laminação Plástica",
            company: "Whirlpool Corporation",
            period: "Março 2021 - Junho 2022",
            description: "Programa de aprendizagem com foco em processos técnicos de laminação plástica."
        }
    ],
    education: [
        {
            degree: "Bacharelado em Engenharia de Software",
            institution: "Católica SC",
            period: "Em andamento"
        },
        {
            degree: "Técnico em Desenvolvimento de Sistemas",
            institution: "SENAI/SC",
            period: "Concluído"
        },
        {
            course: "Algoritmo e Linguagem de Programação em Arduino",
            institution: "ALPHA - UDESC Joinville"
        },
        {
            course: "DEVinHouse LAB 365 Teachers",
            institution: "SENAI/SC"
        },
        {
            course: "Robótica Móvel - EV3",
            institution: "UDESC Joinville"
        },
        {
            course: "Desenvolvimento de Projetos no Ensino de Programação",
            institution: "SENAI/SC"
        }
    ],
    contact: {
        email: "icarobotelhosocial@gmail.com",
        linkedin: "https://www.linkedin.com/in/icarocbotelho/",
        github: "https://github.com/icrcode"
    }
};
