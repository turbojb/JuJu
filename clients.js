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
                        task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods sold by an award winning chef. I designed the website, including the graphics and the client was very pleased.",
                        role: "UI, graphic design",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website01.jpeg",
                        imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_01_mobile.jpg"
                    },
                  {
                    id: uuid(),
                    task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods sold by an award winning chef. I designed the website, including the graphics and the client was very pleased.",
                    role: "UI, graphic design",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02.jpeg",
                    imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02_mobile.jpg"
                  },
                  {
                    id: uuid(),
                    task: "Rocco DiSpirito is an e-commerce website that sells healthy protein goods sold by an award winning chef. I designed the website, including the graphics and the client was very pleased.",
                    role: "UI, graphic design",
                    timeLine: "4 Weeks",
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
                        task: "Green Valley sells organic bean and vegetable can/pouch goods. They also provide recipes that can include their products into the meal. I’ve designed several web pages such as when they expand their products to retail stores or product locator pages. I also designed the blog homepage and also designed the monthly blog posts.  ",
                        role: "UX/UI, design",
                        timeLine: "3 Weeks",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "Green Valley sells organic bean and vegetable can/pouch goods. They also provide recipes that can include their products into the meal. I’ve designed several web pages such as when they expand their products to retail stores or product locator pages. I also designed the blog homepage and also designed the monthly blog posts.  ",
                        role: "UX/UI, design",
                        timeLine: "1 week",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "Green Valley sells organic bean and vegetable can/pouch goods. They also provide recipes that can include their products into the meal. I’ve designed several web pages such as when they expand their products to retail stores or product locator pages. I also designed the blog homepage and also designed the monthly blog posts.  ",
                        role: "UX/UI, design",
                        timeLine: "1 week",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "I’m the sole designer on the social media account and handle between 1-5 posts weekly. I’ve done the illustrations, small animated GIF’s and composed Green Valley’s products on lifestyle photos. ",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg"
                    },
                    {
                      id: uuid(),
                      reactiveLayout: true,
                      task: "I’m the sole designer on the social media account and handle between 1-5 posts weekly. I’ve done the illustrations, small animated GIF’s and composed Green Valley’s products on lifestyle photos. ",
                      role: "Art direction, Graphic design, illustration",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "Green Valley sends out emails once every 2 or 3 months, where I design them. ",
                        role: "Art direction, Graphic design, illustration",
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
                name: "Viral Sweep",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "I illustrate the backgrounds and compose the images of the prizes for Green Valley’s viral sweepstakes. ",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "I illustrate the backgrounds and compose the images of the prizes for Green Valley’s viral sweepstakes. ",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "I illustrate the backgrounds and compose the images of the prizes for Green Valley’s viral sweepstakes. ",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
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
                        task: "Platinum Guild International is a marketing organization developing the market for platinum jewelry. I have designed and illustrated blog pages to intrigue potential customers who are interested in platinum rings. I collaborated with copywriters and developers to achieve the flow of these pages. ",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "Platinum Guild International is a marketing organization developing the market for platinum jewelry. I have designed and illustrated blog pages to intrigue potential customers who are interested in platinum rings. I collaborated with copywriters and developers to achieve the flow of these pages. ",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "Platinum Guild International is a marketing organization developing the market for platinum jewelry. I have designed and illustrated blog pages to intrigue potential customers who are interested in platinum rings. I collaborated with copywriters and developers to achieve the flow of these pages. ",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "The DX team holds seasonal photoshoots for PGI’s social media platforms and media ads. In post-production, the design team and I edit the images with skin and jewelry retouching. I also illustrated (on Photoshop) posts of an elegant wedding theme with rings.",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
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
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_01.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_01_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Zep is a large distributor of maintenance and cleaning solutions for retail, food & beverage, industrial & institutional, and vehicle care customers. The company had many domains and they were looking to combine three of their websites into one. Their main focus was e-commerce and combining additional information about their company and wholesale/industrial products. A senior designer and I designed the webpages (from template to customized layouts) to meet Zep’s needs. In the end, the client was pleased! ",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_02.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_02_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Zep is a large distributor of maintenance and cleaning solutions for retail, food & beverage, industrial & institutional, and vehicle care customers. The company had many domains and they were looking to combine three of their websites into one. Their main focus was e-commerce and combining additional information about their company and wholesale/industrial products. A senior designer and I designed the webpages (from template to customized layouts) to meet Zep’s needs. In the end, the client was pleased! ",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "Since their website was going through a revamp, Zep asked to redesign their welcome and abandonment emails. ",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
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
        fullName: "MintX",
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
                        imageDesktop: "/images/MintX/MintX_Website_01.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_01_mobile.jpg",
                    },
                  {
                    id: uuid(),
                    task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/MintX/MintX_Website_04.jpeg",
                    imageMobile: "/images/MintX/MintX_Website_04_mobile.jpg",
                  },
                    {
                        id: uuid(),
                        task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_02.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_02_mobile.jpg",
                    },
                  {
                    id: uuid(),
                    task: "Mint-X’s sells patented rodent repellent garbage bags to keep foraging animals out of trash. I was responsible for designing the UI graphics of the website. ",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed their social content with Mint-X’s announcements or additional facts about their products.",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and onbrand. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and onbrand. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_02.png",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_02.png",
                    },
                    {
                        id: uuid(),
                        task: "I produced imagery, designed graphics and infographics for PayPal Credit article pages. I worked closely with a copywriter to ensure the flow of the message was clear and onbrand. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "When the article pages were approved, PayPal asked for imagery for their ads or social content. It was a mixture of selective imagery to illustrations. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                        imageMobile:  "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                    },
                    {
                        id: uuid(),
                        task: "Pathway Genomics (now known as OME Care) is a privately held global precision medical diagnostic and home-care company with mobile applications. I designed their e-commerce website, including the graphics and icons.  ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed the social posts for their product lines. I ensure to distinguish two product lines by the usage of colors and graphics.",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "I designed emails for the two product lines, SKiN iQ and FiT iQ.",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                    image: "/images/thumbnails/greenValley.jpeg",
                    link: `greenValley?active=${encodeURI("Emails")}`,
                    copy: "Green Valley - Emails"
                  }
                ]}
            }
        ]
    },
    giveaways: {
        homePageImage: "/images/Private_homepage/Giveaways.jpg",
        fullName: "Giveaway Landing Pages",
        sections: [

            {
                id: uuid(),
                name: "National Geographic Sweepstakes",
                active: true,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_01.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_01_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_02.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_02_mobile.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                name: "Welch's Fruit Snacks Contest",
                active: false,
              hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win.",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                name: "Sour Jacks Sweepstakes",
                active: false,
                hideActive: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Throughout the years in DXagency, I’ve designed different landing pages for sweepstakes. I handled the illustrations and worked with programmers to develop the gamification or other interactions to enter to win. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                role: "Art direction, UI, Graphic design, Icons",
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
                subSections: [
                    {
                        id: uuid(),
                        task: "Below are various iconography styles for different industries from food to technology. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_01.jpg",
                        imageMobile:  "/images/Infographics/Infographics_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Below are various iconography styles for different industries from food to technology. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_02.jpg",
                        imageMobile:  "/images/Infographics/Infographics_02.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Below are various iconography styles for different industries from food to technology. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_03.jpg",
                        imageMobile:  "/images/Infographics/Infographics_03.jpg",
                    },
                    {
                        id: uuid(),
                        task: "Below are various iconography styles for different industries from food to technology. ",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
                name: "Infographics",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "Below are various infographic designs and illustrations for clients such as Mastercard and Welsh’s.",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
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
