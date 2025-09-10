document.addEventListener('DOMContentLoaded', function() {

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('feature-box')) {
                    entry.target.classList.add('animate');
                } else if (entry.target.classList.contains('stat')) {
                    entry.target.classList.add('animate');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const featureBoxes = document.querySelectorAll('.feature-box');
    const stats = document.querySelectorAll('.stat');

    featureBoxes.forEach(function(box) {
        observer.observe(box);
    });

    stats.forEach(function(stat) {
        observer.observe(stat);
    });

    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            const solutionsGrid = document.querySelector('.solutions-grid');
            if (solutionsGrid) {
                solutionsGrid.style.opacity = '0';
                solutionsGrid.style.transform = 'translateY(20px)';

                setTimeout(function() {
                    solutionsGrid.style.opacity = '1';
                    solutionsGrid.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });

    const aboutItems = document.querySelectorAll('.about-item');
    aboutItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.style.transform = 'translateX(10px)';
            const self = this;
            setTimeout(function() {
                self.style.transform = 'translateX(5px)';
            }, 200);
        });
    });

    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat h3');

        statNumbers.forEach(function(stat) {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '+';
            let current = 0;
            const increment = target / 50;

            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                stat.textContent = Math.floor(current) + suffix;
            }, 40);
        });
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        statsObserver.observe(statsSection);
    }

    const parallaxElements = document.querySelectorAll('.hero-section');
    function handleScroll() {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(function(el) {
            const rate = scrolled * -0.1;
            el.style.transform = 'translateY(' + rate + 'px)';
        });
    }

    window.addEventListener('scroll', handleScroll);

    featureBoxes.forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const solutionColumns = document.querySelectorAll('.solution-column');
    solutionColumns.forEach(function(column) {
        column.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(1deg)';
        });

        column.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    function handleScrollProgress() {
        const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        document.body.style.setProperty('--scroll-progress', scrollProgress);
    }

    window.addEventListener('scroll', handleScrollProgress);

    const sidebarLinks = document.querySelectorAll('.sidebar-right li');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    const awsPartner = document.querySelectorAll('.partner-portal a');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

});