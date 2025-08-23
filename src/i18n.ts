import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        interests: 'Interests',
        download: 'Download PDF',
        aboutText: 'I am a passionate Full-Stack Developer with experience in developing DeFi, Metaverse, and Blockchain applications.During my Computer Engineering education, I worked with various programming languages and fields, such as computer graphics, parallel programming, and web development. Since the start of my career, I have gained hands-on experience in smart contract development, decentralized applications, and full-stack web solutions. I thrive in dynamic environments and enjoy learning and adapting to new technologies.',
        experienceList: [
          {
            title: "Full-Stack Developer",
            date: "2023 – 2024",
            company: "Atlas Yazılım&Bilisim",
            description:
              "Conducted research and development of Full-Stack Blockchain applications.",
            details: [
              {
                description:
                  "Developed and tested smart contracts (Solidity, Ethers.js,Hardhat, Mocha, Rust (Anchor Framework - Solana)).",
              },
              { description: "Designed and implemented DeFi projects." },
            ],
          },
          {
            title: "Full-Stack Developer",
            date: "2021 – 2023",
            company: "SAMPAS / METAPERA",
            description:
              "Conducted research and development of Full-Stack Blockchain applications.",
            details: [
              {
                description:
                  "Developed, managed, and tested smart contracts (Truffle, Mocha, Solidity, Web3.js, Slither).",
                details: [
                  {
                    description: "REIT DeFi V1 and V2",
                    details: [
                      {
                        description:
                          "Developed protocol core, ERC20, UUPS, governance, and integration with Uniswap V2, Compound, etc.",
                      },
                      {
                        description:
                          "Designed and built decentralized applications (dApps).",
                      },
                      {
                        description:
                          "Implemented on-chain/off-chain data management solutions to enhance user experience.",
                      },
                    ],
                  },
                  {
                    description: "METAPERA Metaverse",
                    details: [
                      {
                        description:
                          "Developed a customizable ERC721 token with a sale contract on the Polygon (MATIC) Blockchain.",
                      },
                      {
                        description:
                          "Built backend solutions for image generation, metadata file upload to IPFS, and URI synchronization with Polygon.",
                      },
                    ],
                  },
                ],
              },
              {
                description:
                  "Engaged in market research, application deployment, and marketing strategies.",
              },
            ],
          },
          {
            title: "Software Developer Intern",
            date: "2019 Summer",
            company: "Mavi Alp",
            description: "Worked on an IoT project using LoRa technology.",
            details: [
              {
                description:
                  "Gained experience in embedded systems and application development.",
              },
            ],
          },
          {
            title: "Software Developer Intern",
            date: "2018 Summer",
            company: "Proline Integrated Intelligence",
            description:
              "Developed Full-Stack Web Applications as part of the R&D department",
            details: [
              {
                description:
                  "Worked with various technologies such as JavaScript, Apache Kafka, MySQL, and MongoDB to build web applications.",
              },
            ],
          },
          {
            title: "Founder",
            date: "2008",
            company: "https://emreoyun05.tr.gg",
            description:
              "In 2008, I created a website using a control panel where I shared Adobe Flash games that I liked. Most of the content was only accessible after logging in. The website is still online, but the design and content are now broken. I also no longer have access to the control panel, but it was a valuable experience for me to learn about web development and running a website.",
          },
        ],
        educationList: [
          {
            degree: 'B.Sc. in Computer Engineering',
            school: 'Karadeniz Technical University',
            year: '09.2014 - 03.2022',
          },
        ],
        skillsList: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        interestsText: 'Apart from being a Full-Stack Developer, I love staying active and spending time outdoors. I enjoy playing basketball, volleyball, and skiing, as well as riding motorcycles—I am interested in watching motorcycle repair videos. On a fun note, even though I’m right-handed, I somehow play football exclusively with my left foot—a talent that even I don’t fully understand!',
        resume: 'assets/Resume_YunusEmre_Karakoese.pdf',
      },
    },
    tr: {
      translation: {
        about: 'Hakkımda',
        experience: 'Deneyim',
        education: 'Eğitim',
        skills: 'Yetenekler',
        interests: 'İlgi Alanları',
        download: 'PDF İndir',
        aboutText: 'DeFi, Metaverse ve Blockchain uygulamaları geliştirme konusunda deneyimli, tutkulu bir Full-Stack Geliştiriciyim. Bilgisayar Mühendisliği eğitimim sırasında bilgisayar grafikleri, paralel programlama ve web geliştirme gibi çeşitli alanlarda ve farklı programlama dilleri ile çalıştım. Kariyerimin başlangıcından bu yana akıllı sözleşme geliştirme, merkeziyetsiz uygulamalar ve uçtan uca web çözümleri konusunda pratik deneyim kazandım. Dinamik ortamlarda çalışmayı, yeni teknolojileri öğrenmeyi ve adapte olmayı seviyorum.',
        experienceList: [
          {
            title: "Full-Stack Geliştirici",
            date: "2023 – 2024",
            company: "Atlas Yazılım&Bilisim",
            description:
              "Full-Stack Blockchain uygulamalarının araştırılması ve geliştirilmesi.",
            details: [
              {
                description:
                  "Akıllı sözleşmelerin geliştirilmesi ve test edilmesi (Solidity, Ethers.js, Hardhat, Mocha, Rust (Anchor Framework - Solana)).",
              },
              { description: "DeFi projelerinin tasarımı ve uygulanması." },
            ],
          },
          {
            title: "Full-Stack Geliştirici",
            date: "2021 – 2023",
            company: "SAMPAS / METAPERA",
            description:
              "Full-Stack Blockchain uygulamalarının araştırılması ve geliştirilmesi.",
            details: [
              {
                description:
                  "Akıllı sözleşmelerin geliştirilmesi, yönetimi ve test edilmesi (Truffle, Mocha, Solidity, Web3.js, Slither).",
                details: [
                  {
                    description: "REIT DeFi V1 ve V2",
                    details: [
                      {
                        description:
                          "Protokol çekirdeği, ERC20, UUPS, yönetişim ve Uniswap V2, Compound vb. ile entegrasyonun geliştirilmesi.",
                      },
                      {
                        description:
                          "Merkeziyetsiz uygulamaların (dApp) tasarımı ve inşası.",
                      },
                      {
                        description:
                          "Kullanıcı deneyimini artırmak için zincir içi/dışı veri yönetim çözümlerinin uygulanması.",
                      },
                    ],
                  },
                  {
                    description: "METAPERA Metaverse",
                    details: [
                      {
                        description:
                          "Polygon (MATIC) Blockchain üzerinde satış sözleşmesi ile özelleştirilebilir bir ERC721 token geliştirildi.",
                      },
                      {
                        description:
                          "Görsel üretimi, metadata dosyalarının IPFS'ye yüklenmesi ve Polygon ile URI senkronizasyonu için backend çözümleri geliştirildi.",
                      },
                    ],
                  },
                ],
              },
              {
                description:
                  "Pazar araştırması, uygulama dağıtımı ve pazarlama stratejileriyle ilgilenildi.",
              },
            ],
          },
          {
            title: "Yazılım Geliştirici Stajyer",
            date: "2019 Yazı",
            company: "Mavi Alp",
            description: "LoRa teknolojisi kullanılarak bir IoT projesi üzerinde çalışıldı.",
            details: [
              {
                description:
                  "Gömülü sistemler ve uygulama geliştirme konusunda deneyim kazanıldı.",
              },
            ],
          },
          {
            title: "Yazılım Geliştirici Stajyer",
            date: "2018 Yazı",
            company: "Proline Integrated Intelligence",
            description:
              "Ar-Ge departmanında Full-Stack Web Uygulamaları geliştirildi.",
            details: [
              {
                description:
                  "JavaScript, Apache Kafka, MySQL ve MongoDB gibi çeşitli teknolojilerle web uygulamaları geliştirildi.",
              },
            ],
          },
          {
            title: "Kurucu",
            date: "2008",
            company: "https://emreoyun05.tr.gg",
            description:
              "2008 yılında, beğendiğim Adobe Flash oyunlarını paylaştığım bir web sitesi oluşturdum. İçeriğin çoğu giriş yaptıktan sonra erişilebiliyordu. Site hala yayında, ancak tasarım ve içerik artık bozuk. Yönetim paneline erişimim yok, ancak web geliştirme ve site yönetimi konusunda değerli bir deneyimdi.",
          },
        ],
        educationList: [
          {
            degree: 'Bilgisayar Mühendisliği Lisans',
            school: 'Karadeniz Teknik Üniversitesi',
            year: '09.2014 - 03.2022',
          },
        ],
        skillsList: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        interestsText: 'Full-Stack Geliştirici olmanın yanı sıra, aktif kalmayı ve açık havada vakit geçirmeyi seviyorum. Basketbol, voleybol ve kayak yapmaktan, ayrıca motosiklet sürmekten hoşlanıyorum—motosiklet tamir videoları izlemeye de ilgim var. Eğlenceli bir not olarak, sağlak olmama rağmen futbolu sadece sol ayağımla oynuyorum—bu yeteneğimi ben bile tam olarak anlamış değilim!',
        resume: 'assets/Resume_YunusEmre_Karakoese.pdf',
      },
    },
    de: {
      translation: {
        about: 'Über mich',
        experience: 'Erfahrung',
        education: 'Ausbildung',
        skills: 'Fähigkeiten',
        interests: 'Interessen',
        download: 'PDF Herunterladen',
        aboutText: 'Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit Erfahrung in der Entwicklung von DeFi-, Metaverse- und Blockchain-Anwendungen. Während meines Informatikstudiums habe ich mit verschiedenen Programmiersprachen und Bereichen wie Computergrafik, Parallelprogrammierung und Webentwicklung gearbeitet. Seit Beginn meiner Karriere habe ich praktische Erfahrung in der Entwicklung von Smart Contracts, dezentralen Anwendungen und Full-Stack-Weblösungen gesammelt. Ich gedeihe in dynamischen Umgebungen und lerne gerne neue Technologien kennen und passe mich an.',
        experienceList: [
          {
            title: "Full-Stack-Entwickler",
            date: "2023 – 2024",
            company: "Atlas Yazılım&Bilisim",
            description:
              "Forschung und Entwicklung von Full-Stack-Blockchain-Anwendungen.",
            details: [
              {
                description:
                  "Entwicklung und Testen von Smart Contracts (Solidity, Ethers.js, Hardhat, Mocha, Rust (Anchor Framework - Solana)).",
              },
              { description: "Entwurf und Implementierung von DeFi-Projekten." },
            ],
          },
          {
            title: "Full-Stack-Entwickler",
            date: "2021 – 2023",
            company: "SAMPAS / METAPERA",
            description:
              "Forschung und Entwicklung von Full-Stack-Blockchain-Anwendungen.",
            details: [
              {
                description:
                  "Entwicklung, Verwaltung und Testen von Smart Contracts (Truffle, Mocha, Solidity, Web3.js, Slither).",
                details: [
                  {
                    description: "REIT DeFi V1 und V2",
                    details: [
                      {
                        description:
                          "Entwicklung des Protokollkerns, ERC20, UUPS, Governance und Integration mit Uniswap V2, Compound usw.",
                      },
                      {
                        description:
                          "Entwurf und Bau von dezentralen Anwendungen (dApps).",
                      },
                      {
                        description:
                          "Implementierung von On-Chain/Off-Chain-Datenmanagementlösungen zur Verbesserung der Benutzererfahrung.",
                      },
                    ],
                  },
                  {
                    description: "METAPERA Metaverse",
                    details: [
                      {
                        description:
                          "Entwicklung eines anpassbaren ERC721-Tokens mit Verkaufskontrakt auf der Polygon (MATIC) Blockchain.",
                      },
                      {
                        description:
                          "Backend-Lösungen für die Bildgenerierung, das Hochladen von Metadaten-Dateien zu IPFS und die URI-Synchronisierung mit Polygon wurden entwickelt.",
                      },
                    ],
                  },
                ],
              },
              {
                description:
                  "Marktforschung, Anwendungsbereitstellung und Marketingstrategien wurden durchgeführt.",
              },
            ],
          },
          {
            title: "Softwareentwickler Praktikant",
            date: "Sommer 2019",
            company: "Mavi Alp",
            description: "Arbeit an einem IoT-Projekt mit LoRa-Technologie.",
            details: [
              {
                description:
                  "Erfahrung in eingebetteten Systemen und Anwendungsentwicklung gesammelt.",
              },
            ],
          },
          {
            title: "Softwareentwickler Praktikant",
            date: "Sommer 2018",
            company: "Proline Integrated Intelligence",
            description:
              "Entwicklung von Full-Stack-Webanwendungen in der F&E-Abteilung.",
            details: [
              {
                description:
                  "Arbeit mit verschiedenen Technologien wie JavaScript, Apache Kafka, MySQL und MongoDB zur Entwicklung von Webanwendungen.",
              },
            ],
          },
          {
            title: "Gründer",
            date: "2008",
            company: "https://emreoyun05.tr.gg",
            description:
              "Im Jahr 2008 habe ich eine Website erstellt, auf der ich Adobe Flash-Spiele geteilt habe, die mir gefallen haben. Die meisten Inhalte waren nur nach dem Einloggen zugänglich. Die Website ist immer noch online, aber das Design und der Inhalt sind jetzt fehlerhaft. Ich habe keinen Zugriff mehr auf das Kontrollpanel, aber es war eine wertvolle Erfahrung, um Webentwicklung und den Betrieb einer Website zu lernen.",
          },
        ],
        educationList: [
          {
            degree: 'B.Sc. in Informatik',
            school: 'Karadeniz Technische Universität',
            year: '09.2014 - 03.2022',
          },
        ],
        skillsList: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        interestsText: 'Neben meiner Tätigkeit als Full-Stack-Entwickler bleibe ich gerne aktiv und verbringe Zeit im Freien. Ich spiele gerne Basketball, Volleyball und fahre Ski sowie Motorrad—ich interessiere mich auch für Motorrad-Reparaturvideos. Eine lustige Anmerkung: Obwohl ich Rechtshänder bin, spiele ich Fußball ausschließlich mit dem linken Fuß—ein Talent, das ich selbst nicht ganz verstehe!',
        resume: 'assets/Lebenslauf_YunusEmre_Karakoese.pdf',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
