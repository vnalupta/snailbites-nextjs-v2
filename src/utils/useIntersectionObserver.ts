import { useState, useEffect } from "react";

/**
 * @param {*} ref
 * @param {*} settings
 * @example
 *
 * const [inView] = useIntersectionObserver(footerRef, {
 *   threshold: 0
 * })
 *
 * useEffect(() => {
 *  // perform action
 * }, [inView]);
 *
 */
const useIntersectionObserver = (
    ref,
    { threshold = 0, root = null, rootMargin = "0%" }
) => {
    const [state, setState] = useState({
        inView: false,
        triggered: false,
        entry: undefined
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                if (entries[0].intersectionRatio > 0) {
                    setState({
                        inView: true,
                        triggered: true,
                        entry: observerInstance
                    })
                    observerInstance.unobserve(ref.current);
                }

                return;
            }, {
                threshold: threshold,
                root: root ,
                rootMargin: rootMargin
            }
        )

        if(ref.current && !state.triggered) {
            observer.observe(ref.current);
        }
    })

    return [state.inView, state.entry]
}

export default useIntersectionObserver;