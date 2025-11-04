"use client"
import { useState, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

const financialStages = [
  {
    title: "Automation Ready",
    description:
      "Salesforce data, knowledge, and governance are in place - we want to scale agentic AI across service teams.",
  },
  {
    title: "Designing the Blueprint",
    description:
      "We're aligning data sources and workflows and need guidance to map our first Agentforce playbooks.",
  },
  {
    title: "Exploring the Opportunity",
    description:
      "We're assessing where to start with automation, which metrics to target, and the change management required.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
}

interface FinancialSituationProps {
  onFinancialSituationSuccess: (selectedStage: string) => void // Define prop type for callback
}

export const FinancialSituation: React.FC<FinancialSituationProps> = ({
  onFinancialSituationSuccess,
}) => {
  const [selectedStage, setSelectedStage] = useState("")

  const scrollToNextSection = () => {
    console.log("Scrolling to the next section...")
    const nextSection = document.querySelector("#featureDiscovery")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSelectStage = (stage: string) => {
    if (selectedStage === stage) {
      setSelectedStage("") // Allow reset when the same pill is clicked
      return
    }
    setSelectedStage(stage)
  }

  useEffect(() => {
    if (selectedStage) {
      onFinancialSituationSuccess(selectedStage)
      scrollToNextSection()
    }
  }, [selectedStage, onFinancialSituationSuccess])

  return (
    <section
      id='financialSituation'
      className='bg-gradient-to-b from-white to-[#7832FE] py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='section-heading text-center mb-12'>
          <h2 className='section-title text-4xl font-extrabold leading-tight'>
            Automation readiness checkpoint
          </h2>
          <p className='section-description mt-4 text-xl leading-relaxed'>
            Identify where your team is on the journey to Salesforce agentic AI so we can tailor the next step of the engagement.
          </p>
        </div>
        <div className='flex flex-col gap-8 items-center mt-10 lg:flex-row lg:items-start lg:justify-center'>
          {financialStages.map(({ title, description }) => (
            <motion.div
              key={title}
              className='p-8 border border-white/20 rounded-3xl shadow-lg bg-white/90 max-w-md w-full transition-transform duration-300 ease-out'
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              whileHover='hover'
            >
              <h3 className='text-2xl font-bold text-black/90 mb-4'>{title}</h3>
              <p className='text-lg text-black/70 leading-relaxed mb-6'>
                {description}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.95,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 500, damping: 10 },
                }}
                animate={{
                  scale: selectedStage === title ? 1.05 : 1,
                  backgroundColor:
                    selectedStage === title ? "#111111" : "#7832FE",
                  transition: { duration: 0.2 },
                }}
                className={twMerge(
                  "btn btn-primary text-white px-6 py-3 rounded-full shadow-lg focus:ring-2 ",
                  selectedStage === title && "bg-black"
                )}
                onClick={() => handleSelectStage(title)}
              >
                {selectedStage === title ? "Selected" : "Select stage"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
