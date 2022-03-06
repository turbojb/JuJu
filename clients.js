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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, graphic design",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website01.jpeg",
                        imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website01.jpeg"
                    },
                  {
                    id: uuid(),
                    task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                    role: "UI, graphic design",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02.jpeg",
                    imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_02.jpeg"
                  },
                  {
                    id: uuid(),
                    task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                    role: "UI, graphic design",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_03.jpeg",
                    imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_03.jpeg"
                  }
                ],
              alsoInterested: [
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
                        task: "1 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UX/UI, design",
                        timeLine: "3 Weeks",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "2 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UX/UI, design",
                        timeLine: "1 week",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UX/UI, design",
                        timeLine: "1 week",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Landing_Pages_03.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Landing_Pages_03.jpg"
                    }
                    ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Social_Content_01.jpeg"
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_Emails_01.jpeg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Emails_01_mobile.jpeg"
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Viral Sweep",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_01.jpg"
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_02.jpg"
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, Graphic design, illustration",
                        timeLine: "1-3 days each",
                        imageDesktop: "/images/Green_Valley/Green_Valley_ViralSweep_03.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_ViralSweep_03.jpg"
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02.jpg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_02 .jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03.jpg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03.jpg",
                    },
                ],
                alsoInterested: [
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
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_01.jpeg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_mobile_01.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_01.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_01.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_02.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_02.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_03.jpeg",
                        imageMobile: "/images/Zep/Zep_Website_03.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Emails_01.jpeg",
                        imageMobile: "/images/Zep/Zep_Emails_01.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_01.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_01.jpeg",
                    },
                  {
                    id: uuid(),
                    task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/MintX/MintX_Website_04.jpeg",
                    imageMobile: "/images/MintX/MintX_Website_04.jpeg",
                  },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_02.jpeg",
                        imageMobile: "/images/MintX/MintX_Website_02.jpeg",
                    },
                  {
                    id: uuid(),
                    task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                    role: "Art direction, UI, Graphic design, Icons",
                    timeLine: "4 Weeks",
                    imageDesktop: "/images/MintX/MintX_Website_03.jpeg",
                    imageMobile: "/images/MintX/MintX_Website_03.jpeg",
                  }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Social_Content_01.jpeg",
                        imageMobile: "/images/MintX/MintX_Social_Content_01_mobile.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_02.png",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_02.png",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Landing_Pages_03.png",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_03.png",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/PayPal/PayPal_Social_Content_01.jpeg",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_01.jpeg",
                    }
                ],
                alsoInterested: [
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
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                        imageMobile:  "/images/Pathway_Genomics/Pathway_Genomics_Website_01.png",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Website_02.png",
                        imageMobile:  "/images/Pathway_Genomics/Pathway_Genomics_Website_02.png",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Social Content",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01.jpeg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01_mobile.jpeg",
                    }
                ],
                alsoInterested: [
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
            },
            {
                id: uuid(),
                name: "Emails",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01.jpeg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01_mobile.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
            }
        ]
    },
    giveaways: {
        homePageImage: "/images/Private_homepage/Giveaways.jpg",
        fullName: "Giveaways",
        sections: [
            {
                id: uuid(),
                name: "Dirty Laundry - PeopleTV Contest",
                active: true,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/Dirty_Laundry_PeopleTV_Contest.jpg",
                        imageMobile:  "/images/Giveaways/Dirty_Laundry_PeopleTV_Contest.jpg",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "National Geographic Sweepstakes",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_01.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_01.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_02.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_02.jpeg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_03.jpeg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_03.jpeg",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Welch's Fruit Snacks Contest",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/Welchs_Fruit_Snacks_Contest.gif",
                        imageMobile:  "/images/Giveaways/Welchs_Fruit_Snacks_Contest.gif",
                    }
                ],
                alsoInterested: [
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
                ]
            },
            {
                id: uuid(),
                name: "Sour Jacks Sweepstakes",
                active: false,
                subSections: [
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/Power_of_3D_Sweepstakes.gif",
                        imageMobile:  "/images/Giveaways/Power_of_3D_Sweepstakes.gif",
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_01.jpg",
                        imageMobile:  "/images/Infographics/Infographics_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_02.jpg",
                        imageMobile:  "/images/Infographics/Infographics_02.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_03.jpg",
                        imageMobile:  "/images/Infographics/Infographics_03.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Infographics/Infographics_04.jpg",
                        imageMobile:  "/images/Infographics/Infographics_04.jpg",
                    }
                ],
                alsoInterested: [
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
                ]
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
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Iconography/Iconography.jpg",
                        imageMobile:  "/images/Iconography/Iconography.jpg",
                    }
                ],
                alsoInterested: [
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
                ]
            }
        ]
    }
}
