export default function scrollHandler(target) {  
    if (!target) {
        return;
    }

    if (target === 'work') {
        setTimeout(() => {
            // convert to Ref
            const height = document.getElementById('work').offsetTop || 1600;
            window.scrollTo({ top: height - 100, behavior: 'smooth' })
        }, 600);   
    }

    if (target === 'home') {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 600);  
    }         
}