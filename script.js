

        const designs = {

            logo1: {
                title: "Shree Shyam Opticals",
                type: "logo",
                description: "I designed a sleek and modern logo for Shree Shyam Opticals, combining elegant typography with subtle optical elements like glasses or lenses to reflect the brand’s professionalism and clarity. The design uses a harmonious color palette to convey trust and precision.",
                tools: ["Corel Draw", "Illustrator"],
                image: "8.JPG"
            },
            logo2: {
                title: "Cansala Hotel",
                type: "logo",
                description: "I crafted an elegant logo for Cansala featuring two wine glasses and a stylish custom font, evoking a blend of luxury and warmth. The design captures the essence of fine dining and hospitality, making it perfect for a sophisticated yet inviting hotel and restaurant brand.",
                tools: ["Corel Draw", "Illustrator"],
                image: "9.JPG"
            },
            logo3: {
                title: "Home Decor",
                type: "logo",
                description: "I designed a cozy and inviting logo featuring a house roof and trees, symbolizing warmth, nature, and comfort. The clean, modern style reflects a perfect blend of elegance and homely charm for a home decor brand.",
                tools: ["Corel Draw", "Illustrator"],
                image: "10.jpg"
            },
            logo4: {
                title: "Tateng Hospitality",
                type: "logo",
                description: "I created a serene and welcoming logo for Tateng Hospitality, featuring majestic mountains and a tree to symbolize nature, tranquility, and growth. The elegant typography complements the scenic backdrop, reflecting the brand’s commitment to warm, eco-friendly hospitality.",
                tools: ["Corel Draw", "Illustrator"],
                image: "11.jpg"
            },
            logo5: {
                title: "Tateng Hospitality",
                type: "logo",
                description: "I gave Tateng Hospitality a fresh, minimalist look—replacing the mountains with a sleek tree inside a circular emblem, symbolizing unity and sustainability. The clean typography and balanced design reflect modern hospitality with a touch of organic warmth.",
                tools: ["Corel Draw", "Illustrator"],
                image: "12.jpg"
            },
            

            poster1: {
                title: "Avni Homestay",
                type: "poster",
                description: "I designed a cozy, inviting poster for Avni Homestay, featuring a stunning photo of the property surrounded by nature. The warm tones and clean typography highlight its rustic charm, creating a visual appeal that promises a peaceful retreat.",
                tools: ["Photoshop", "Corel Draw"],
                image: "1.jpg"
            },
            poster2: {
                title: "Ajay Pradhan",
                type: "poster",
                description: "I created a dynamic and professional poster for Ajay Pradhan. The design features bold typography, a sleek car graphic, and a confident tone to attract students seeking reliable and patient driving lessons.",
                tools: ["Photoshop", "Corel Draw"],
                image: "2.jpg"
            },
            poster3: {
                title: "Valley Queen Homestay",
                type: "banner",
                description: "I designed a cozy, inviting poster for Valley Queen Homestay, featuring a stunning photo of the property surrounded by nature. The warm tones and clean typography highlight its rustic charm, creating a visual appeal that promises a peaceful retreat.",
                tools: ["Photoshop", "Corel Draw"],
                image: "3.jpg"
            },
            poster4: {
                title: "Ebi's Homestay",
                type: "poster",
                description: "I designed a charming and minimalist poster for Ebi’s Homestay, featuring a clean graphic outline of a house, elegant typography for the name, and clear contact details. The design balances simplicity and warmth, inviting guests to a cozy, welcoming stay.",
                tools: ["Photoshop", "Corel Draw"],
                image: "4.jpg"
            },
            poster5: {
                title: "Football Association",
                type: "poster",
                description: "I designed an energetic poster for the Football Association, featuring an action shot of players and the town’s iconic backdrop. Bold typography and dynamic colors highlight the spirit of teamwork and local pride, perfect for promoting matches or community events.",
                tools: ["Photoshop", "Corel Draw"],
                image: "5.jpg"
            },
            poster6: {
                title: "Meals on Wheels",
                type: "banner",
                description: "I designed a lively poster for Meals on Wheels, featuring a car photo(hinting at delivery/takeaway) and a tempting list of food items. The bold colors, casual typography, and mouthwatering layout make it perfect for grabbing attention and showcasing their tasty, on-the-go meals.",
                tools: ["Photoshop", "Corel Draw"],
                image: "6.jpg"
            },
            poster7: {
                title: "Gairi Gaon",
                type: "poster",
                description: "I designed a vibrant, hunger-inducing poster for Gairi Gaon Fast Food, showcasing juicy close-ups of their signature dishes alongside a bold menu list. The rustic-meets-modern layout (hinting at the village charm) uses warm colors and playful fonts to tempt customers with quick, flavorful bites.",
                tools: ["Photoshop", "Corel Draw"],
                image: "7.jpg"
            }
        };


        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalType = document.getElementById('modal-type');
        const modalDescription = document.getElementById('modal-description');
        const modalTools = document.getElementById('modal-tools');
        const closeModal = document.querySelector('.close-modal');
        const designCards = document.querySelectorAll('.design-card');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const header = document.querySelector('header');


        function openModal(designId) {
            const design = designs[designId];
            if (design) {
                modalImage.src = design.image;
                modalTitle.textContent = design.title;
                modalDescription.textContent = design.description;
                

                modalType.textContent = design.type.charAt(0).toUpperCase() + design.type.slice(1);
                modalType.className = 'design-type ' + (design.type === 'logo' ? 'type-logo' : 'type-poster');
                

                modalTools.innerHTML = '';
                design.tools.forEach(tool => {
                    const toolElement = document.createElement('div');
                    toolElement.className = 'modal-tool';
                    toolElement.innerHTML = `<i class="${getToolIcon(tool)}"></i> ${tool}`;
                    modalTools.appendChild(toolElement);
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }


        function getToolIcon(toolName) {
            if (toolName.includes('Photoshop')) return 'fab fa-adobe';
            if (toolName.includes('Illustrator')) return 'fab fa-adobe';
            if (toolName.includes('Corel')) return 'fas fa-pen-fancy';
            return 'fas fa-tools';
        }


        function closeModalHandler() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }


        function filterDesigns(filter) {
            designCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }


        designCards.forEach(card => {
            card.addEventListener('click', () => {
                openModal(card.dataset.id);
            });
        });

        closeModal.addEventListener('click', closeModalHandler);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalHandler();
            }
        });

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterDesigns(button.dataset.filter);
            });
        });


        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        designCards.forEach(card => {
            observer.observe(card);
        });


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


        filterDesigns('all');


const toolCards = document.querySelectorAll('.tool-card');

toolCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.tool-inner').style.transform = 'rotateY(180deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.tool-inner').style.transform = 'rotateY(0)';
    });
});