import { ImageComp } from '../../components/ImageComp/ImageComp'
import styles from '../../styles/mainPage.module.css'
import image from '../../assets/test-image.jpg'
import { Button } from '../../components/Button/Button'
import { ListTop } from '../../components/ListTop/ListTop'

const items = [
    'https://avatars.mds.yandex.net/i?id=78dbd5a7f8b4a72a2b459fa81c3b2119fce82214-12422078-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41fee39916-12715029-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d359cb45c43b8708a57898cefb47b01e43753ab3-4468364-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6d63867ce125a919ab022b107e452c06b62cb323eefa549e-12822619-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6e18f7b4d5f143f17f60d9753e8ffd8f875e4f14-10229484-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=78dbd5a7f8b4a72a2b459fa81c3b2119fce82214-12422078-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=68a4b4fe09f4c2865f4446bce0b18a41fee39916-12715029-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=d359cb45c43b8708a57898cefb47b01e43753ab3-4468364-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6d63867ce125a919ab022b107e452c06b62cb323eefa549e-12822619-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6e18f7b4d5f143f17f60d9753e8ffd8f875e4f14-10229484-images-thumbs&n=13',
]

export const MainPage = () => {
    return (
        <div className={styles.main__container}>
            <div className={styles.random__container}>
                <div className={styles.left__content}>
                    <div className={styles.random__stats}>
                        <div className={styles.stats__item}>
                            <div className={styles.random__rating}>
                                <span className={styles.rating__star}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white" />
                                    </svg>
                                </span>
                                <span className={styles.rating__number}>7,5</span>
                            </div>
                        </div>
                        <div className={styles.stats__item}>
                            <span className={styles.random__release}>1979</span>
                        </div>
                        <div className={styles.stats__item}>
                            <span className={styles.random__genre}>Детектив</span>
                        </div>
                        <div className={styles.stats__item}>
                            <span className={styles.random__duration}>1 ч 7 мин</span>
                        </div>
                    </div>
                    <h1 className={styles.random__title}>
                        Шерлок Холмс и доктор Ватсон: Знакомство
                    </h1>
                    <div className={styles.random__description}>
                        Увлекательные приключения самого известного сыщика всех времен
                    </div>
                    <div className={styles.buttons__container}>
                        <Button className={styles.random__button} onClick={() => { }}>Трейлер</Button>
                        <Button className={styles.random__button} onClick={() => { }}>О фильме</Button>
                        <Button className={styles.random__button} onClick={() => { }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white" />
                            </svg>

                        </Button>
                        <Button className={styles.random__button} onClick={() => { }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z" fill="white" />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className={styles.right__content}>
                    <ImageComp path={image} alt={'MainPage Image'} className={styles.main__image} />
                </div>
            </div>
            <div className={styles.top10}>
                <div className={styles.top10__container}>
                    <h1 className={styles.top10__title}>Топ 10 фильмов</h1>
                    <div className={styles.top10__list_container}>
                        <ListTop items={items} listClassName={styles.top10__list} itemClassName={styles.top10__item} imageClassName={styles.top10__image} />
                    </div>
                </div>
            </div>
        </div>
    )
}