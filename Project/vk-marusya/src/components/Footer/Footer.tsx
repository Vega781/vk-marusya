import { useRef } from 'react'
import { LinkComponent } from '../LinkComponent/LinkComponent'
import styles from './Footer.module.css'
import { navigationAnimation } from '../../animations/animations'

export const Footer = () => {
    const linkRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseEnter = (index: number) => {
        if (linkRefs.current[index]) {
            navigationAnimation.linkHover(linkRefs.current[index]!);
        }
    };

    const handleMouseLeave = (index: number) => {
        if (linkRefs.current[index]) {
            navigationAnimation.linkUnhover(linkRefs.current[index]!);
        }
    };

    return (
        <div className={styles.footer__container}>
            <LinkComponent href='https://vk.com/shokasora' className={styles.footer__link}>
                <div 
                    ref={el => linkRefs.current[0] = el}
                    className={styles.link__container}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                >
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.4865 1.37968C18.6253 0.985106 18.4865 0.698125 17.8719 0.698125H15.8298C15.3144 0.698125 15.0764 0.949207 14.9377 1.21829C14.9377 1.21829 13.8869 3.51408 12.4198 5.00273C11.9439 5.4332 11.7259 5.57669 11.4682 5.57669C11.3293 5.57669 11.1509 5.4332 11.1509 5.03862V1.36173C11.1509 0.895411 10.9923 0.680176 10.5561 0.680176H7.34436C7.02714 0.680176 6.8289 0.895411 6.8289 1.11065C6.8289 1.55907 7.56243 1.66666 7.64174 2.92217V5.64843C7.64174 6.24034 7.52281 6.34793 7.26505 6.34793C6.57115 6.34793 4.88596 4.03419 3.87484 1.39763C3.67655 0.877462 3.47831 0.680176 2.96286 0.680176H0.90093C0.306165 0.680176 0.207031 0.93131 0.207031 1.20034C0.207031 1.68461 0.90093 4.12389 3.43863 7.35236C5.12388 9.55846 7.52281 10.7422 9.68383 10.7422C10.9923 10.7422 11.1509 10.4732 11.1509 10.0248V8.3568C11.1509 7.81868 11.2699 7.72904 11.6862 7.72904C11.9836 7.72904 12.5189 7.87248 13.7283 8.9307C15.1161 10.1862 15.354 10.7602 16.1272 10.7602H18.1693C18.764 10.7602 19.0416 10.4911 18.883 9.97098C18.7046 9.45087 18.0305 8.69757 17.1582 7.80073C16.6823 7.29857 15.9686 6.74256 15.7505 6.47347C15.4531 6.1148 15.5324 5.97131 15.7505 5.64843C15.7307 5.64843 18.2287 2.45585 18.4865 1.37968Z" fill="white" fillOpacity="0.8" />
                    </svg>
                </div>
            </LinkComponent>
            <LinkComponent href='https://fakecrime.bio/vega7' className={styles.footer__link}>
                <div 
                    ref={el => linkRefs.current[1] = el}
                    className={styles.link__container}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0013 1.04957C14.6622 1.23093 15.1827 1.7653 15.3593 2.4439C15.6803 3.67379 15.6803 6.23997 15.6803 6.23997C15.6803 6.23997 15.6803 8.80606 15.3593 10.036C15.1827 10.7146 14.6622 11.249 14.0013 11.4305C12.8035 11.76 8.00031 11.76 8.00031 11.76C8.00031 11.76 3.19708 11.76 1.99927 11.4305C1.33835 11.249 0.817854 10.7146 0.641214 10.036C0.320312 8.80606 0.320312 6.23997 0.320312 6.23997C0.320312 6.23997 0.320312 3.67379 0.641214 2.4439C0.817854 1.7653 1.33835 1.23093 1.99927 1.04957C3.19708 0.719971 8.00031 0.719971 8.00031 0.719971C8.00031 0.719971 12.8035 0.719971 14.0013 1.04957ZM6.56028 4.0802V8.88021L10.4003 6.4803L6.56028 4.0802Z" fill="white" fillOpacity="0.8" />
                    </svg>
                </div>
            </LinkComponent>
            <LinkComponent href='https://hh.ru/resume/ef39ebb2ff0d13a02c0039ed1f577968764970' className={styles.footer__link}>
                <div 
                    ref={el => linkRefs.current[2] = el}
                    className={styles.link__container}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.91902 13.2623L10.5725 15.8239C11.116 16.3475 11.116 17.1979 10.5725 17.7221C10.0294 18.2462 9.14932 18.2462 8.60687 17.7221L5.99801 15.2049L3.39142 17.7221C3.11963 17.9839 2.76349 18.1149 2.40735 18.1149C2.05178 18.1149 1.69621 17.9839 1.42441 17.7221C0.881398 17.1979 0.881398 16.3481 1.42385 15.8239L4.07758 13.2623C3.1114 13.0498 2.17958 12.6803 1.32132 12.1605C0.671803 11.7652 0.476693 10.937 0.885942 10.3094C1.29406 9.68111 2.15232 9.49195 2.80297 9.88727C4.74612 11.0672 7.24933 11.0675 9.19362 9.88727C9.84428 9.49195 10.7023 9.68111 11.1112 10.3094C11.5205 10.9364 11.3248 11.7652 10.6753 12.1605C9.81701 12.6808 8.8852 13.0498 7.91902 13.2623Z" fill="white" fillOpacity="0.8" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.24023 4.94199C1.24023 7.46797 3.36913 9.52269 5.98679 9.52269C8.60502 9.52269 10.7333 7.46797 10.7333 4.94199C10.7333 2.41519 8.60502 0.359924 5.98679 0.359924C3.36913 0.359924 1.24023 2.41519 1.24023 4.94199ZM7.95202 4.94151C7.95202 3.89537 7.07048 3.04469 5.98672 3.04469C4.90381 3.04469 4.02141 3.89537 4.02141 4.94151C4.02141 5.98682 4.90381 6.83805 5.98672 6.83805C7.07048 6.83805 7.95202 5.98682 7.95202 4.94151Z" fill="white" fillOpacity="0.8" />
                    </svg>
                </div>
            </LinkComponent>
            <LinkComponent href='https://t.me/Vega781' className={styles.footer__link}>
                <div 
                    ref={el => linkRefs.current[3] = el}
                    className={styles.link__container}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.600085 6.85883C2.28343 5.93159 4.16251 5.15771 5.91823 4.37987C8.93876 3.10583 11.9713 1.85387 15.0344 0.688307C15.6304 0.489707 16.7012 0.295487 16.8062 1.17869C16.7487 2.42885 16.5122 3.67169 16.35 4.91453C15.9382 7.64765 15.4623 10.3714 14.9982 13.0955C14.8383 14.0029 13.7016 14.4726 12.9742 13.892C11.2263 12.7113 9.46495 11.5421 7.73935 10.3341C7.17409 9.75971 7.69825 8.93489 8.20309 8.52473C9.64273 7.10597 11.1695 5.90057 12.5339 4.40849C12.9019 3.51971 11.8145 4.26875 11.4558 4.49825C9.48493 5.85641 7.56229 7.29749 5.48437 8.49113C4.42297 9.07541 3.18589 8.57609 2.12497 8.25005C1.17372 7.85621 -0.220212 7.45943 0.599989 6.85889L0.600085 6.85883Z" fill="white" fillOpacity="0.8" />
                    </svg>
                </div>
            </LinkComponent>
        </div>
    )
}