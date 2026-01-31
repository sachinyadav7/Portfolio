import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Cybersecurity-focused Computer Science undergraduate specializing in Application Security, Secure Backend Engineering, Authentication Systems, and Threat-Aware System Design.
                <br /><br />
                Experienced in building encrypted platforms, access-controlled APIs, and AI-powered security analytics tools. Seeking Security Engineer / SOC Analyst / AppSec / Cybersecurity roles.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                <motion.div
                    variants={fadeIn("right", "spring", 0.5, 0.75)}
                    className="w-full sm:w-[250px]"
                >
                    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
                            <h3 className="text-white text-[20px] font-bold text-center">5+ Production Projects</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("right", "spring", 0.75, 0.75)}
                    className="w-full sm:w-[250px]"
                >
                    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
                            <h3 className="text-white text-[20px] font-bold text-center">Backend & AI Focused</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("right", "spring", 1.0, 0.75)}
                    className="w-full sm:w-[250px]"
                >
                    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
                            <h3 className="text-white text-[20px] font-bold text-center">Dockerized Deployments</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("right", "spring", 1.25, 0.75)}
                    className="w-full sm:w-[250px]"
                >
                    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
                            <h3 className="text-white text-[20px] font-bold text-center">Cybersecurity Background</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
