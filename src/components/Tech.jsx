import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Skills</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>

            <div className='flex flex-col gap-14 mt-10'>
                {technologies.map((category) => (
                    <div key={category.name} className="flex flex-col gap-5">
                        <h3 className="text-white text-[24px] font-bold pl-2 border-l-4 border-[#915eff]">{category.name}</h3>
                        <div className='flex flex-row flex-wrap justify-start gap-5'>
                            {category.skills.map((technology) => (
                                <div
                                    className='w-28 h-28 bg-tertiary rounded-[20px] flex justify-center items-center shadow-card border border-white/10 hover:border-[#915eff] transition-all cursor-default'
                                    key={technology.name}
                                >
                                    <p className="text-white text-[16px] font-bold text-center px-2">{technology.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
