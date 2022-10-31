import MainLayout from "../src/components/MainLayout";
import {motion} from 'framer-motion';

import './../styles/scrollbar.css';
export default function MyApp({Component, pageProps, router}) {
    return (

        <motion.div key={router.route}
                    transition={{ duration:1 }}
                    initial={{opacity: 0.89}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

        >
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </motion.div>

    )
}