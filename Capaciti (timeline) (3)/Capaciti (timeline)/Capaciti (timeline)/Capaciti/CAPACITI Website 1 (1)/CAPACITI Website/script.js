

document.addEventListener('DOMContentLoaded', function() { 

    initializeWebsite(); 

}); 

function initializeWebsite() { 

    setupSmoothScrolling(); 

    setupScrollToTop(); 

    setupChatbot(); 

    populateContent(); 

    setupForms(); 

    setupFilters(); 

    setupAnimations(); 

} 

// Smooth Scrolling for Anchor Links 

function setupSmoothScrolling() { 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => { 

        anchor.addEventListener('click', function (e) { 

            e.preventDefault(); 

            const target = document.querySelector(this.getAttribute('href')); 

            if (target) { 

                target.scrollIntoView({ 

                    behavior: 'smooth', 

                    block: 'start' 

                }); 

            } 

        }); 

    }); 

} 

 

// Scroll to Top Functionality 

function setupScrollToTop() { 

    const scrollBtn = document.getElementById('scrollToTop'); 

     

    window.addEventListener('scroll', function() { 

        if (window.pageYOffset > 300) { 

            scrollBtn.classList.remove('d-none'); 

        } else { 

            scrollBtn.classList.add('d-none'); 

        } 

    }); 

     

    scrollBtn.addEventListener('click', scrollToTop); 

} 

function scrollToTop() { 

    window.scrollTo({ 

        top: 0, 

        behavior: 'smooth' 

    }); 

} 

// Chatbot Functionality 

function setupChatbot() { 

    const chatbotToggle = document.getElementById('chatbotToggle'); 

    const chatbotContainer = document.getElementById('chatbotContainer'); 

    const chatbotClose = document.getElementById('chatbotClose'); 

    const chatInput = document.getElementById('chatInput'); 

    const chatSend = document.getElementById('chatSend'); 

    const chatMessages = document.getElementById('chatMessages'); 

    const quickReplies = document.querySelectorAll('.quick-reply'); 

     

    chatbotToggle.addEventListener('click', function() { 

        chatbotContainer.classList.toggle('d-none'); 

        chatbotToggle.classList.toggle('d-none'); 

    }); 

     

    chatbotClose.addEventListener('click', function() { 

        chatbotContainer.classList.add('d-none'); 

        chatbotToggle.classList.remove('d-none'); 

    }); 

     

    chatSend.addEventListener('click', sendMessage); 

    chatInput.addEventListener('keypress', function(e) { 

        if (e.key === 'Enter') { 

            sendMessage(); 

        } 

    }); 

     

    quickReplies.forEach(btn => { 

        btn.addEventListener('click', function() { 

            sendMessage(this.textContent); 

        }); 

    }); 

     

    function sendMessage(message = null) { 

        const text = message || chatInput.value.trim(); 

        if (!text) return; 

        // Add user message 

        addChatMessage(text, 'user'); 

        chatInput.value = ''; 

         

        // Hide quick replies after first interaction 

        const quickRepliesContainer = document.getElementById('quickReplies'); 

        if (chatMessages.children.length > 1) { 

            quickRepliesContainer.style.display = 'none'; 

        } 

     // Simulate bot response 

        setTimeout(() => { 

            const response = getBotResponse(text); 

            addChatMessage(response, 'bot'); 

        }, 1000); 

    } 

    function addChatMessage(text, sender) { 

        const messageDiv = document.createElement('div'); 

        messageDiv.className = `d-flex mb-3 ${sender === 'user' ? 'justify-content-end' : ''}`; 

         

        const bubble = document.createElement('div'); 

        bubble.className = `p-2 rounded small ${sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`; 

        bubble.style.maxWidth = '80%'; 

         

        if (sender === 'bot') { 

            bubble.innerHTML = `<div class="d-flex align-items-start"><i class="bi bi-robot me-2 mt-1"></i><span>${text}</span></div>`; 

        } else { 

            bubble.innerHTML = `<div class="d-flex align-items-start"><i class="bi bi-person me-2 mt-1"></i><span>${text}</span></div>`; 

        } 

         

        messageDiv.appendChild(bubble); 

        chatMessages.appendChild(messageDiv); 

        chatMessages.scrollTop = chatMessages.scrollHeight; 

    } 

     

    function getBotResponse(userMessage) { 

        const lowerMessage = userMessage.toLowerCase(); 

         

        if (lowerMessage.includes('programme') || lowerMessage.includes('course')) { 

            return "We offer 6 comprehensive tech programmes: Full Stack Development, Data Science & Analytics, UX/UI Design, Digital Marketing, Cloud Computing, and Cybersecurity. Each programme is designed to be job-ready and includes industry mentorship. Would you like details about a specific programme?"; 

        } 

         

        if (lowerMessage.includes('apply') || lowerMessage.includes('application')) { 

            return "To apply for our programmes, click on 'Work With Us' in our header or visit our Opportunities section. You'll be redirected to our application portal where you can view current openings and submit your application."; 

        } 

         

        if (lowerMessage.includes('requirement') || lowerMessage.includes('qualify')) { 

            return "Requirements vary by programme, but generally include: basic computer literacy, problem-solving mindset, and commitment to full-time study. Some programmes have specific prerequisites like mathematical foundation for Data Science."; 

        } 

         

        if (lowerMessage.includes('contact') || lowerMessage.includes('location')) { 

            return "You can reach us at hello@capaciti.org.za or +27 (0) 21 003 7509. Our main office is located in Greenacres, Gqeberha, Eastern Cape. We also have training centers in multiple provinces across South Africa."; 

        } 

         

        if (lowerMessage.includes('cost') || lowerMessage.includes('fee')) { 

            return "Our programmes are designed to be accessible. Many courses are offered at subsidized rates or through partnerships with funding organizations. Please contact us directly to discuss funding options."; 

        } 

         

        return "Thank you for your question! For detailed information, I recommend contacting our team directly at hello@capaciti.org.za or exploring our website sections."; 

    } 

} 

 

// Populate Dynamic Content 

function populateContent() { 

    populateTeamMembers(); 

    populatePartners(); 

    populateMetrics(); 

    populateSuccessStories(); 

    populateProgrammes(); 

    populateBlogPosts(); 

    populateEvents(); 

    populateNews(); 

    populateLocations(); 

    populateSponsorMetrics(); 

    populateSponsorshipTiers(); 

    populateCurrentPartners(); 

    populateJobListings(); 

    populateSocialLinks(); 

} 

 

function populateTeamMembers() { 

    const teamMembers = [ 

        { 

            name: "Chanél Oldfield", 

            role: "Head Of CAPACITI", 

            image: "Chanel11.JPG", 

            initials: "CO", 

            description: "An experienced and empathetic leader with a strong focus on emotional intelligence, values based leadership, and systems thinking to bring together multidisciplinary teams.", 

            linkedin: "https://www.linkedin.com/in/chaneloldfield/" 

        }, 

        { 

            name: "Kelly Maroon", 

            role: "Head of Career Education", 

            image: "Kelly1.JPG", 

            initials: "KM", 

            description: "I've been in the education industry for over 14 years, with extensive experience in the development of fit-for-purpose educational, technological and collaborative solutions.", 

            linkedin: "https://www.linkedin.com/in/kelly-m-655249158/" 

        }, 

        { 

            name: "Nasheeta Du Toit", 

            role: "Head of Brand", 

            image: "Nash4.JPG", 

            initials: "ND", 

            description: "Seasoned Marketer & Communication Specialist, with experience in advertising, marketing, financial services and publishing fields.", 

            linkedin: "https://www.linkedin.com/in/nasheeta-du-toit-90641039/" 

        }, 

        { 

            name: "Chesarae K Pillay", 

            role: "Partnerships Lead", 

            image: "Chesarae3.JPG", 

            initials: "CP", 

            description: "Building strategic relationships with industry leaders and educational institutions.", 

            linkedin: "https://www.linkedin.com/in/chesarae/" 

        } 

    ]; 

     

    const container = document.getElementById('teamContainer'); 

    container.innerHTML = teamMembers.map(member => ` 

        <div class="col-md-6 col-lg-3"> 

            <div class="card team-card h-100 shadow-sm"> 

                <img src="${member.image}" class="card-img-top" alt="${member.name}"> 

                <div class="card-body text-center"> 

                    <h5 class="card-title fw-bold">${member.name}</h5> 

                    <p class="card-text text-primary mb-3">${member.role}</p> 

                    <p class="card-text text-muted">${member.description}</p> 

                    <a href="${member.linkedin}" target="_blank" class="text-primary" rel="noopener noreferrer"> 

                        <i class="bi bi-linkedin fs-4"></i> 

                    </a> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

 

function populatePartners() { 
    const container = document.getElementById('partnersContainer'); 
    container.innerHTML = `
        <div class="w-100 p-0 m-0">
            <img src="partner.png" alt="Partner logo" style="width: 100%; height: auto; display: block;" />
        </div>
    `;
} 

 

function populateMetrics() {  

    const metrics = [ 

        { icon: "mortarboard", value: "2,500+", label: "Graduates", color: "primary" }, 

        { icon: "briefcase", value: "89%", label: "Employment Rate", color: "warning" }, 

        { icon: "building", value: "150+", label: "Partner Companies", color: "success" }, 

        { icon: "geo-alt", value: "9", label: "Provinces Reached", color: "info" } 

    ]; 

     

    const container = document.getElementById('metricsContainer'); 

    container.innerHTML = metrics.map(metric => ` 

        <div class="col-md-6 col-lg-3 text-center"> 

            <div class="bg-${metric.color} text-white rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;"> 

                <i class="bi bi-${metric.icon}" style="font-size: 2rem;"></i> 

            </div> 

            <div class="display-6 fw-bold text-secondary">${metric.value}</div> 

            <div class="text-muted fw-medium">${metric.label}</div> 

        </div> 

    `).join(''); 

} 

 

function populateSuccessStories() { 

    const stories = [ 

        { 

            title: "From Unemployed to Software Engineer", 

            quote: "CAPACITI changed my life completely. I went from being unemployed for 2 years to landing a software engineering role at a leading fintech company.", 

            name: "Thabo Mthembu", 

            role: "Full Stack Developer at TechCorp", 

            initials: "TM", 

            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 

        }, 

        { 

            title: "Career Pivot Success", 

            quote: "After 10 years in retail, I decided to pivot to tech. CAPACITI's UX/UI program gave me the skills and confidence to transition into a design role.", 

            name: "Nomsa Khumalo", 

            role: "UX Designer at ShopSmart", 

            initials: "NK", 

            image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 

        } 

    ]; 

     

    const container = document.getElementById('successStoriesContainer'); 

    container.innerHTML = stories.map(story => ` 

        <div class="col-lg-6"> 

            <div class="row align-items-center g-4"> 

                <div class="col-md-5"> 

                    <img src="${story.image}" alt="${story.title}" class="img-fluid rounded-3 shadow"> 

                </div> 

                <div class="col-md-7"> 

                    <h4 class="h3 fw-bold text-secondary mb-3">${story.title}</h4> 

                    <blockquote class="text-muted mb-4">"${story.quote}"</blockquote> 

                    <div class="d-flex align-items-center"> 

                        <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;"> 

                            <span class="fw-bold">${story.initials}</span> 

                        </div> 

                        <div> 

                            <div class="fw-bold text-secondary">${story.name}</div> 

                            <div class="text-muted small">${story.role}</div> 

                        </div> 

                    </div> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 
function populateProgrammes() {
    const programmes = [
        {
            id: "fullstack",
            title: "Full Stack Development",
            category: "development",
            duration: "12 weeks",
            description: "Master modern web development with React, Node.js, and database technologies.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "245 graduates",
            placementRate: "89% placement rate",
            badgeColor: "primary"
        },
        {
            id: "datascience",
            title: "Data Science & Analytics",
            category: "data",
            duration: "16 weeks",
            description: "Learn Python, machine learning, and data visualization to solve business problems.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "156 graduates",
            placementRate: "92% placement rate",
            badgeColor: "warning"
        },
        {
            id: "uxui",
            title: "UX/UI Design",
            category: "design",
            duration: "10 weeks",
            description: "Create intuitive digital experiences through user research and design thinking.",
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "189 graduates",
            placementRate: "85% placement rate",
            badgeColor: "info"
        },
        {
            id: "digital",
            title: "Digital Marketing",
            category: "digital",
            duration: "8 weeks",
            description: "Master SEO, social media marketing, and analytics to drive business growth.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "298 graduates",
            placementRate: "91% placement rate",
            badgeColor: "success"
        },
        {
            id: "cloud",
            title: "Cloud Computing",
            category: "development",
            duration: "14 weeks",
            description: "Learn AWS, Azure, and Google Cloud with containerization and security.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "134 graduates",
            placementRate: "94% placement rate",
            badgeColor: "primary"
        },
        {
            id: "cyber",
            title: "Cybersecurity",
            category: "security",
            duration: "12 weeks",
            description: "Protect digital assets through ethical hacking and security protocols.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            graduates: "87 graduates",
            placementRate: "96% placement rate",
            badgeColor: "danger"
        }
    ];
   
    // Populate filters
    const categories = [
        { id: "all", label: "All Programmes" },
        { id: "development", label: "Development" },
        { id: "data", label: "Data Science" },
        { id: "design", label: "Design" },
        { id: "digital", label: "Digital Marketing" },
        { id: "security", label: "Security" }
    ];
   
    const filtersContainer = document.getElementById('programmeFilters');
    filtersContainer.innerHTML = categories.map(category => `
        <button class="btn ${category.id === 'all' ? 'btn-primary' : 'btn-outline-primary'} programme-filter" data-category="${category.id}">
            ${category.label}
        </button>
    `).join('');
   
    // Populate programmes
    const container = document.getElementById('programmesContainer');
    window.allProgrammes = programmes; // Store globally for filtering
    renderProgrammes(programmes);
   
    // Setup filter functionality
    document.querySelectorAll('.programme-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
           
            // Update active button
            document.querySelectorAll('.programme-filter').forEach(b => {
                b.className = 'btn btn-outline-primary programme-filter';
            });
            this.className = 'btn btn-primary programme-filter';
           
            // Filter programmes
            const filtered = category === 'all' ? programmes : programmes.filter(p => p.category === category);
            renderProgrammes(filtered);
        });
    });
}
 
function renderProgrammes(programmes) {
    const container = document.getElementById('programmesContainer');
    container.innerHTML = programmes.map(programme => `
        <div class="col-md-6 col-lg-4">
            <div class="card programme-card h-100 shadow-sm">
                <img src="${programme.image}" class="card-img-top" alt="${programme.title}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="badge bg-${programme.badgeColor}">${programme.title.split(' ')[0]}</span>
                        <small class="text-muted">
                            <i class="bi bi-clock me-1"></i>${programme.duration}
                        </small>
                    </div>
                    <h5 class="card-title fw-bold">${programme.title}</h5>
                    <p class="card-text text-muted">${programme.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <small class="text-muted">
                            <i class="bi bi-people me-1"></i>${programme.graduates}
                        </small>
                        <small class="text-success fw-medium">${programme.placementRate}</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

}

    // Populate programmes 

    const container = document.getElementById('programmesContainer'); 

    window.allProgrammes = programmes; // Store globally for filtering 

    renderProgrammes(programmes); 

     

    // Setup filter functionality 

    document.querySelectorAll('.programme-filter').forEach(btn => { 

        btn.addEventListener('click', function() { 

            const category = this.dataset.category; 

             

            // Update active button 

            document.querySelectorAll('.programme-filter').forEach(b => { 

                b.className = 'btn btn-outline-primary programme-filter'; 

            }); 

            this.className = 'btn btn-primary programme-filter'; 

             

            // Filter programmes 

            const filtered = category === 'all' ? programmes : programmes.filter(p => p.category === category); 

            renderProgrammes(filtered); 

        }); 

    }); 
 

function renderProgrammes(programmes) { 

    const container = document.getElementById('programmesContainer'); 

    container.innerHTML = programmes.map(programme => ` 

        <div class="col-md-6 col-lg-4"> 

            <div class="card programme-card h-100 shadow-sm"> 

                <img src="${programme.image}" class="card-img-top" alt="${programme.title}"> 

                <div class="card-body"> 

                    <div class="d-flex justify-content-between align-items-center mb-3"> 

                        <span class="badge bg-${programme.badgeColor}">${programme.title.split(' ')[0]}</span> 

                        <small class="text-muted"> 

                            <i class="bi bi-clock me-1"></i>${programme.duration} 

                        </small> 

                    </div> 

                    <h5 class="card-title fw-bold">${programme.title}</h5> 

                    <p class="card-text text-muted">${programme.description}</p> 

                    <div class="d-flex justify-content-between align-items-center mt-auto"> 

                        <small class="text-muted"> 

                            <i class="bi bi-people me-1"></i>${programme.graduates} 

                        </small> 

                        <small class="text-success fw-medium">${programme.placementRate}</small> 

                    </div> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateBlogPosts() { 

    const posts = [ 

        { 

            title: "5 Essential Skills for Landing Your First Tech Job", 

            excerpt: "Discover the key technical and soft skills that employers are looking for in entry-level tech positions.", 

            image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            category: "Career Tips", 

            date: "Dec 15, 2023", 

            author: "Sarah Adams", 

            readTime: "5 min read" 

        }, 

        { 

            title: "The Future of AI in South African Tech Industry", 

            excerpt: "Exploring how artificial intelligence is reshaping the local tech landscape and creating new opportunities.", 

            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            category: "Tech Trends", 

            date: "Dec 12, 2023", 

            author: "Michael Chen", 

            readTime: "8 min read" 

        }, 

        { 

            title: "From Retail to Data Science: Lerato's Journey", 

            excerpt: "Follow Lerato's inspiring transformation from retail manager to data scientist with CAPACITI's program.", 

            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            category: "Success Story", 

            date: "Dec 10, 2023", 

            author: "Lerato Mokwena", 

            readTime: "6 min read" 

        } 

    ]; 

     

    const container = document.getElementById('blogContainer'); 

    container.innerHTML = posts.map(post => ` 

        <div class="col-md-6 col-lg-4"> 

            <div class="card blog-card h-100 shadow-sm"> 

                <img src="${post.image}" class="card-img-top" alt="${post.title}"> 

                <div class="card-body"> 

                    <div class="d-flex justify-content-between align-items-center mb-3"> 

                        <span class="badge bg-primary">${post.category}</span> 

                        <small class="text-muted">${post.date}</small> 

                    </div> 

                    <h5 class="card-title fw-bold">${post.title}</h5> 

                    <p class="card-text text-muted">${post.excerpt}</p> 

                    <div class="d-flex justify-content-between align-items-center mt-auto"> 

                        <small class="text-muted">${post.author}</small> 

                        <small class="text-muted"> 

                            <i class="bi bi-clock me-1"></i>${post.readTime} 

                        </small> 

                    </div> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateEvents() { 

    const events = [ 

        { 

            date: "JAN 25", 

            year: "2024", 

            type: "Networking", 

            title: "Tech Careers Expo 2024", 

            description: "Connect with leading tech companies, explore career opportunities, and network with industry professionals.", 

            location: "Cape Town International Convention Centre", 

            time: "9:00 AM - 5:00 PM", 

            gradient: "gradient-purple" 

        }, 

        { 

            date: "FEB 08", 

            year: "2024", 

            type: "Workshop", 

            title: "AI & Machine Learning Workshop", 

            description: "Hands-on workshop covering the fundamentals of AI and machine learning for beginners and intermediate learners.", 

            location: "CAPACITI Training Center, Johannesburg", 

            time: "2:00 PM - 6:00 PM", 

            gradient: "gradient-salmon" 

        } 

    ]; 

     

    const container = document.getElementById('eventsContainer'); 

    container.innerHTML = events.map(event => ` 

        <div class="col-md-6"> 

            <div class="card event-card ${event.gradient} text-white h-100"> 

                <div class="card-body p-4"> 

                    <div class="d-flex justify-content-between align-items-start mb-3"> 

                        <div> 

                            <div class="h4 fw-bold text-warning">${event.date}</div> 

                            <div class="small opacity-75">${event.year}</div> 

                        </div> 

                        <span class="badge bg-white bg-opacity-20">${event.type}</span> 

                    </div> 

                    <h4 class="card-title fw-bold mb-3">${event.title}</h4> 

                    <p class="card-text opacity-90 mb-3">${event.description}</p> 

                    <div class="mb-2"> 

                        <i class="bi bi-geo-alt me-2"></i> 

                        <small>${event.location}</small> 

                    </div> 

                    <div class="mb-3"> 

                        <i class="bi bi-clock me-2"></i> 

                        <small>${event.time}</small> 

                    </div> 

                    <button class="btn btn-light">Register Now</button> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateNews() { 

    const news = [ 

        { 

            date: "December 18, 2023", 

            title: "CAPACITI Partners with Major Banking Group", 

            excerpt: "New partnership will create 200+ internship opportunities for graduates in fintech and digital banking sectors." 

        }, 

        { 

            date: "December 15, 2023", 

            title: "New Cybersecurity Program Launched", 

            excerpt: "Addressing the growing demand for cybersecurity professionals with a comprehensive 12-week certification program." 

        }, 

        { 

            date: "December 12, 2023", 

            title: "CAPACITI Wins Innovation Award", 

            excerpt: "Recognized for excellence in digital skills development at the South African Tech Innovation Awards 2023." 

        } 

    ]; 

     

    const container = document.getElementById('newsContainer'); 

    container.innerHTML = news.map(item => ` 

        <div class="col-md-4"> 

            <div class="card bg-light h-100"> 

                <div class="card-body"> 

                    <div class="text-muted small mb-2"> 

                        <i class="bi bi-calendar me-1"></i>${item.date} 

                    </div> 

                    <h5 class="card-title fw-bold text-secondary">${item.title}</h5> 

                    <p class="card-text text-muted small">${item.excerpt}</p> 

                    <a href="#" class="text-primary text-decoration-none small fw-medium"> 

                        Read More <i class="bi bi-arrow-right ms-1"></i> 

                    </a> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateLocations() { 

    const locations = [ 

        { 

            name: "CAPACITI Cape Town", 

            address: "123 Adderley Street, Cape Town City Centre, Cape Town, 8001", 

            phone: "+27 (0) 21 003 7509", 

            hours: "Mon-Fri: 8:00 AM - 6:00 PM", 

            programs: ["Full Stack Development", "UX/UI Design", "Digital Marketing"], 

            capacity: "120 students", 

            image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            isMain: false 

        }, 

        { 

            name: "CAPACITI Johannesburg", 

            address: "45 Commissioner Street, Johannesburg CBD, Johannesburg, 2001", 

            phone: "+27 (0) 11 123 4567", 

            hours: "Mon-Fri: 8:00 AM - 6:00 PM", 

            programs: ["Data Science", "Cloud Computing", "Cybersecurity"], 

            capacity: "150 students", 

            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            isMain: false 

        }, 

        { 

            name: "CAPACITI Gqeberha (Main Campus)", 

            address: "Greenacres, Gqeberha, Eastern Cape, 6001", 

            phone: "+27 (0) 41 555 0123", 

            hours: "Mon-Fri: 8:00 AM - 6:00 PM", 

            programs: ["All Programmes", "Corporate Training", "Skills Development"], 

            capacity: "200 students", 

            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            isMain: true 

        }, 

        { 

            name: "CAPACITI Durban", 

            address: "78 Anton Lembede Street, Durban Central, Durban, 4001", 

            phone: "+27 (0) 31 987 6543", 

            hours: "Mon-Fri: 8:00 AM - 6:00 PM", 

            programs: ["Full Stack Development", "Data Science", "Digital Marketing"], 

            capacity: "100 students", 

            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 

            isMain: false 

        } 

    ]; 

     

    const container = document.getElementById('locationsContainer'); 

    container.innerHTML = locations.map(location => ` 

        <div class="col-md-6"> 

            <div class="card location-card h-100 ${location.isMain ? 'border-primary border-2' : ''}"> 

                <div class="position-relative"> 

                    <img src="${location.image}" class="card-img-top" alt="${location.name}" style="height: 200px; object-fit: cover;"> 

                    ${location.isMain ? '<div class="position-absolute top-0 start-0 m-3"><span class="badge bg-primary">Main Campus</span></div>' : ''} 

                </div> 

                <div class="card-body"> 

                    <h5 class="card-title fw-bold text-secondary">${location.name}</h5> 

                    <div class="mb-3"> 

                        <div class="mb-2"> 

                            <i class="bi bi-geo-alt text-primary me-2"></i> 

                            <small class="text-muted">${location.address}</small> 

                        </div> 

                        <div class="mb-2"> 

                            <i class="bi bi-telephone text-warning me-2"></i> 

                            <small class="text-muted">${location.phone}</small> 

                        </div> 

                        <div class="mb-2"> 

                            <i class="bi bi-clock text-success me-2"></i> 

                            <small class="text-muted">${location.hours}</small> 

                        </div> 

                        <div class="mb-3"> 

                            <i class="bi bi-people text-info me-2"></i> 

                            <small class="text-muted">${location.capacity}</small> 

                        </div> 

                    </div> 

                    <div class="mb-3"> 

                        <h6 class="fw-semibold text-secondary">Available Programmes:</h6> 

                        <div class="d-flex flex-wrap gap-1"> 

                            ${location.programs.map(program => `<span class="badge bg-light text-muted small">${program}</span>`).join('')} 

                        </div> 

                    </div> 

                    <div class="d-flex gap-2"> 

                        <button class="btn btn-outline-primary btn-sm flex-fill" onclick="openGoogleMaps('${location.name}', '${location.address}')"> 

                            <i class="bi bi-geo-alt me-1"></i>View on Map 

                        </button> 

                        <button class="btn btn-primary btn-sm flex-fill" onclick="getDirections('${location.name}')"> 

                            <i class="bi bi-arrow-up-right me-1"></i>Get Directions 

                        </button> 

                    </div> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateSponsorMetrics() { 

    const metrics = [ 

        { icon: "people", value: "2,500+", label: "Graduates Trained", description: "Ready-to-work tech professionals" }, 

        { icon: "building", value: "150+", label: "Partner Companies", description: "Successful hiring partnerships" }, 

        { icon: "bullseye", value: "89%", label: "Employment Rate", description: "Within 6 months of graduation" }, 

        { icon: "graph-up", value: "95%", label: "Partner Satisfaction", description: "Would recommend our graduates" } 

    ]; 

     

    const container = document.getElementById('sponsorMetricsContainer'); 

    container.innerHTML = metrics.map(metric => ` 

        <div class="col-md-6 col-lg-3"> 

            <div class="card text-center h-100"> 

                <div class="card-body"> 

                    <div class="bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style="width: 64px; height: 64px;"> 

                        <i class="bi bi-${metric.icon}" style="font-size: 1.5rem;"></i> 

                    </div> 

                    <div class="h2 fw-bold text-secondary">${metric.value}</div> 

                    <div class="h5 fw-semibold text-secondary mb-1">${metric.label}</div> 

                    <div class="small text-muted">${metric.description}</div> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateSponsorshipTiers() { 

    const tiers = [ 

        { 

            name: "Platinum Partner", 

            price: "R 500,000+", 

            color: "gradient-purple", 

            features: [ 

                "Brand placement on all marketing materials", 

                "Exclusive naming rights to programmes", 

                "Direct access to graduate talent pool", 

                "Custom corporate training programmes", 

                "Quarterly partnership reviews", 

                "Speaking opportunities at events" 

            ], 

            benefits: "Full partnership with maximum visibility and talent access", 

            popular: true 

        }, 

        { 

            name: "Gold Partner", 

            price: "R 250,000+", 

            color: "gradient-salmon", 

            features: [ 

                "Logo placement on website and materials", 

                "Priority access to graduate candidates", 

                "Mentorship programme participation", 

                "Event speaking opportunities", 

                "Quarterly talent showcases", 

                "Partnership certificate and recognition" 

            ], 

            benefits: "Strong partnership with excellent talent pipeline access", 

            popular: false 

        }, 

        { 

            name: "Silver Partner", 

            price: "R 100,000+", 

            color: "gradient-pink", 

            features: [ 

                "Website logo placement", 

                "Access to graduate database", 

                "Annual talent showcase invitation", 

                "Partnership recognition", 

                "Newsletter feature opportunities", 

                "Event participation discounts" 

            ], 

            benefits: "Solid partnership with talent access and recognition", 

            popular: false 

        } 

    ]; 

     

    const container = document.getElementById('sponsorshipTiersContainer'); 

    container.innerHTML = tiers.map(tier => ` 

        <div class="col-lg-4"> 

            <div class="card sponsorship-tier h-100 ${tier.popular ? 'featured' : ''}"> 

                ${tier.popular ? '<div class="position-absolute top-0 start-50 translate-middle"><span class="badge bg-primary px-3 py-2">Most Popular</span></div>' : ''} 

                <div class="card-body p-4"> 

                    <div class="${tier.color} text-white rounded d-inline-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px;"> 

                        <i class="bi bi-award"></i> 

                    </div> 

                    <h4 class="card-title fw-bold text-secondary">${tier.name}</h4> 

                    <div class="h2 fw-bold text-primary mb-2">${tier.price}</div> 

                    <p class="text-muted mb-4">${tier.benefits}</p> 

                    <ul class="list-unstyled mb-4"> 

                        ${tier.features.map(feature => ` 

                            <li class="mb-2"> 

                                <i class="bi bi-check-circle text-success me-2"></i> 

                                <span class="text-muted">${feature}</span> 

                            </li> 

                        `).join('')} 

                    </ul> 

                    <button class="btn ${tier.color} text-white w-100" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})"> 

                        Get Started 

                    </button> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateCurrentPartners() { 

    const partners = ["Microsoft", "AWS", "Google", "Standard Bank", "Discovery", "Vodacom", "MTN", "Nedbank", "Capitec", "FNB"]; 

    const container = document.getElementById('currentPartnersContainer'); 

     

    container.innerHTML = partners.map(partner => ` 

        <div class="col-6 col-md-4 col-lg-2"> 

            <div class="card p-3 h-100"> 

                <div class="bg-light rounded d-flex align-items-center justify-content-center" style="height: 64px;"> 

                    <span class="text-muted fw-semibold">${partner}</span> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateJobListings() { 

    const jobs = [ 

        { 

            id: 1, 

            title: "Senior Program Manager", 

            company: "CAPACITI", 

            location: "Cape Town", 

            type: "Full-time", 

            category: "management", 

            salary: "R450,000 - R600,000", 

            experience: "5+ years", 

            description: "Lead and manage multiple training programmes, oversee curriculum development, and ensure programme quality and student success.", 

            requirements: ["Programme management experience", "Educational background", "Leadership skills", "Stakeholder management"], 

            posted: "2 days ago", 

            applications: 24, 

            deadline: "2024-02-15" 

        }, 

        { 

            id: 2, 

            title: "Full Stack Development Instructor", 

            company: "CAPACITI", 

            location: "Johannesburg", 

            type: "Full-time", 

            category: "training", 

            salary: "R300,000 - R420,000", 

            experience: "3+ years", 

            description: "Teach modern web development technologies, mentor students, and contribute to curriculum development for our Full Stack programme.", 

            requirements: ["React & Node.js expertise", "Teaching experience", "Industry experience", "Communication skills"], 

            posted: "5 days ago", 

            applications: 18, 

            deadline: "2024-02-20" 

        }, 

        { 

            id: 3, 

            title: "Partnership Development Manager", 

            company: "CAPACITI", 

            location: "Cape Town", 

            type: "Full-time", 

            category: "management", 

            salary: "R380,000 - R520,000", 

            experience: "4+ years", 

            description: "Develop and maintain strategic partnerships with industry, manage sponsor relationships, and drive business development.", 

            requirements: ["Business development", "Relationship management", "Strategic thinking", "Negotiation skills"], 

            posted: "1 day ago", 

            applications: 8, 

            deadline: "2024-02-18" 

        }, 

        { 

            id: 4, 

            title: "Digital Marketing Specialist", 

            company: "CAPACITI", 

            location: "Gqeberha", 

            type: "Full-time", 

            category: "marketing", 

            salary: "R280,000 - R380,000", 

            experience: "2+ years", 

            description: "Manage digital marketing campaigns, social media presence, and content marketing to promote CAPACITI programmes.", 

            requirements: ["Digital marketing experience", "Social media management", "Content creation", "Analytics skills"], 

            posted: "4 days ago", 

            applications: 22, 

            deadline: "2024-02-22" 

        } 

    ]; 

     

    window.allJobs = jobs; // Store globally for filtering 

    renderJobListings(jobs); 

} 

 

function renderJobListings(jobs) { 

    const container = document.getElementById('jobListingsContainer'); 

    container.innerHTML = jobs.map(job => ` 

        <div class="card job-listing mb-4"> 

            <div class="card-body"> 

                <div class="d-flex justify-content-between align-items-start mb-3"> 

                    <div class="flex-grow-1"> 

                        <div class="d-flex align-items-center gap-3 mb-2"> 

                            <h5 class="card-title fw-bold text-secondary mb-0">${job.title}</h5> 

                            <span class="badge bg-primary">${job.type}</span> 

                            ${job.applications < 10 ? '<span class="badge bg-success">Low competition</span>' : ''} 

                        </div> 

                        <div class="d-flex flex-wrap gap-3 text-muted mb-2"> 

                            <span><i class="bi bi-building me-1"></i>${job.company}</span> 

                            <span><i class="bi bi-geo-alt me-1"></i>${job.location}</span> 

                            <span><i class="bi bi-currency-dollar me-1"></i>${job.salary}</span> 

                            <span><i class="bi bi-people me-1"></i>${job.experience}</span> 

                        </div> 

                    </div> 

                    <div class="text-end"> 

                        <div class="small text-muted">${job.posted}</div> 

                        <div class="small text-muted">${job.applications} applications</div> 

                    </div> 

                </div> 

                 

                <p class="card-text text-muted">${job.description}</p> 

                 

                <div class="mb-3"> 

                    <h6 class="fw-semibold text-secondary">Key Requirements:</h6> 

                    <div class="d-flex flex-wrap gap-2"> 

                        ${job.requirements.map(req => `<span class="badge bg-light text-muted">${req}</span>`).join('')} 

                    </div> 

                </div> 

                 

                <div class="d-flex justify-content-between align-items-center"> 

                    <div class="text-muted small"> 

                        <i class="bi bi-clock me-1"></i>Deadline: ${job.deadline} 

                    </div> 

                    <button class="btn gradient-purple text-white" onclick="applyForJob(${job.id})"> 

                        <i class="bi bi-box-arrow-up-right me-2"></i>Apply Now 

                    </button> 

                </div> 

            </div> 

        </div> 

    `).join(''); 

} 

 

function populateSocialLinks() { 

    const socialLinks = [ 

        { platform: "Facebook", url: "https://facebook.com/capaciti", icon: "facebook", class: "social-facebook" }, 

        { platform: "Twitter", url: "https://twitter.com/capaciti", icon: "twitter", class: "social-twitter" }, 

        { platform: "LinkedIn", url: "https://linkedin.com/company/capaciti", icon: "linkedin", class: "social-linkedin" }, 

        { platform: "Instagram", url: "https://instagram.com/capaciti", icon: "instagram", class: "social-instagram" }, 

        { platform: "YouTube", url: "https://youtube.com/capaciti", icon: "youtube", class: "social-youtube" } 

    ]; 

     

    // Contact section social links 

    const contactContainer = document.getElementById('socialLinksContainer'); 

    contactContainer.innerHTML = socialLinks.map(social => ` 

        <a href="${social.url}" target="_blank" rel="noopener noreferrer"  

           class="social-icon ${social.class}"  

           aria-label="Follow us on ${social.platform}"> 

            <i class="bi bi-${social.icon}"></i> 

        </a> 

    `).join(''); 

     

    // Footer social links 

    const footerContainer = document.getElementById('footerSocialLinks'); 

    footerContainer.innerHTML = socialLinks.map(social => ` 

        <a href="${social.url}" target="_blank" rel="noopener noreferrer"  

           class="text-light"  

           aria-label="Follow us on ${social.platform}"> 

            <i class="bi bi-${social.icon} fs-5"></i> 

        </a> 

    `).join(''); 

} 

 

// Form Handling 

function setupForms() { 

    setupContactForm(); 

    setupNewsletterForm(); 

} 

 

function setupContactForm() { 

    const form = document.getElementById('contactForm'); 

    form.addEventListener('submit', function(e) { 

        e.preventDefault(); 

         

        const formData = { 

            firstName: document.getElementById('firstName').value, 

            lastName: document.getElementById('lastName').value, 

            email: document.getElementById('email').value, 

            phone: document.getElementById('phone').value, 

            subject: document.getElementById('subject').value, 

            message: document.getElementById('message').value, 

            newsletter: document.getElementById('newsletter').checked 

        }; 

         

        // Show loading state 

        const submitBtn = form.querySelector('button[type="submit"]'); 

        const btnText = submitBtn.querySelector('.btn-text'); 

        const btnLoading = submitBtn.querySelector('.btn-loading'); 

         

        btnText.classList.add('d-none'); 

        btnLoading.classList.remove('d-none'); 

        submitBtn.disabled = true; 

         

        // Simulate API call 

        setTimeout(() => { 

            showToast('Success', 'Message sent successfully! We\'ll get back to you soon.', 'success'); 

            form.reset(); 

             

            // Reset button state 

            btnText.classList.remove('d-none'); 

            btnLoading.classList.add('d-none'); 

            submitBtn.disabled = false; 

        }, 2000); 

    }); 

} 

 

function setupNewsletterForm() { 

    const form = document.getElementById('newsletterForm'); 

    form.addEventListener('submit', function(e) { 

        e.preventDefault(); 

         

        const email = document.getElementById('newsletterEmail').value; 

         

        // Show loading state 

        const submitBtn = form.querySelector('button[type="submit"]'); 

        const btnText = submitBtn.querySelector('.btn-text'); 

        const btnLoading = submitBtn.querySelector('.btn-loading'); 

         

        btnText.classList.add('d-none'); 

        btnLoading.classList.remove('d-none'); 

        submitBtn.disabled = true; 

         

        // Simulate API call 

        setTimeout(() => { 

            showToast('Subscribed', 'Thank you for subscribing to our newsletter!', 'success'); 

            form.reset(); 

             

            // Reset button state 

            btnText.classList.remove('d-none'); 

            btnLoading.classList.add('d-none'); 

            submitBtn.disabled = false; 

        }, 1500); 

    }); 

} 

 

// Filter Functionality 

function setupFilters() { 

    setupJobFilters(); 

} 

 

function setupJobFilters() { 

    const searchInput = document.getElementById('jobSearch'); 

    const categoryFilter = document.getElementById('categoryFilter'); 

    const locationFilter = document.getElementById('locationFilter'); 

    const resultsText = document.getElementById('jobResults'); 

     

    function filterJobs() { 

        const searchTerm = searchInput.value.toLowerCase(); 

        const category = categoryFilter.value; 

        const location = locationFilter.value; 

         

        let filtered = window.allJobs.filter(job => { 

            const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 

                                job.description.toLowerCase().includes(searchTerm); 

            const matchesCategory = category === 'all' || job.category === category; 

            const matchesLocation = location === 'all' ||  

                                  job.location.toLowerCase().replace(/\s+/g, '-') === location; 

             

            return matchesSearch && matchesCategory && matchesLocation; 

        }); 

         

        renderJobListings(filtered); 

        resultsText.textContent = `Showing ${filtered.length} of ${window.allJobs.length} available positions`; 

    } 

     

    searchInput.addEventListener('input', filterJobs); 

    categoryFilter.addEventListener('change', filterJobs); 

    locationFilter.addEventListener('change', filterJobs); 

} 

 

// Animation Setup 

function setupAnimations() { 

    // Intersection Observer for fade-in animations 

    const observerOptions = { 

        threshold: 0.1, 

        rootMargin: '0px 0px -50px 0px' 

    }; 

     

    const observer = new IntersectionObserver(function(entries) { 

        entries.forEach(entry => { 

            if (entry.isIntersecting) { 

                entry.target.classList.add('fade-in-up'); 

            } 

        }); 

    }, observerOptions); 

     

    // Observe cards and sections 

    document.querySelectorAll('.card, section > .container > .row > div').forEach(el => { 

        observer.observe(el); 

    }); 

} 

 

// Utility Functions 

function showFallbackLogo(img) { 

    img.style.display = 'none'; 

    img.nextElementSibling.classList.remove('d-none'); 

} 

 

function showFallbackLogoFooter(img) { 

    img.style.display = 'none'; 

    img.nextElementSibling.classList.remove('d-none'); 

} 

 

function openMap() { 

    const address = "Greenacres, Gqeberha, 6001, Eastern Cape, South Africa"; 

    const encodedAddress = encodeURIComponent(address); 

    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank'); 

} 

 

function openGoogleMaps(name, address) { 

    const query = encodeURIComponent(`${name}, ${address}`); 

    window.open(`https://maps.google.com/maps?q=${query}`, '_blank'); 

} 

 

function getDirections(locationName) { 

    const query = encodeURIComponent(locationName + " CAPACITI"); 

    window.open(`https://maps.google.com/maps?daddr=${query}`, '_blank'); 

} 

 

function applyForJob(jobId) { 

    window.open(`https://capaciti.breezy.hr/position/${jobId}`, '_blank'); 

} 

 

 

 

function initMap() { 

            // Western Cape locations 

            const westernCapeLocations = [ 

                {lat: -33.918861, lng: 18.484361, title: "Salt River Campus – 95 Durham Ave, Salt River"}, 

                {lat: -33.922, lng: 18.423, title: "Woodstock (Innovation Hub) – 35 Brickfield Rd"}, 

                {lat: -33.995, lng: 18.484, title: "Khayelitsha Bandwidth Barn – Lookout Hill, Khayelitsha"} 

            ]; 

            const mapWesternCape = new google.maps.Map(document.getElementById("map-western-cape"), { 

                zoom: 11, 

                center: {lat: -33.918861, lng: 18.484361} 

            }); 

            westernCapeLocations.forEach(loc => { 

                new google.maps.Marker({ 

                    position: {lat: loc.lat, lng: loc.lng}, 

                    map: mapWesternCape, 

                    title: loc.title 

                }); 

            }); 

 

            // Gauteng locations 

            const gautengLocations = [ 

                {lat: -26.2041, lng: 28.0473, title: "Braamfontein Campus – Hollard City Campus, 19 Ameshof Rd"}, 

                {lat: -26.190, lng: 28.030, title: "Milpark – Near 22OnSloane Innovation Hub"} 

            ]; 

            const mapGauteng = new google.maps.Map(document.getElementById("map-gauteng"), { 

                zoom: 12, 

                center: {lat: -26.2041, lng: 28.0473} 

            }); 

            gautengLocations.forEach(loc => { 

                new google.maps.Marker({ 

                    position: {lat: loc.lat, lng: loc.lng}, 

                    map: mapGauteng, 

                    title: loc.title 

                }); 

            }); 

 

            // Eastern Cape location 

            const easternCapeLocation = {lat: -33.960, lng: 25.615, title: "Gqeberha Tech Accelerator"}; 

            const mapEasternCape = new google.maps.Map(document.getElementById("map-eastern-cape"), { 

                zoom: 13, 

                center: {lat: easternCapeLocation.lat, lng: easternCapeLocation.lng} 

            }); 

            new google.maps.Marker({ 

                position: {lat: easternCapeLocation.lat, lng: easternCapeLocation.lng}, 

                map: mapEasternCape, 

                title: easternCapeLocation.title 

            }); 

        } 


        window.onload = initMap; 

function showToast(title, message, type = 'info') { 

    const toastContainer = document.getElementById('toastContainer'); 

    const toastId = 'toast-' + Date.now(); 

     

    const toastHTML = ` 

        <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true"> 

            <div class="toast-header bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'} text-white"> 

                <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'} me-2"></i> 

                <strong class="me-auto">${title}</strong> 

                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button> 

            </div> 

            <div class="toast-body"> 

                ${message} 

            </div> 

        </div> 

    `; 

    toastContainer.insertAdjacentHTML('beforeend', toastHTML); 
    const toast = new bootstrap.Toast(document.getElementById(toastId)); 
    toast.show(); 
    // Remove toast after it's hidden 
    document.getElementById(toastId).addEventListener('hidden.bs.toast', function() { 

        this.remove(); 
    }); 
  }