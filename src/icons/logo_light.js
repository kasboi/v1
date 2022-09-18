import { motion } from "framer-motion"
import "../components/styles/Logo.css"

const LightLogo = () => {
    const gVariant = {
        hidden: {
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                duration: 1,
                ease: [1, 0, 0.8, 1],
                when: "afterChildren",
                staggerChildren: 1.2,
            },
        },
    }

    const pathVariant = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="280.000000pt"
            height="182.000000pt"
            viewBox="0 0 280.000000 182.000000"
            preserveAspectRatio="xMidYMid meet"
            className="logo-svg"
            initial="hidden"
            animate="visible"
        >
            <motion.g
                transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
                variants={gVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    d="M1033 1367 c-33 -19 -401 -484 -408 -518 -15 -66 5 -90 173 -207 296
        -206 289 -202 335 -202 23 1 52 6 63 13 20 11 88 91 190 223 43 56 273 343
        333 416 l38 47 50 -23 c140 -65 177 -245 75 -358 -42 -47 -101 -77 -150 -78
        -82 0 -142 -54 -142 -127 0 -38 5 -50 35 -80 l35 -35 83 4 c49 3 104 14 137
        27 118 45 240 176 277 299 24 77 23 209 -1 285 -42 128 -156 249 -283 297 -79
        30 -194 38 -228 16 -14 -9 -134 -153 -266 -319 -133 -166 -248 -309 -255 -316
        -12 -13 -27 -6 -109 50 -52 35 -93 69 -90 76 2 6 55 76 118 155 180 226 184
        234 152 302 -27 57 -107 84 -162 53z"
                    variants={pathVariant}
                />
                <motion.path
                    d="M758 1810 c-117 -20 -262 -78 -355 -141 -69 -47 -188 -164 -239 -236
        -55 -75 -115 -205 -140 -298 -29 -108 -27 -362 4 -470 71 -245 250 -461 478
        -574 45 -22 117 -51 160 -63 79 -23 82 -23 734 -23 652 0 655 0 734 23 304 88
        550 334 638 637 20 69 23 103 23 240 0 182 -12 246 -75 382 -49 105 -88 161
        -174 252 -120 124 -245 200 -417 253 -73 22 -81 22 -699 24 -344 1 -646 -2
        -672 -6z m1266 -174 c154 -30 273 -94 392 -212 70 -69 89 -95 132 -185 59
        -122 82 -216 82 -331 0 -117 -22 -208 -79 -324 -99 -206 -287 -352 -512 -399
        -103 -22 -1175 -22 -1278 0 -267 56 -484 258 -566 525 -9 30 -19 103 -22 161
        -7 139 12 230 79 368 43 90 62 116 132 185 116 115 237 182 385 211 100 20
        1150 21 1255 1z"
                    variants={pathVariant}
                />
            </motion.g>
        </motion.svg>
    )
}

export default LightLogo
