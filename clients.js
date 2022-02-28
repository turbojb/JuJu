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
                        imageDesktop: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_01.jpg",
                        imageMobile: "/images/Rocco_DiSpirito/Rocco_DiSpirito_Website_01.jpg"
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
                        imageDesktop: "/images/Green_Valley/Green_Valley_Social_Content_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Social_Content_01.jpg"
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
                        imageDesktop: "/images/Green_Valley/Green_Valley_Emails_01.jpg",
                        imageMobile: "/images/Green_Valley/Green_Valley_Emails_01.jpg"
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
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03jpg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Landing_Pages_03.jpg",
                    },
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
                        imageDesktop: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_01.jpg",
                        imageMobile: "/images/Platinum_Jewelry/Platinum_Jewelry_Social_Content_01.jpg",
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
                        imageDesktop: "/images/Zep/Zep_Website_01.jpg",
                        imageMobile: "/images/Zep/Zep_Website_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_02.png",
                        imageMobile: "/images/Zep/Zep_Website_02.png",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Website_03.png",
                        imageMobile: "/images/Zep/Zep_Website_03.png",
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
                        imageDesktop: "/images/Zep/Zep_Emails_01.jpg",
                        imageMobile: "/images/Zep/Zep_Emails_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "UI, Graphic Design",
                        timeLine: "2 Weeks",
                        imageDesktop: "/images/Zep/Zep_Emails_02.png",
                        imageMobile: "/images/Zep/Zep_Emails_02.png",
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
                        imageDesktop: "/images/MintX/MintX_Website_01.jpg",
                        imageMobile: "/images/MintX/MintX_Website_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_02.jpg",
                        imageMobile: "/images/MintX/MintX_Website_02.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_03.jpg",
                        imageMobile: "/images/MintX/MintX_Website_03.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/MintX/MintX_Website_04.jpg",
                        imageMobile: "/images/MintX/MintX_Website_04.jpg",
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
                        imageDesktop: "/images/MintX/MintX_Social_Content_01.jpg",
                        imageMobile: "/images/MintX/MintX_Social_Content_01.jpg",
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
                        imageDesktop: "/images/PayPal/PayPal_Social_Content_01.jpg",
                        imageMobile: "/images/PayPal/PayPal_Landing_Pages_01.jpg",
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
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01.jpg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Social_Content_01.jpg",
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
                        imageDesktop: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01.jpg",
                        imageMobile: "/images/Pathway_Genomics/Pathway_Genomics_Emails_01.jpg",
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
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_01.jpg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_01.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_02.jpg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_02.jpg",
                    },
                    {
                        id: uuid(),
                        task: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
                        role: "Art direction, UI, Graphic design, Icons",
                        timeLine: "4 Weeks",
                        imageDesktop: "/images/Giveaways/National_Geographic_Sweepstakes_03.jpg",
                        imageMobile:  "/images/Giveaways/National_Geographic_Sweepstakes_03.jpg",
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
                ]
            }
        ]
    }
}
