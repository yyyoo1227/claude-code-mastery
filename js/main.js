/**
 * 개발자 웹 이력서 - JavaScript 인터랙션
 * 모바일 메뉴, 스무스 스크롤, 스크롤 애니메이션 등
 */

document.addEventListener('DOMContentLoaded', function() {
    // 초기화
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initNavHighlight();
    initHeaderScroll();
    updateYear();
});

/**
 * 모바일 메뉴 토글
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('open');
        });
    });
}

/**
 * 스무스 스크롤 구현
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * 스크롤 애니메이션 (Intersection Observer)
 */
function initScrollAnimations() {
    // 애니메이션 대상 요소 선택
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
    );

    // Intersection Observer 설정
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 요소 관찰 시작
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
}

/**
 * 현재 섹션에 따른 네비게이션 하이라이트
 */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function highlightNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight) {

                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // 스크롤 이벤트 (throttle 적용)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                highlightNav();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 초기 실행
    highlightNav();
}

/**
 * 헤더 스크롤 시 스타일 변경
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader();
}

/**
 * 푸터 연도 자동 업데이트
 */
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
