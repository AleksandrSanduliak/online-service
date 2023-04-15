window.onload = () => {
    const interviewBlock = document.querySelector('#interview')
    const opt = {
        rootMargin: '50px 0px 550px 0px',
        threshold: [0, 0.5, 1],
    }
    const swiperFN = (entries, observer) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const link = document.createElement('link')
                link.type = 'text/css'
                link.rel = 'stylesheet'
                link.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
                document.getElementsByTagName('head')[0].appendChild(link)

                const swiperScript = document.createElement('script')
                swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
                document.getElementsByTagName('head')[0].appendChild(swiperScript)

                swiperScript.onload = async () => {
                    let {swiper} = await import('./slider.js')
                }
                console.log('script worked')
                observer.unobserve(interviewBlock)
            }
        })
    }
    const swiper = new IntersectionObserver(swiperFN, opt)
    swiper.observe(interviewBlock)

}