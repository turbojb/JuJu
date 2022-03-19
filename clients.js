const uuid = require('uuid-random');

module.exports.clients = {
    rocco: {
        homePageImage: "/images/Private_homepage/Rocco_DiSpirito.jpg",
        name: "rocco",
        fullName: "Rocco DiSpirito",
        sections: [
            {
                id: uuid(),
                name: "Website",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods crafted by an award winning chef. I was tasked to design their website and the client was very pleased with the final product.",
                        role: "Art Direction, UI, Graphic design",
                        timeLine: "5 Weeks",
                        link: "https://roccodispirito.com",
                        imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website01.jpeg",
                        imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_01_mobile.jpg"
                    },
                  {
                    id: uuid(),
                    task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods crafted by an award winning chef. I was tasked to design their website and the client was very pleased with the final product.",
                    role: "Art Direction, UI, graphic design",
                    timeLine: "5 Weeks",
                    link: "https://roccodispirito.com",
                    imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02.jpeg",
                    imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02_mobile.jpg"
                  },
                  {
                    id: uuid(),
                    task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods crafted by an award winning chef. I was tasked to design their website and the client was very pleased with the final product.",
                    role: "Art Direction, UI, graphic design",
                    timeLine: "5 Weeks",
                    link: "https://roccodispirito.com",
                    imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_03.jpeg",
                    imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_03_mobile.jpg"
                  }
                ],
              alsoInterested: {
                  offsetCenter: true,
                  links: [
                    {
                      image: "/images/thumbnails/pathway.jpeg",
                      link: "/pathwayGenomics",
                      copy: "Pathway Genomics - Website"
                    },
                    {
                      image: "/images/thumbnails/dirtylaundry.jpeg",
                      link: `/giveaways`,
                      copy: "Show Us Your Dirty Laundry Contest"
                    }
                  ]
                }
            }

        ]
    },
    greenValley: {
        homePageImage: "/images/Private_homepage/Green_Valley.jpg",
        name: "greenValley",
        fullName: "Green Valley",
        sections: [
            {
                id: uuid(),
                name: "Landing Pages",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Green Valley grows and sells organic beans, corn, peas, and pumpkin products. I designed several pages of their website including; the product locator, the blog homepage, and monthly blog posts. ",
                        role: "UX/UI design",
                        timeLine: "3 Weeks",
                        link: "https://welcometogreenvalley.com/explore",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "Green Valley grows and sells organic beans, corn, peas, and pumpkin products. I designed several pages of their website including; the product locator, the blog homepage, and monthly blog posts. ",
                        role: "UX/UI design",
                        timeLine: "3 weeks",
                        link: "https://welcometogreenvalley.com/blog/easy-meal-preps-to-start-the-new-year-right",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "Green Valley grows and sells organic beans, corn, peas, and pumpkin products. I designed several pages of their website including; the product locator, the blog homepage, and monthly blog posts.  ",
                        role: "UX/UI design",
                        timeLine: "3 weeks",
                        link: "https://welcometogreenvalley.com/product-locator",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_03.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_03.jpg"
                    }
                    ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: "/zep",
                    copy: "Zep - Website"
                  },
                  {
                    image: "/images/thumbnails/rocco.jpeg",
                    link: `/rocco`,
                    copy: "Rocco DiSpirito - Website"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I am the sole designer for the Green Valley social media accounts. I design 1-5 social posts per week; including illustrations, animated GIFs and more to keep their feed fresh and relevant.",
                        role: "Art direction, Graphic design, Illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg"
                    },
                    {
                      id: uuid(),
                      reactiveLayout: true,
                      task: "I am the sole designer for the Green Valley social media accounts. I design 1-5 social posts per week; including illustrations, animated GIFs and more to keep their feed fresh and relevant. ",
                      role: "Art direction, Graphic design, Illustration",
                      timeLine: "1-3 days each",
                      images: [
                        "/images/Green_Valley/Green_Valley_Social_Content_06_smaller.gif",
                        "/images/Green_Valley/Green_Valley_Social_Content_07_smaller.gif"
                      ]
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/infographic.jpeg",
                    link: "/infographics",
                    copy: "Infographics"
                  },
                  {
                    image: "/images/thumbnails/welchs.jpeg",
                    link: `giveaways?active=${encodeURI("Welch's Fruit Snacks Contest")}`,
                    copy: "Welch’s Fruit Snacks Recipe Maker"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I am responsible for designing the Green Valley monthly emails that promote different products and recipes to consumers.  ",
                        role: "Art direction, Graphic design, Illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Emails_01.jpeg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Emails_01_mobile.jpeg"
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/pathway.jpeg",
                    link: `/pathwayGenomics?active=${encodeURI("Emails")}`,
                    copy: "Pathway Genomics - Emails"
                  },
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: `zep?active=${encodeURI("Emails")}`,
                    copy: "Zep - Emails"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Sweepstakes",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed the landing pages, illustrations, and prize images for multiple sweepstakes projects.",
                        role: "Art direction, Logo design, Graphic design, Illustration",
                        timeLine: "1-2 weeks each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "I designed the landing pages, illustrations, and prize images for multiple sweepstakes projects.",
                        role: "Art direction, Logo design, Graphic design, Illustration",
                        timeLine: "1-2 weeks each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "I designed the landing pages, illustrations, and prize images for multiple sweepstakes projects.",
                        role: "Art direction, Logo design, Graphic design, Illustration",
                        timeLine: "1-2 weeks each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_03.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_03.jpg"
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/pathway.jpeg",
                    link: `/pathwayGenomics?active=${encodeURI("Emails")}`,
                    copy: "Pathway Genomics - Emails"
                  },
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: `zep?active=${encodeURI("Emails")}`,
                    copy: "Zep - Emails"
                  }
                ]}
            }
        ]
    },
    platinumJewelry: {
        homePageImage: "/images/Private_homepage/Platinum_Jewelry.jpeg",
        fullName: "Platinum Jewelry",
        sections: [
            {
                id: uuid(),
                name: "Landing Pages",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Platinum Guild International is an educational resource for everything pertaining to platinum jewelry. I designed and illustrated their blog pages to intrigue potential platinum customers. I collaborated with the copywriters and the developers to achieve the flow and function of these pages.",
                        role: "Art direction, UI, Graphic design, Illustration",
                        timeLine: "2 Weeks",
                        link: "http://platinumjewelry.com/metal-matters",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "Platinum Guild International is an educational resource for everything pertaining to platinum jewelry. I designed and illustrated their blog pages to intrigue potential platinum customers. I collaborated with the copywriters and the developers to achieve the flow and function of these pages. ",
                        role: "Art direction, UI, Graphic design, Illustration",
                        timeLine: "2 Weeks",
                        link: "https://platinumjewelry.com/why-platinum/all-about-platinum",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "Platinum Guild International is an educational resource for everything pertaining to platinum jewelry. I designed and illustrated their blog pages to intrigue potential platinum customers. I collaborated with the copywriters and the developers to achieve the flow and function of these pages.",
                        role: "Art direction, UI, Graphic design, Illustration",
                        timeLine: "2 Weeks",
                        link: "https://platinumjewelry.com/buying-tips/buy-engagement-ring-online",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03.jpeg",
                    },
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/paypal.jpeg",
                    link: `/payPal`,
                    copy: "PayPal - Landing Pages"
                  },
                  {
                    image: "/images/thumbnails/greenvalley.jpeg",
                    link: `/greenValley`,
                    copy: "Green Valley - Landing Pages"
                  }
                ]
                }
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "The DX design team holds seasonal photoshoots for PGI’s social media platforms and ads. In post-production, the design team and I are responsible for retouching all of the photographs. I also illustrated social posts portraying an elegant wedding theme featuring various platinum rings (shown below).",
                        role: "Art direction, Illustration, Retouching",
                        timeLine: "2-4 days each",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_01.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_mobile_01.jpeg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/pathway.jpeg",
                    link: `/pathwayGenomics?active=${encodeURI("Social Content")}`,
                    copy: "Pathway Genomics - Social Content "
                  },
                  {
                    image: "/images/thumbnails/dirtylaundry.jpeg",
                    link: `/giveaways`,
                    copy: "Show Us Your Dirty Laundry Contest"
                  }
                ]}
            }
        ]
    },
    zep: {
        homePageImage: "/images/Private_homepage/Zep.jpg",
        fullName: "Zep",
        sections: [
            {
                id: uuid(),
                name: "Website",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Zep is a large distributor of maintenance and cleaning solutions for retail, food & beverage, industrial & institutional, and vehicle care customers. The company had many domains and they were looking to combine three of their websites into one. Their main focus was e-commerce and combining additional information about their company and wholesale/industrial products. A senior designer and I designed the webpages (from template to customized layouts) to meet Zep’s needs. In the end, the client was pleased! ",
                        role: "Art direction, UI, Graphic design",
                        timeLine: "2 Months",
                        link: "https://zep.com",
                        imageDesktop: "/images/Zep/Zep_Website_01.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_01_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Zep is a large distributor of maintenance and cleaning solutions for retail, food & beverage, industrial & institutional, and vehicle care customers. The company had many domains and they were looking to combine three of their websites into one. Their main focus was e-commerce and combining additional information about their company and wholesale/industrial products. A senior designer and I designed the webpages (from template to customized layouts) to meet Zep’s needs. In the end, the client was pleased! ",
                        role: "Art direction, UI, Graphic design",
                        timeLine: "2 Months",
                        link: "https://zep.com",
                        imageDesktop: "/images/Zep/Zep_Website_02.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_02_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Zep is a large distributor of maintenance and cleaning solutions for retail, food & beverage, industrial & institutional, and vehicle care customers. The company had many domains and they were looking to combine three of their websites into one. Their main focus was e-commerce and combining additional information about their company and wholesale/industrial products. A senior designer and I designed the webpages (from template to customized layouts) to meet Zep’s needs. In the end, the client was pleased! ",
                        role: "Art direction, UI, Graphic design",
                        timeLine: "2 Months",
                        link: "https://zep.com",
                        imageDesktop: "/images/Zep/Zep_Website_03.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_03_mobile.jpg",
                    }
                ],
                alsoInterested: {
                  offsetCenter: true,
                  links: [
                  {
                    image: "/images/thumbnails/rocco.jpeg",
                    link: "/rocco",
                    copy: "Rocco DiSpirito - Website"
                  },
                  {
                    image: "/images/thumbnails/natgeo.jpeg",
                    link: `giveaways?active=${encodeURI("National Geographic Sweepstakes")}`,
                    copy: "National Geographic Sweepstakes"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "To match their new website, Zep also requested a redesign of their welcome and abandonment emails. ",
                        role: "Art direction, UI, Graphic design",
                        timeLine: "2-3 days each",
                        imageDesktop: "/images/Zep/Zep_Emails_01.jpeg",
                        imageMobile: "/images/Zep/Zep_Email_mobile.jpg",
                    }
                ],
                alsoInterested: {
                  offsetCenter: true,
                  links: [
                  {
                    image: "/images/thumbnails/pathway.jpeg",
                    link: `/pathwayGenomics?active=${encodeURI("Emails")}`,
                    copy: "Pathway Genomics - Emails"
                  },
                  {
                    image: "/images/thumbnails/greenvalley.jpeg",
                    link: `greenValley?active=${encodeURI("Emails")}`,
                    copy: "Green Valley - Emails"
                  }
                ]}
            }
        ]
    },
    mintx: {
        homePageImage: "/images/Private_homepage/minx.jpeg",
        fullName: "Mint-X",
        sections: [
            {
                id: uuid(),
                name: "Website",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        link: "https://mint-x.com",
                        imageDesktop: "/images/MintX/MintX_Website_01.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_01_mobile.jpg",
                    },
                  {
                    id: uuid(),
                    task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
                    link: "https://mint-x.com",
                    imageDesktop: "/images/MintX/MintX_Website_04.jpeg",
                    imageMobile: "/images/MintX/MintX_Website_04_mobile.jpg",
                  },
                    {
                        id: uuid(),
                        task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        link: "https://mint-x.com",
                        imageDesktop: "/images/MintX/MintX_Website_02.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_02_mobile.jpg",
                    },
                  {
                    id: uuid(),
                    task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
                    link: "https://mint-x.com",
                    imageDesktop: "/images/MintX/MintX_Website_03.jpeg",
                    imageMobile: "/images/MintX/MintX_Website_03_mobile.jpg",
                  }
                ],
                alsoInterested: {
                  offsetCenter: true,
                  links: [
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: "/zep",
                    copy: "Zep - Website"
                  },
                  {
                    image: "/images/thumbnails/platinum.jpeg",
                    link: `/platinumJewelry`,
                    copy: "Platinum Jewelry - Landing Pages"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed their social content with Mint-X’s announcements or additional facts about their products.",
                        role: "Art direction, Graphic design, Illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/MintX/MintX_Social_Content_01.jpeg",
                        imageMobile: "/images/MintX/MintX_Social_Content_01_mobile.jpeg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/pathway.jpeg",
                    link: `/pathwayGenomics?active=${encodeURI("Social Content")}`,
                    copy: "Pathway Genomics - Social Content"
                  },
                  {
                    image: "/images/thumbnails/greenvalley.jpeg",
                    link: `greenValley?active=${encodeURI("Social Content")}`,
                    copy: "Green Valley - Social Content"
                  }
                ]}
            }
        ]
    },
    payPal: {
        homePageImage: "/images/Private_homepage/PayPal.jpg",
        fullName: "PayPal",
        sections: [
            {
                id: uuid(),
                name: "Landing Pages",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and on-brand. ",
                        role: "Art direction, UI, Infographics",
                        timeLine: "2-3 weeks each",
                        link: "https://www.paypal.com/us/brc/article/smb-ecommerce-growth-infographic",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and on-brand. ",
                        role: "Art direction, UI, Infographics",
                        timeLine: "2-3 weeks each",
                        link: "https://paypal.com/us/brc/article/consumer-financing-for-fashion-retailers",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_02.png",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_02.png",
                    },
                    {
                        id: uuid(),
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and on-brand. ",
                        role: "Art direction, UI, Infographics",
                        timeLine: "2-3 weeks each",
                        link: "https://www.paypal.com/us/brc/article/5-website-updates-that-can-impact-your-sales",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_03.png",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_03.png",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/iconography.jpeg",
                    link: "/iconography",
                    copy: "Iconography"
                  },
                  {
                    image: "/images/thumbnails/natgeo.jpeg",
                    link: `giveaways?active=${encodeURI("National Geographic Sweepstakes")}`,
                    copy: "National Geographic Sweepstakes"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "PayPal also requested refreshed imagery for their ads and social content. I designed their ads to contain a mixture of stock imagery and illustrations. ",
                        role: "Art direction, UI, Infographics, Retouching",
                        timeLine: "1-4 days each",
                        imageDesktop: "/images/PayPal/PayPal_Social_Content_01.jpeg",
                        imageMobile: "/images/PayPal/PayPal_Social_Content_01.jpeg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/mintx.jpeg",
                    link: `/mintx?active=${encodeURI("Social Content")}`,
                    copy: "Mint-X - Social Content"
                  },
                  {
                    image: "/images/thumbnails/iconography.jpeg",
                    link: `iconography?active=${encodeURI("Social Content")}`,
                    copy: "Iconography"
                  }
                ]
                }
            }
        ]
    },
    pathwayGenomics: {
        homePageImage: "/images/Private_homepage/Pathway_Genomics.jpeg",
        fullName: "Pathway Genomics",
        sections: [
            {
                id: uuid(),
                name: "Website",
                active: true,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Pathway Genomics (now known as OME Care) is a privately held global precision medical diagnostic and home-care company with mobile applications. I designed their e-commerce website, including the graphics and icons.  ",
                        role: "Art direction, UX/UI, Graphic design, Icons",
                        timeLine: "3 weeks each",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                        imageMobile:  "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                    },
                    {
                        id: uuid(),
                        task: "Pathway Genomics (now known as OME Care) is a privately held global precision medical diagnostic and home-care company with mobile applications. I designed their e-commerce website, including the graphics and icons.  ",
                        role: "Art direction, UX/UI, Graphic design, Icons",
                        timeLine: "3 weeks each",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Website_02.png",
                        imageMobile:  "/images/Pathway_Genomics/Pathway_Genomics_Website_02.png",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/platinum.jpeg",
                    link: "/platinumJewelry",
                    copy: "Platinum Jewelry - Landing Pages"
                  },
                  {
                    image: "/images/thumbnails/rocco.jpeg",
                    link: `rocco`,
                    copy: "Rocco DiSpirito - Website"
                  }
                ]}
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I was responsible for designing the content for Pathway Genomics social media pages. I distinguished the two product lines by using different colors and graphics.",
                        role: "Art direction, Graphic design, Illustration",
                        timeLine: "1-4 days each",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01.jpeg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01_mobile.jpeg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/mintx.jpeg",
                    link: `/mintx?active=${encodeURI("Social Content")}`,
                    copy: "Mint-X - Social Content"
                  },
                  {
                    image: "/images/thumbnails/paypal.jpeg",
                    link: `paypal?active=${encodeURI("Social Content")}`,
                    copy: "PayPal - Social Content"
                  }
                ]
                }
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed emails for the two product lines, SKiN iQ and FiT iQ.",
                        role: "Art direction, Graphic design, Illustration",
                        timeLine: "3-5 days each",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01.jpeg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01_mobile.jpeg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: `/zep`,
                    copy: "Zep - Website"
                  },
                  {
                    image: "/images/thumbnails/greenvalley.jpeg",
                    link: `greenValley?active=${encodeURI("Emails")}`,
                    copy: "Green Valley - Emails"
                  }
                ]}
            }
        ]
    },
    giveaways: {
        homePageImage: "/images/Private_homepage/Giveaways.jpeg",
        fullName: "Giveaway Landing Pages",
        sections: [
          {
            id: uuid(),
            name: "Welch's Fruit Snacks Contest",
            active: true,
            hideActive: true,
            subSections: [
              {
                id: uuid(),
                task: "Throughout the years at DXagency, I have designed many different sweepstakes landing pages for various clients. I handled the illustrations and design while working with the programmers to develop, gamify, and animate the pages. ",
                role: "Art direction, UX/UI, Logo design, Graphic design, Illustration, Infographic",
                timeLine: "5 Weeks",
                imageDesktop: "/images/Giveaways/Welchs_Fruit_Snacks_Contest.gif",
                imageMobile:  "/images/Giveaways/Welchs_Fruit_Snacks_Contest.gif",
              }
            ],
            alsoInterested: {
              links: [
                {
                  image: "/images/thumbnails/infographic.jpeg",
                  link: "/infographics",
                  copy: "Infographics"
                },
                {
                  image: "/images/thumbnails/greenvalley.jpeg",
                  link: `greenValley?active=${encodeURI("Viral Sweep")}`,
                  copy: "Green Valley - ViralSweep"
                }
              ]}
          },
          {
                id: uuid(),
                name: "National Geographic Sweepstakes",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Throughout the years at DXagency, I have designed many different sweepstakes landing pages for various clients. I handled the illustrations and design while working with the programmers to develop, gamify, and animate the pages. ",
                        role: "Art direction, UX/UI, Graphic design",
                        timeLine: "2-3 weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_01.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_01_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Throughout the years at DXagency, I have designed many different sweepstakes landing pages for various clients. I handled the illustrations and design while working with the programmers to develop, gamify, and animate the pages.  ",
                        role: "Art direction, UX/UI, Graphic design",
                        timeLine: "2-3 weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_02.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_02_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Throughout the years at DXagency, I have designed many different sweepstakes landing pages for various clients. I handled the illustrations and design while working with the programmers to develop, gamify, and animate the pages.  ",
                        role: "Art direction, UX/UI, Graphic design",
                        timeLine: "2-3 weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_03.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_03_mobile.jpg",
                    }
                ],
                alsoInterested: {
                  offsetCenter: true,
                  links: [
                  {
                    image: "/images/thumbnails/dirtylaundry.jpeg",
                    link: "/giveaways",
                    copy: "Show Us Your Dirty Laundry Contest"
                  },
                  {
                    image: "/images/thumbnails/zep.jpeg",
                    link: `/zep`,
                    copy: "Zep - Website"
                  }
                ]}
            },

            {
                id: uuid(),
                name: "Sour Jacks Sweepstakes",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win. ",
                        role: "Art direction, UX/UI, Logo design, Graphic design, Illustration",
                        timeLine: "5 weeks",
                        imageDesktop: "/images/Giveaways/Power_of_3D_Sweepstakes.gif",
                        imageMobile:  "/images/Giveaways/Power_of_3D_Sweepstakes.gif",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/infographic.jpeg",
                    link: "/infographics",
                    copy: "Infographics"
                  },
                  {
                    image: "/images/thumbnails/natgeo.jpeg",
                    link: `giveaways?active=${encodeURI("National Geographic Sweepstakes")}`,
                    copy: "National Geographic Sweepstakes"
                  }
                ]}
            },
            {
            id: uuid(),
            name: "Dirty Laundry - PeopleTV Contest",
            active: false,
            hideActive: true,
            subSections: [
              {
                id: uuid(),
                task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win.",
                role: "Art direction, UX/UI, Logo design, Graphic design",
                timeLine: "4 Weeks",
                imageDesktop: "/images/Giveaways/Dirty_Laundry_PeopleTV_Contest.jpg",
                imageMobile:  "/images/Giveaways/Dirty_Laundry_PeopleTV_Contest.jpg",
              }
            ],
            alsoInterested: {
              links: [
                {
                  image: "/images/thumbnails/natgeo.jpeg",
                  link: `giveaways?active=${encodeURI("National Geographic Sweepstakes")}`,
                  copy: "National Geographic Sweepstakes"
                },
                {
                  image: "/images/thumbnails/platinum.jpeg",
                  link: `/platinumJewelry`,
                  copy: "Platinum Jewelry - Landing Pages"
                }
              ]}
          }
        ]
    },
    infographics: {
        homePageImage: "/images/Private_homepage/Infographics.jpeg",
        fullName: "Infographics",
        sections: [
            {
                id: uuid(),
                name: "Infographics",
                active: true,
              hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "I created infographic designs and illustrations for clients such as Mastercard and Welch’s Fruit Snacks. ",
                        role: "Art direction, Infographics",
                        timeLine: "3-4 weeks each",
                        imageDesktop: "/images/Infographics/Infographics_01.jpg",
                        imageMobile:  "/images/Infographics/Infographics_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "I created infographic designs and illustrations for clients such as Mastercard and Welch’s Fruit Snacks. ",
                        role: "Art direction, Infographics",
                        timeLine: "3-4 weeks each",
                        imageDesktop: "/images/Infographics/Infographics_02.jpg",
                        imageMobile:  "/images/Infographics/Infographics_02.jpg",
                    },
                    {
                        id: uuid(),
                        task: "I created infographic designs and illustrations for clients such as Mastercard and Welch’s Fruit Snacks.",
                        role: "Art direction, Infographics",
                        timeLine: "3-4 weeks each",
                        imageDesktop: "/images/Infographics/Infographics_03.jpg",
                        imageMobile:  "/images/Infographics/Infographics_03.jpg",
                    },
                    {
                        id: uuid(),
                        task: "I created infographic designs and illustrations for clients such as Mastercard and Welch’s Fruit Snacks. ",
                        role: "Art direction, Infographics",
                        timeLine: "3-4 weeks each",
                        imageDesktop: "/images/Infographics/Infographics_04.jpg",
                        imageMobile:  "/images/Infographics/Infographics_04.jpg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/paypal.jpeg",
                    link: "/paypal",
                    copy: "PayPal - Landing Pages"
                  },
                  {
                    image: "/images/thumbnails/greenvalley.jpeg",
                    link: `greenValley`,
                    copy: "Green Valley - Landing Pages"
                  }
                ]}
            }
        ]
    },
    iconography: {
        homePageImage: "/images/Private_homepage/Iconography.jpg",
        fullName: "Iconography",
        sections: [
            {
                id: uuid(),
                name: "Iconography",
                active: true,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Below are various iconography styles for different industries ranging from food to technology.",
                        role: "Art direction, Icons",
                        timeLine: "3-4 Weeks",
                        imageDesktop: "/images/Iconography/Iconography.jpg",
                        imageMobile:  "/images/Iconography/Iconography.jpg",
                    }
                ],
                alsoInterested: {
                  links: [
                  {
                    image: "/images/thumbnails/paypal.jpeg",
                    link: "/paypal",
                    copy: "PayPal - Landing Pages"
                  },
                  {
                    image: "/images/thumbnails/infographic.jpeg",
                    link: `/infographics`,
                    copy: "Infographics"
                  }
                ]}
            }
        ]
    }
}
